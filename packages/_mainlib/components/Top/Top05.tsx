import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { topStyle } from './styles';

interface Props
  extends PropsWithChildren<React.HtmlHTMLAttributes<HTMLHeadingElement>> {
  className?: string;
}

export default function Top05({ className, children }: Props) {
  return (
    <h3
      className={clsx(className, topStyle, 'font-normal pt-3')}
      style={{ wordBreak: 'keep-all', lineHeight: '24px' }}>
      {children}
    </h3>
  );
}
