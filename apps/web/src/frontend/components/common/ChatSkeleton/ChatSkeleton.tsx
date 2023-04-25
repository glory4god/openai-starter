import { Border, Skeleton, Spacing, Text } from 'mainlib/components';
import { FC } from 'react';

const ChatSkeleton: FC = () => {
  return (
    <ol>
      <Spacing size={8} />
      <Text typography="ST11">gpt</Text>
      <Spacing size={8} />
      <Skeleton width={360} height={100} />
      <Spacing size={16} />
      <Border size={2} />
    </ol>
  );
};

export default ChatSkeleton;
