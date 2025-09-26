type DisplayTextProps = {
  title: string;
  className?: string;
  children?: React.ReactNode;
};

export default function DisplayText({ title, className, children }: DisplayTextProps) {
  return (
    <>
      <div className={`content__title ${className}`}>{title}</div>
      {children}
    </>
  );
}
