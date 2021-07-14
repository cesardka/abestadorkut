export const Form = ({ children, onSubmit, submitButtonText }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button type="submit">{submitButtonText}</button>
    </form>
  );
};
