import {
  CreateCompletionResponse,
  CreateChatCompletionResponse,
  ImagesResponse,
} from 'openai';
export const returnCompletionMode = (init: CreateCompletionResponse) => {
  return {
    writer: 'gpt',
    chat: init.choices[0].text,
    time: new Date(),
    id: new Date().getTime(),
  };
};

export const returnChatCompletionMode = (
  init: CreateChatCompletionResponse,
) => {
  return {
    writer: init.choices[0].message?.role,
    chat: init.choices[0].message?.content,
    time: new Date(),
    id: new Date().getTime(),
  };
};

export const returnCreateImage = (init: ImagesResponse) => {
  return {
    writer: 'Open AI',
    chat: ``,
    time: new Date(),
    id: new Date().getTime(),
    data: init.data,
  };
};
