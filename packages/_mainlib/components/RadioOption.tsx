import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import useId from '../hooks/useId';

function RadioOption(
  {
    className,
    children,
    checked,
    id: elementId,
    ...rest
  }: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
  forwardedRef: Ref<HTMLInputElement>,
) {
  const uniqueId = useId('radio-option');
  const id = elementId ?? uniqueId;

  return (
    <div className={clsx('radio-option', className)}>
      <input
        className="visually-hidden radio-option__input"
        id={id}
        type="radio"
        checked={checked}
        ref={forwardedRef}
        {...rest}
      />
      <label className="radio-option__label" htmlFor={id}>
        <span
          className={clsx(
            'radio-option__label-text',
            'typography-t5',
            `font-weight--${checked ? 'semibold' : 'medium'}`,
          )}>
          {children}
        </span>
      </label>
    </div>
  );
}

export default forwardRef(RadioOption);
