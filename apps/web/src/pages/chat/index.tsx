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

import { useChatAI, useForm } from '@/frontend/hooks';
import { OpenAiChatModels } from '@/frontend/constants/openai';
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
  model: 'gpt-3.5-turbo-0301',
  messages: [],
  max_tokens: 512,
  temperature: 0.7,
  presence_penalty: 0,
  frequency_penalty: 0,
  top_p: 1,
} as ChatAIInit;

export default function ChatPage() {
  const { push } = useRouter();
  const { chattings, loading, getChattings } = useChatAI();
  const { form, setForm, onFormChange } = useForm(modelInit);

  const onSubmit = useCallback(() => {
    getChattings(form).then((r) =>
      setForm((p) => ({
        ...p,
        messages: [{ role: 'user', name: 'me', content: '' }],
      })),
    );
  }, [form]);

  return (
    <>
      <Header onBackClick={() => push('/')} />
      <div className="bg-white">
        <Top3 color={colors.gray900}>{`OpenAI - Chat Mode`}</Top3>
        <Spacing size={32} />
        <Border size={16} />
        <Form>
          <div className="mt-6 flex flex-wrap">
            <Models
              models={OpenAiChatModels}
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
          <Spacing size={12} />
          <Chattings chattings={chattings} />
          {loading && <ChatSkeleton />}
          <Spacing size={16} />
          <Text typography="T5">Send Message!</Text>
          <Spacing size={8} />
          <TextArea
            value={form.messages[0]?.content}
            onChange={(e) =>
              setForm((p) => ({
                ...p,
                messages: [
                  { role: 'user', name: 'me', content: e.target.value },
                ],
              }))
            }
          />
        </Form>
        <Spacing size={16} />
        <FixedBottomButton disabled={loading} onClick={onSubmit}>
          Submit
        </FixedBottomButton>
      </div>
    </>
  );
}
