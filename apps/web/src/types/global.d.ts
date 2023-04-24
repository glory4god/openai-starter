type UndefinedType<T> = {
  [K in keyof T]?: T[K];
};

type CountInit<T> = {
  _count: T;
};

interface Pagination<T> {
  skip: number; // 시작점
  take: number; // 출력개수
  lastPage: boolean;
  data: T[];
}
interface PageQuery {
  skip: number; // 시작점
  take: number; // 출력개수
}

interface BaseInit {
  createTime?: string;
  createBy?: number;
  updateTime?: string;
  updateBy?: number;
}

interface Chatting {
  id: number;
  chat: string;
  writer: string;
  time: string; // formatting
}

type CompleteModelsKeys =
  | 'text-davinci-003'
  | 'text-babbage-001'
  | 'text-curie-001'
  | 'text-davinci-002'
  | 'text-davinci-001';

interface BaseAIInit {
  model: CompleteModelsKeys;
  prompt: string;
  suffix?: string | null; //The suffix that comes after a completion of inserted text.
  max_tokens: number; //The maximum number of tokens to generate in the completion.
  temperature: number; // between 0 and 2
  top_p?: number;
  n?: number; // How many completions to generate for each prompt.
  presence_penalty?: number;
  frequency_penalty?: number;
}
