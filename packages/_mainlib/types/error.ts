import { ERROR_MAP } from 'constants/error';

export type ErrorKeys = keyof typeof ERROR_MAP;
export type ErrorCodeKeys = keyof (typeof ERROR_MAP)[ErrorKeys];
export type ErrorCodes =
  | (typeof ERROR_MAP)[ErrorKeys][ErrorCodeKeys]['code']
  | undefined;
export type ErrorMessages =
  | (typeof ERROR_MAP)[ErrorKeys][ErrorCodeKeys]['message']
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
