import React, { useEffect, useState } from "react";
import Select from "react-select";
import { fetchSportCategories } from "../../services/api/RegisterService";

interface Category {
  id: number;
  name: string;
}

interface Props {
  sportId: number | null;
  value: { id: number | null; name: string }[];
  onChange: (categories: { id: number | null; name: string }[]) => void;
  error?: string;
}

const SportCategorySelect: React.FC<Props> = ({
  sportId,
  value,
  onChange,
  error,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState<string>("");

  useEffect(() => {
    if (!sportId) {
      setCategories([]);
      onChange([]); // reset
      setLocalError("");
      return;
    }

    const loadCategories = async () => {
      setLoading(true);
      setLocalError("");

      try {
        const res = await fetchSportCategories(sportId);
        if (res.ok) {
          const data = res.data?.data?.data || [];
          if (data.length === 0) {
            setLocalError("No sport categories available for this sport.");
          }
          setCategories(data);
        } else {
          setCategories([]);
          setLocalError("Failed to load categories.");
        }
      } catch (e) {
        console.error(e);
        setLocalError("Something went wrong while fetching categories.");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, [sportId]);

  const options =
    categories.length > 0
      ? categories.map((c) => ({
          value: c.id,
          label: c.name,
        }))
      : [{ value: 0, label: "No Sport categories available" }];

  return (
    <div className={`field ${error && !localError ? "rs-invalid" : ""}`}>
      <label>Sport Events<span className="text-red-500">*</span></label>
      <Select
        isMulti
        classNamePrefix="react-select"
        placeholder={
          sportId
            ? loading
              ? "Loading categories..."
              : "Select Sport Events"
            : "Select Sport Event first"
        }
        options={options}
        isDisabled={!sportId || categories.length === 0}
        isLoading={loading}
        value={options.filter((opt) =>
          value.some((v) => v.id === opt.value)
        )}
        onChange={(selected) => {
          const selectedCategories =
            selected && Array.isArray(selected)
              ? selected
                  .filter((s) => s.value !== 0)
                  .map((s) => ({ id: s.value, name: s.label }))
              : [];
          onChange(selectedCategories);
        }}
        styles={{
          control: (base) => ({
            ...base,
            borderColor: error && !localError ? "#dc3545" : base.borderColor,
            boxShadow:
              error && !localError
                ? "0 0 0 3px rgba(220,53,69,.25)"
                : "none",
            background: "transparent",
          }),
        }}
      />
      {(error) && (!localError) && (
        <div className="error-text">{error || localError}</div>
      )}
    </div>
  );
};

export default SportCategorySelect;
