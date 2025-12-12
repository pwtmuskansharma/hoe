import React from "react";
import { addressLabels, haryanaLocations } from "../../data/addressLabels";

export default function AddressFormTailwind({ formData, updateFormData }) {
  const { tempAddress, permAddress, sameAddress } = formData;

  const handleCheckbox = (e) => {
    const checked = e.target.checked;
    if (checked) {
      updateFormData({
        ...formData,
        sameAddress: true,
        permAddress: { ...tempAddress },
      });
    } else {
      updateFormData({
        ...formData,
        sameAddress: false,
        permAddress: {
          block: "",
          village: "",
          postOffice: "",
          area: "",
          district: "",
          city: "",
          zipcode: "",
        },
      });
    }
  };

  const handleTempChange = (e) => {
    const { name, value } = e.target;
    const updatedTemp = { ...tempAddress, [name]: value };

    updateFormData({
      ...formData,
      tempAddress: updatedTemp,
      permAddress: sameAddress ? updatedTemp : permAddress,
    });
  };

  const handlePermChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      ...formData,
      permAddress: { ...permAddress, [name]: value },
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      {/* TEMPORARY ADDRESS */}
      <h2 className="text-xl font-semibold mb-3">
        {addressLabels.tempAddressTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["block", "village", "postOffice", "area"].map((field) => (
          <InputWithLabel
            key={field}
            name={field}
            label={addressLabels[field]}
            value={tempAddress[field]}
            onChange={handleTempChange}
          />
        ))}
        <SelectDropdown
          label={addressLabels.district}
          name="district"
          value={tempAddress.district}
          options={Object.keys(haryanaLocations.districts)}
          onChange={handleTempChange}
        />
        <InputWithLabel
          name="zipcode"
          label={addressLabels.zipcode}
          value={tempAddress.zipcode}
          maxLength={6}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[0-9]*$/.test(value)) {
              handleTempChange(e);
            }
          }}
        />
      </div>

      {/* CHECKBOX */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={sameAddress}
          onChange={handleCheckbox}
          className="h-4 w-4"
        />
        <label className="text-sm font-medium mt-0">
          {addressLabels.checkboxLabel}
        </label>
      </div>

      {/* PERMANENT ADDRESS */}
      <h2 className="text-xl font-semibold mt-6 mb-3">
        {addressLabels.permAddressTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["block", "village", "postOffice", "area"].map((field) => (
          <InputWithLabel
            key={field}
            name={field}
            label={addressLabels[field]}
            value={permAddress[field]}
            onChange={handlePermChange}
            disabled={sameAddress}
          />
        ))}
        <SelectDropdown
          label={addressLabels.district}
          name="district"
          value={permAddress.district}
          options={Object.keys(haryanaLocations.districts)}
          onChange={handlePermChange}
          disabled={sameAddress}
        />
        <InputWithLabel
          name="zipcode"
          label={addressLabels.zipcode}
          value={permAddress.zipcode}
          maxLength={6}
          onChange={(e) => {
            const value = e.target.value;

            // Only numbers allowed
            if (/^[0-9]*$/.test(value)) {
              handlePermChange(e);
            }
          }}
          disabled={sameAddress}
        />
      </div>
    </div>
  );
}

/* ----------------------- REUSABLE COMPONENTS ------------------------ */
function InputWithLabel({ name, label, value, onChange, disabled, ...rest }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={label}
        {...rest} // allows maxLength to work
        className={`border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
          disabled ? "bg-gray-200" : ""
        }`}
      />
    </div>
  );
}

function SelectDropdown({ label, name, value, onChange, options, disabled }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`border px-3 py-2 rounded-lg outline-none ${
          disabled ? "bg-gray-200" : "focus:ring-2 focus:ring-blue-500"
        }`}
      >
        <option value="">Select {label}</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
