import React from 'react';
import { useRouter } from 'next/router';
import {
  Border,
  BoxRow,
  Container,
  FixedBottomCTA,
  Spacing,
} from 'mainlib/components';
import { Top03, Top04 } from 'mainlib/components/Top';
import { colors } from 'mainlib/constants/colors';

export default function IndexPage() {
  const { push } = useRouter();

  return (
    <div className="bg-white">
      <Spacing size={20} />
      <Top03 color={colors.gray900}>{`OpenAI - Project`}</Top03>
      <Spacing size={32} />
      {/* <Banner
    className="mx-6"
    top="풀었던 기록을 확인해보세요"
    bottom="클릭하여 이동하세요"
  /> */}
      <Spacing size={24} />
      <Border size={16} />
      <Spacing size={8} />
      <Container>
        <BoxRow onClick={() => push('/start')}>시작하기</BoxRow>
      </Container>
    </div>
  );
}
