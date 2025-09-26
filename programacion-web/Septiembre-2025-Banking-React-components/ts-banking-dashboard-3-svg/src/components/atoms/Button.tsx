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
  if (disabled) {
    className += ' button--disabled';
  }

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(id);
    }
  };

  return (
    <button
      className={'button ' + className}
      disabled={disabled}
      onClick={handleClick}
    >
      {text && 'left' === textAlign && text}
      {icon && (
        <span className='button__icon'>
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
