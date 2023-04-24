export interface Props {
  className?: string;
  size?: number;
  name: string;
  onClick?: () => void;
}

import clsx from 'clsx';
import { Icon } from 'mainlib/components';
import { buttonStyle } from 'mainlib/components/Header';

const SvgIcon = ({
  size = 30,
  name,
  className,
  onClick,
  ...restProps
}: Props) => {
  return (
    <button className={clsx(buttonStyle)} onClick={onClick}>
      <Icon size={size} className={className} name={name} {...restProps} />
    </button>
  );
};

export default SvgIcon;
