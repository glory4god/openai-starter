import { PropsWithChildren } from 'react';
import { topStyle } from './styles';
import clsx from 'clsx';

interface Props
  extends PropsWithChildren<React.HtmlHTMLAttributes<HTMLHeadingElement>> {
  className?: string;
}

export default function Top04({ className, children }: Props) {
  return (
    <h3
      className={clsx(className, topStyle, 'pt-4 text-lg')}
      style={{ wordBreak: 'keep-all', lineHeight: '28px' }}>
      {children}
    </h3>
  );
}
