import React, { useEffect, useState } from "react";
import Select from "react-select";
import { fetchSports } from "../../services/api/RegisterService";

interface Sport {
  id: number;
  name: string;
}

interface Props {
  value: { id: number | null; name: string };
  onChange: (sport: { id: number | null; name: string }) => void;
  error?: string;
}

const Sport: React.FC<Props> = ({ value, onChange, error }) => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadSports = async () => {
      setLoading(true);
      const res = await fetchSports();
      if (res.ok) {
        setSports(res.data.data.data || []);
      }
      setLoading(false);
    };
    loadSports();
  }, []);

  const options = sports.map((s) => ({
    value: s.id,
    label: s.name,
  }));

  return (
    <div className={`field ${error ? "rs-invalid" : ""}`}>
      <label>Sport Category<span className="text-red-500">*</span></label>
      <Select
        classNamePrefix="react-select"
        placeholder="Select Sport"
        options={options}
        isClearable
        isLoading={loading}
        value={options.find((o) => o.value === value.id) || null}
        onChange={(opt) =>
  onChange(opt ? { id: opt.value, name: opt.label } : { id: null, name: "" })
}
        styles={{
          control: (base) => ({
            ...base,
            borderColor: error ? "#dc3545" : base.borderColor,
            boxShadow: error
              ? "0 0 0 3px rgba(220,53,69,.25)"
              : "none",
            background: "transparent",
          }),
        }}
      />
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default Sport;
