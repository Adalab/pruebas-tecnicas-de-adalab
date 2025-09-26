export default function DisplayText({ title, className, children }) {
  return (
    <>
      <div className={`content__title ${className}`}>{title}</div>
      {children}
    </>
  );
}
