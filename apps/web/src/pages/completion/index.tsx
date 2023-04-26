import React from 'react';
import { useRouter } from 'next/router';

import {
  Border,
  FixedBottomCTA,
  Spacing,
  Text,
  TextArea,
} from 'mainlib/components';
import { colors } from 'mainlib/constants/colors';
import { Top03 } from 'mainlib/components/Top';
import { Form } from 'ui/Layout';
import { OpenAiCompleteModels } from '@/frontend/constants/openai';
import { useBaseAIInit, useForm } from '@/frontend/hooks';
import { ChatSkeleton, Header } from '@/frontend/components';
import {
  Chattings,
  FrequencyPenalty,
  MaxTokens,
  Models,
  PresencePenalty,
  Temperature,
  TopP,
} from '@/frontend/components/Chat';

const modelInit = {
  model: 'text-davinci-003',
  prompt: '',
  max_tokens: 512,
  temperature: 0.7,
  presence_penalty: 0,
  frequency_penalty: 0,
  top_p: 1,
} as BaseAIInit;

export default function CompletionPage() {
  const { push } = useRouter();
  const { chattings, loading, getChattings } = useBaseAIInit();
  const { form, setForm, onFormChange } = useForm(modelInit);

  return (
    <>
      <Header onBackClick={() => push('/')} />
      <div className="bg-white">
        <Top03 color={colors.gray900}>{`OpenAI - Complete Mode`}</Top03>
        <Spacing size={32} />
        <Border size={16} />
        <Form>
          <div className="mt-6 flex flex-wrap">
            <Models
              models={OpenAiCompleteModels}
              model={form.model}
              onFormChange={onFormChange}
            />
            <MaxTokens
              maxTokens={form.max_tokens}
              onFormChange={onFormChange}
            />
            <Temperature
              temperature={form.temperature}
              onFormChange={onFormChange}
            />
            <TopP topP={form.top_p} onFormChange={onFormChange} />
            <PresencePenalty
              presencePenalty={form.presence_penalty}
              onFormChange={onFormChange}
            />
            <FrequencyPenalty
              frequencyPenalty={form.frequency_penalty}
              onFormChange={onFormChange}
            />
          </div>
          <Chattings chattings={chattings} />
          {loading && <ChatSkeleton />}
          <Spacing size={16} />
          <Text>Send Message!</Text>
          <Spacing size={8} />
          <TextArea name="prompt" value={form.prompt} onChange={onFormChange} />
        </Form>
        <Spacing size={16} />
        <FixedBottomCTA
          disabled={loading}
          onClick={() => {
            getChattings(form).then((r) =>
              setForm((p) => ({ ...p, prompt: '' })),
            );
          }}>
          Submit
        </FixedBottomCTA>
      </div>
    </>
  );
}
