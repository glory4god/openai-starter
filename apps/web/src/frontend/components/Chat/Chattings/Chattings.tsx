import { Border, Spacing, Text } from 'mainlib/components';

const Chattings = ({ chattings }: { chattings: Chatting[] }) => {
  return (
    <>
      {chattings.map(({ chat, writer, id, data }) => {
        return (
          <li className="pt-3 list-none" key={id}>
            <Text typography="T6" className="font-bold">
              {writer} {id}
            </Text>
            <Spacing size={4} />
            <Text typography="T6">{chat}</Text>

            {writer === 'Open AI' && (
              <div className="flex flex-wrap">
                {data?.map(({ url }) => (
                  <img className="p-3" src={url} alt={url} key={url} />
                ))}
              </div>
            )}
            <Spacing size={12} />
            <Border size={2} />
          </li>
        );
      })}
    </>
  );
};

export default Chattings;
