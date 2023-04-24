import React, { CSSProperties, PropsWithChildren } from 'react';
import clsx from 'clsx';

import './assets/styles/box-row.css';

interface Props {
  className?: string;
  selected?: boolean;
  checked?: boolean;
  onClick?: () => void;
  textAlign?: CSSProperties['textAlign'];
  right?: React.ReactNode;
}

const BoxRow = ({
  className,
  children,
  selected,
  checked,
  onClick,
  textAlign = 'left',
  right,
}: PropsWithChildren<Props>) => {
  return (
    <div className={clsx('flex rounded-4 w-full relative')} onClick={onClick}>
      <button
        className={clsx(
          className,
          'box-row',
          selected && 'selected',
          checked && 'checked',
        )}
        style={{ textAlign }}
        disabled={selected}>
        {children}
      </button>
      <span className="absolute right-6 top-1/2 -translate-y-1/2">{right}</span>
    </div>
  );
};

export default BoxRow;
