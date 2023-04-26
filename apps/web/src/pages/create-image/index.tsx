import React from 'react';
import { useRouter } from 'next/router';

import {
  Border,
  FixedBottomCTA,
  Spacing,
  Text,
  TextArea,
} from 'mainlib/components';
import { Top03 } from 'mainlib/components/Top';
import { colors } from 'mainlib/constants/colors';
import { Form } from 'ui/Layout';

import { useForm, useCreateImageAIInit } from '@/frontend/hooks';
import { ChatSkeleton, Header } from '@/frontend/components';
import { Chattings } from '@/frontend/components/Chat';
import { ImageConfig } from '@/frontend/components/CreateImage';

const modelInit: CreateImageInit = {
  prompt: '',
  n: 2,
  size: '256x256',
  response_format: 'url',
};

export default function CreateImagePage() {
  const { push } = useRouter();
  const { createImages, loading, getCreateImages } = useCreateImageAIInit();
  const { form, setForm, onFormChange } = useForm(modelInit);

  return (
    <>
      <Header onBackClick={() => push('/')} />
      <div className="bg-white">
        <Top03 color={colors.gray900}>{`OpenAI - Chat Mode`}</Top03>
        <Spacing size={32} />
        <Border size={16} />
        <Form>
          <div className="mt-6 flex flex-wrap">
            <ImageConfig imageInit={form} onFormChange={onFormChange} />
          </div>
          <Spacing size={12} />
          <Chattings chattings={createImages} />
          {loading && <ChatSkeleton />}
          <Spacing size={16} />
          <Text typography="T5">Send Message!</Text>
          <Spacing size={8} />
          <TextArea name="prompt" value={form.prompt} onChange={onFormChange} />
        </Form>
        <Spacing size={16} />
        <FixedBottomCTA
          disabled={loading}
          onClick={() => {
            getCreateImages(form).then((r) =>
              setForm((p) => ({
                ...p,
                prompt: '',
              })),
            );
          }}>
          Submit
        </FixedBottomCTA>
      </div>
    </>
  );
}
