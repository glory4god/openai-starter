import Image from 'next/image';
import { Text } from './';
import { colors } from '../constants/colors';
import clsx from 'clsx';

export default function Banner({
  className,
  onClick,
  top,
  bottom,
  iconSrc,
}: {
  className?: string;
  onClick?: () => void;
  top: string;
  bottom?: string;
  iconSrc?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        'flex items-center bg-black rounded-2xl p-6 ',
        { 'bg-gray-100': !className?.includes('bg-') },
      )}
      onClick={onClick}>
      {iconSrc && (
        <Image alt="" src={iconSrc} style={{ width: 40, height: 40 }} />
      )}
      <div className="flex flex-col ml-4">
        <Text className="text-gray-700 font-bold" typography="T4">
          {top}
        </Text>
        {bottom ? (
          <Text className="text-gray-700 " typography="T6">
            {bottom}
          </Text>
        ) : undefined}
      </div>
    </div>
  );
}
