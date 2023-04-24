import { Text } from '../components';

interface ListHeaderProps {
  className?: string;
  children?: string;
}

const ListHeader = ({ className, children }: ListHeaderProps) => {
  return (
    <li
      className={className}
      // css={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Text typography="ST9" className="font-bold" ellipsisAfterLines={1}>
        {children}
      </Text>
    </li>
  );
};

export default ListHeader;
