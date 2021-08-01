export const Input = ({
  label,
  name,
  ariaLabel = label,
  type = "text",
  onChange,
  value,
}) => {
  return (
    <input
      placeholder={label}
      name={name}
      aria-label={ariaLabel}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
};
