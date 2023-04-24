import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import './assets/styles/range-input.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export default function RangeInput({ className, ...rest }: Props) {
  return (
    <input
      type="range"
      className={clsx(className, 'custom-range')}
      style={{}}
      {...rest}
    />
  );
}
