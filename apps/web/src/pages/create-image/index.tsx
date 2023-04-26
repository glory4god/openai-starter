import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import {
  Border,
  FixedBottomButton,
  Spacing,
  Text,
  TextArea,
} from 'mainlib/components';
import { Top3 } from 'mainlib/components/Top';
import { colors } from 'mainlib/constants/colors';
import { Form } from 'ui/Layout';

import { useForm, useCreateImageAI } from '@/frontend/hooks';
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
  const { createImages, loading, getCreateImages } = useCreateImageAI();
  const { form, setForm, onFormChange } = useForm(modelInit);

  const onSubmit = useCallback(
    () =>
      getCreateImages(form).then((r) => setForm((p) => ({ ...p, prompt: '' }))),
    [form],
  );

  return (
    <>
      <Header onBackClick={() => push('/')} />
      <div className="bg-white">
        <Top3 color={colors.gray900}>{`OpenAI - Create Image Mode`}</Top3>
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
        <FixedBottomButton disabled={loading} onClick={onSubmit}>
          Submit
        </FixedBottomButton>
      </div>
    </>
  );
}
