const Input = ({ placeholder, name, ariaLabel, type }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      aria-label={ariaLabel}
      type={type}
    />
  );
};
