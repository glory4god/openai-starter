import clsx from 'clsx';

type Props = JSX.IntrinsicElements['select'];

const Select = ({ className, ...rest }: Props) => {
  return (
    <div className={clsx(className, 'relative')}>
      <select
        className="text-gray-800 transition duration-200 bg-gray-100 h-[52px] rounded-[14px] w-full m-0 p-0 pl-4 pr-6 outline-none appearance-none items-center border-none"
        style={{
          lineHeight: 1.5,
          boxShadow: `inset 0 0 0 1px rgba(0, 0, 0, 0.02)`,
        }}
        {...rest}
      />
      <img
        src="https://static.toss.im/icons/svg/icn-arrow-downwards.svg"
        width="24"
        height="24"
        className="absolute top-[14px] right-4"
      />
    </div>
  );
};

export default Select;
