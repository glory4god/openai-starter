import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { colors } from '../constants/colors';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export default function BigInput({ className, ...rest }: Props) {
  return (
    <input
      className={clsx(
        className,
        `rounded-[1px] h-[44px] p-0 pb-1 text-lg border-b-2 border-gray-300`,
        `text-[26px] outline-none focus:border-red-300 transition-all duration-150`,
      )}
      style={{
        color: colors.gray800,
        caretColor: colors.red400,
        lineHeight: 1.15,
      }}
      {...rest}
    />
  );
}
