// Define defaults
export const ERRORS = {
  // Common Errors
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    message: 'Unhandled error occured.',
  },
  METHOD_NOT_ALLOWED: {
    statusCode: 405,
    message: 'Method is not allowed.',
  },
  VALIDATION_ERROR: {
    statusCode: 400,
    message: 'Invalid data in query string or request body. Please check your request.',
  },

  // Auth Errors (authentication or authorization)
  INVALID_TOKEN: {
    statusCode: 401,
    message: 'Your token is not valid.',
  },
  TOKEN_EXPIRED: {
    statusCode: 401,
    message: 'The token has been expired.',
  },
} as const;

type ErrorName = keyof typeof ERRORS;

export class ApiError {
  name: ErrorName;
  message: string;
  statusCode: number;
  stack?: string;

  constructor(name: ErrorName, message?: string, statusCode?: number, stack?: string) {
    Error.captureStackTrace(this, this.constructor);

    this.name = name;
    this.message = message || ERRORS[name].message;
    this.statusCode = statusCode || ERRORS[name].statusCode;
    if (stack) this.stack = stack;
  }

  toJson(withDetails = false): ApiErrorJson {
    return withDetails
      ? {
          name: this.name,
          message: this.message,
          stack: this.stack,
        }
      : { name: this.name, message: this.message };
  }
}

export type ApiErrorJson = Pick<ApiError, 'name' | 'message'> & { stack?: string };
