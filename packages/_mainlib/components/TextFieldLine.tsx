import { InputHTMLAttributes, useCallback, useRef } from 'react';
import TextFieldLineContainer, {
  TextFieldLineContainerBaseProps,
} from '../components/TextFieldLineContainer';

export interface Props
  extends TextFieldLineContainerBaseProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'onClick'> {}

export default function TextFieldLine({
  className,
  label,
  hasError,
  style,
  autoComplete = 'off',
  focused,
  ...inputProps
}: Props) {
  const value = inputProps.value;
  const inputRef = useRef<HTMLInputElement>(null);

  const hasValue = value !== '';

  const handleClick = useCallback(() => inputRef.current?.focus(), []);

  return (
    <TextFieldLineContainer
      className={className}
      label={label}
      hasError={hasError}
      disabled={inputProps.disabled}
      hasValue={hasValue}
      onClick={handleClick}
      value={value as any}>
      <input
        {...inputProps}
        ref={inputRef}
        className="text-field-line__input"
        value={value}
        autoComplete={autoComplete}
        style={style}
        placeholder={undefined}
        onChange={(e) => {
          inputProps.onChange?.(e);
        }}
      />
    </TextFieldLineContainer>
  );
}
