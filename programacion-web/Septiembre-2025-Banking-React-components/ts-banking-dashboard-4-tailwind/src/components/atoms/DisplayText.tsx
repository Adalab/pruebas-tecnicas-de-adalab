type DisplayTextProps = {
  title: string;
  className?: string;
  children?: React.ReactNode;
};

export default function DisplayText({ title, className, children }: DisplayTextProps) {
  // Define title color variants based on className
  let titleColorClass = 'text-muted-foreground';

  if (className?.includes('content__title--blue')) {
    titleColorClass = 'text-blue-400';
  } else if (className?.includes('content__title--green')) {
    titleColorClass = 'text-green-400';
  } else if (className?.includes('content__title--purple')) {
    titleColorClass = 'text-purple-400';
  } else if (className?.includes('content__title--orange')) {
    titleColorClass = 'text-orange-400';
  } else if (className?.includes('content__title--red')) {
    titleColorClass = 'text-red-400';
  } else if (className?.includes('content__title--muted')) {
    titleColorClass = 'text-muted-foreground';
  }

  return (
    <>
      <div className={`font-semibold text-lg mb-3 ${titleColorClass}`}>{title}</div>
      {children}
    </>
  );
}
