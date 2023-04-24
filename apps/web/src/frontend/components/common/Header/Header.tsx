import clsx from 'clsx';
import { Icon } from 'mainlib/components';
import { arrowBack } from 'public/svg';

interface Props {
  onBackClick?: () => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const buttonStyle = 'bg-transparent border-none focus:outline-none';

const Header = ({ onBackClick, left, right }: Props) => {
  return (
    <header className="flex justify-between py-[10px] px-4">
      {left ? (
        left
      ) : (
        <button className={clsx(buttonStyle)} onClick={onBackClick}>
          <Icon name={arrowBack} size={30} />
        </button>
      )}
      {right}
    </header>
  );
};

export default Header;
