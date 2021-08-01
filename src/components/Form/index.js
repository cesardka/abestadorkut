import { Input } from "../Input";

export const Form = ({ fields, onSubmit, onChange, submitButtonText }) => {
  return (
    <form onSubmit={onSubmit}>
      {fields.length > 0 &&
        fields.map((fieldProps) => (
          <Input
            key={`${fieldProps.name}_${fieldProps.type ?? "text"}`}
            onChange={onChange}
            {...fieldProps}
          />
        ))}
      <button type="submit">{submitButtonText}</button>
    </form>
  );
};
