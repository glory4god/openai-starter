import Spacing from '../components/Spacing';
import Text from '../components/Text';

export default function ErrorMessage({
  content,
  message,
}: {
  content?: string;
  message: any;
}) {
  return (
    <>
      <Spacing size={16} />
      <Text typography="T7" className="font-bold text-red-500">
        {content && `${content}  : `}
        {message}
      </Text>
    </>
  );
}
