export default function Button({
  text,
  icon,
  className = '',
  disabled = false,
  textAlign = 'right',
}) {
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
  return (
    <button className={'button ' + className} disabled={disabled}>
      {text && 'left' === textAlign && text}
      {icon && (
        <svg className='button__icon' alt='House icon'>
          <use href={icon} width='100%' height='100%'></use>
        </svg>
      )}
      {text && 'right' === textAlign && text}
    </button>
  );
}
