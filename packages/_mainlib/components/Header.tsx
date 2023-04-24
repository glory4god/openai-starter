import clsx from 'clsx';

interface Props {
  onBackClick?: () => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const buttonStyle = 'bg-transparent border-none focus:outline-none';

const Header = ({ onBackClick, left, right }: Props) => {
  return (
    <header className="flex justify-between py-[10px] px-2">
      {left ? (
        left
      ) : (
        <button className={clsx(buttonStyle, '')} onClick={onBackClick}>
          {onBackClick && (
            <img
              width={30}
              height={30}
              src={'/svg/icons/icon-arrow-back.svg'}
              alt="뒤로가기"
            />
          )}
        </button>
      )}
      {right}
    </header>
  );
};

export default Header;
