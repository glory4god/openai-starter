import { Text } from 'mainlib/components';
import { Top02, Top03, Top05 } from 'mainlib/components/Top';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="pb-6">
      <Top03 className="text-gray-400">
        ExamBomb <Text className="font-normal">(문제은행)</Text>
      </Top03>
      <Top05 className="text-sm">
        {`더 자세한 내용은 다음 링크를 통해 확인해주세요. \n`}
        {/* <Link href={DOCS_PATH} target="_blank">
          공식블로그
        </Link> */}
      </Top05>
      <Top05 className="text-sm">{`이메일 : gkduddy0814@gmail.com`}</Top05>
    </div>
  );
};

export default Footer;
