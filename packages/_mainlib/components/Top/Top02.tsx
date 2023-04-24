import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { topStyle } from './styles';

interface Props
  extends PropsWithChildren<React.HtmlHTMLAttributes<HTMLHeadingElement>> {
  className?: string;
}

export default function Top02({ className, children }: Props) {
  return (
    <h3
      className={clsx(className, topStyle, 'pt-6 text-[26px]')}
      style={{ wordBreak: 'keep-all', lineHeight: '35px' }}>
      {children}
    </h3>
  );
}
