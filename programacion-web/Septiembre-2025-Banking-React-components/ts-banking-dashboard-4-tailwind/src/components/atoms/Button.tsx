type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  textAlign?: 'left' | 'right';
  id?: string;
  onClick?: (id: string) => void;
};

export default function Button({
  text,
  icon,
  className = '',
  disabled = false,
  textAlign = 'right',
  id = '',
  onClick,
}: ButtonProps) {
  if (!text && !icon) {
    text = 'Botón';
  }
  if ('left' !== textAlign && 'right' !== textAlign) {
    textAlign = 'right';
  }
  if (typeof disabled !== 'boolean') {
    disabled = true;
  }

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(id);
    }
  };

  // Define color variants based on className
  let colorClasses = '';
  if (disabled) {
    colorClasses = 'bg-slate-600 text-slate-400 cursor-not-allowed hover:bg-slate-600';
  } else if (className.includes('button--blue')) {
    colorClasses = 'bg-blue-600 hover:bg-blue-700 text-white';
  } else if (className.includes('button--green')) {
    colorClasses = 'bg-green-600 hover:bg-green-700 text-white';
  } else if (className.includes('button--purple')) {
    colorClasses = 'bg-purple-600 hover:bg-purple-700 text-white';
  } else if (className.includes('button--orange')) {
    colorClasses = 'bg-orange-600 hover:bg-orange-700 text-white';
  } else if (className.includes('button--red')) {
    colorClasses = 'bg-red-600 hover:bg-red-700 text-white';
  } else {
    colorClasses = 'bg-blue-600 hover:bg-blue-700 text-white';
  }

  const justifyClass = textAlign === 'left' ? 'justify-start' : textAlign === 'right' ? 'justify-center' : 'justify-end';

  return (
    <button
      className={`whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-9 px-4 py-2 has-[>svg]:px-3 ${justifyClass} flex items-center gap-2 ${colorClasses}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {text && 'left' === textAlign && text}
      {icon && (
        <span className='h-4 w-4'>
          {icon}
        </span>
      )}
      {/*         <svg className='button__icon'>
          <use href={icon} width='100%' height='100%'></use>
        </svg> */}
      {text && 'right' === textAlign && text}
    </button>
  );
}
