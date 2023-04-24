import { useUID } from 'react-uid';

export default function useId(givenId?: string) {
  const id = useUID();

  return givenId !== undefined ? `${'bomb-id-'}${id}` : id;
}
