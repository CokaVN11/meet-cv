import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type: "text" | "number" | "textarea" | "date" | "select";
  placeholder: string;
  required?: boolean;
  min?: string;
  max?: string;
  unit?: string;
  options?: { id: string; label: string }[];
  value?: string | number;
  onChange?: (e: React.ChangeEvent) => void;
  className?: string;
  containerClassName?: string;
}



export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  required = false,
  min,
  max,
  unit,
  options,
  value,
  onChange,
  className = "",
  containerClassName = "sm:col-span-3",
}) => {
  const defaultClasses = "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6";
  const inputProps = {
    required,
    id,
    name: id,
    placeholder,
    value,
    onChange,
    className: `${defaultClasses} ${className}`
  }

  const inputFields = {
    text: <input type="text" {...inputProps} />,
    textarea: <textarea {...inputProps} />,
    date: <input type="date" {...inputProps} />,
    number: <input type="number" {...inputProps} min={min} max={max} />,
    select: (
      <select {...inputProps}>
        {options?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    ),
  }

  return (
    <div className={containerClassName}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 text-left"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className={`mt-2 ${unit ? "relative" : ""}`}>
        {inputFields[type]}
        {unit && (
          <div className="absolute flex inset-y-0 right-0 items-center pr-3 pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{unit}</span>
          </div>
        )}
      </div>
    </div>
  );
};
