import FixedBottomCTA from './FixedBottomCTA';
import Top02 from './Top/Top02';

interface Props {
  title: string;
  onSubmit: () => void;
}

export default function Complete({ title, onSubmit }: Props) {
  return (
    <>
      <div className="flex flex-col">
        <Top02>{title}</Top02>
        <img
          style={{
            width: 'calc(100% - 96px)',
            margin: '48px',
            marginTop: '50px',
            alignSelf: ' center',
          }}
          src="https://static.toss.im/illusts/img-letter-heart.png"
          role="presentation"
          alt=""
        />
      </div>
      <FixedBottomCTA onClick={onSubmit}>제출하기</FixedBottomCTA>
    </>
  );
}
