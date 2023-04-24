import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import './assets/styles/button.css';

type Props = PropsWithChildren<{
  type?: 'primary' | 'danger' | 'light' | 'dark';
  color?: 'red' | 'rose' | 'blue';
  style?: 'fill' | 'outline' | 'weak' | 'flat';
  display?: 'inline' | 'block' | 'full';
  size?: 'small' | 'normal' | 'big';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}>;
function Button(props: Props) {
  const {
    type = 'primary',
    style = 'fill',
    color = 'red',
    display = 'inline',
    size = 'big',
    disabled,
    className,
    children,
    ...rest
  } = props;
  return (
    <button
      // id={buttonId}
      className={clsx(
        'button',
        `button__color-${color}`,
        `button__size-${size}`,
        'button__transition',
        { disabled: disabled },
        className,
      )}
      {...rest}
      disabled={disabled}>
      <span className="button__content">{children}</span>
    </button>
  );
}

export default Button;
