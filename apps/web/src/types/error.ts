export const ERROR_MAP = {
  DUP01: {
    code: 'DUP01',
    message: '이미 중복된 항목이 존재해요.',
  },
  DUP02: {
    code: 'DUP02',
    message: '이미 처리가 되었어요.',
  },
  FOUND01: {
    code: 'FOUND01',
    message: '조회 결과가 존재하지 않아요.',
  },
} as const;
export type ErrorKeys = keyof typeof ERROR_MAP;
export type ErrorCodeKeys = keyof (typeof ERROR_MAP)[ErrorKeys];
export type ErrorCodes = (typeof ERROR_MAP)[ErrorKeys]['code'] | undefined;
export type ErrorMessages =
  | (typeof ERROR_MAP)[ErrorKeys]['message']
  | undefined;

export interface Error {
  status: boolean;
  code: ErrorCodes;
  message: ErrorMessages;
}
export const ErrorInit: Error = {
  status: false,
  code: undefined,
  message: undefined,
};

export interface ValidationProps {
  validation: boolean;
  data: string;
}
