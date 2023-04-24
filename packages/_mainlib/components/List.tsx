import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

const List = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <ul className={clsx(className, 'py-0 px-6 flex flex-col')}>{children}</ul>
  );
};

export default List;
