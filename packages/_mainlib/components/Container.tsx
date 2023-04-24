import { colors } from '../constants/colors';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Container({ className, children }: Props) {
  return (
    <div className={clsx('flex items-center rounded-2xl p-0 m-0', className)}>
      <div className="w-full">{children}</div>
    </div>
  );
}
