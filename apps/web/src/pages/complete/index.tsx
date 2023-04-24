import React from 'react';
import { useRouter } from 'next/router';

import {
  Banner,
  Border,
  FixedBottomCTA,
  Header,
  RangeInput,
  Select,
  Skeleton,
  Spacing,
  Text,
  TextArea,
} from 'mainlib/components';
import { colors } from 'mainlib/constants/colors';
import { Top03 } from 'mainlib/components/Top';
import { Form } from 'ui/Layout';
import { useBaseAIInit } from '@/frontend/hooks/open-ai';
import { OpenAiCompleteModels } from '@/frontend/constants/openai';
import { useForm } from '@/frontend/hooks';

type QueryType = BaseAIInit;
const modelInit = {
  model: 'text-davinci-003',
  prompt: '',
  max_tokens: 4000,
  temperature: 0,
} as QueryType;

export default function Startpage() {
  const { push } = useRouter();
  const { chattings, loading, getChattings } = useBaseAIInit();
  const { form, setForm, onFormChange } = useForm(modelInit);

  return (
    <>
      <Header onBackClick={() => push('/')} />
      <div className="bg-white">
        <Spacing size={16} />
        <Top03 color={colors.gray900}>{`OpenAI - Complete Mode`}</Top03>
        <Spacing size={32} />
        <Border size={16} />
        <Form>
          <div className="flex space-x-8">
            <div>
              <Spacing size={8} />
              <Text typography="T5">Model</Text>
              <Spacing size={8} />
              <Select name="model" onChange={onFormChange}>
                {OpenAiCompleteModels.map((m, i) => (
                  <option value={m} key={`MODEL-${i}`}>
                    {m}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Spacing size={8} />
              <Text typography="T5">Max-Tokens</Text>
              <Spacing size={8} />
              {form.max_tokens}
              <Spacing size={8} />
              <RangeInput
                name="max_tokens"
                type="range"
                value={form.max_tokens}
                onChange={onFormChange}
                max={4000}
                min={0}
              />
            </div>
            <div>
              <Spacing size={8} />
              <Text typography="T5">Temperature</Text>
              <Spacing size={8} />
              {form.temperature}
              <Spacing size={8} />
              <RangeInput
                name="temperature"
                type="range"
                value={form.temperature}
                onChange={onFormChange}
                max={1}
                min={0}
                step={0.01}
              />
            </div>
          </div>
          {chattings.map(({ chat, writer, id }) => {
            return (
              <li className="pt-4 list-none" key={id}>
                <Text typography="T5">
                  {writer} {id}
                </Text>
                <Spacing size={8} />
                <Text typography="T4">{chat}</Text>
                <Spacing size={16} />
                <Border size={2} />
              </li>
            );
          })}
          {loading && (
            <ol>
              <Spacing size={8} />
              <Text typography="ST11">gpt</Text>
              <Spacing size={8} />
              <Skeleton width={360} height={100} />
              <Spacing size={16} />
              <Border size={2} />
            </ol>
          )}
          <Spacing size={16} />
          <Text typography="T5">질문을 입력하세요!</Text>
          <Spacing size={8} />
          <TextArea name="prompt" value={form.prompt} onChange={onFormChange} />
        </Form>
        <Spacing size={16} />
        <FixedBottomCTA
          onClick={() => {
            getChattings(form).then((r) =>
              setForm((p) => ({ ...p, prompt: '' })),
            );
          }}>
          검색하기
        </FixedBottomCTA>
      </div>
    </>
  );
}
