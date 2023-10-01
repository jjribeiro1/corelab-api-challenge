export const ExceptionOption = {
  NOT_FOUND: 'Not Found',
} as const;

type ExceptionType = (typeof ExceptionOption)[keyof typeof ExceptionOption];

export class Exception {
  constructor(
    readonly type: ExceptionType,
    readonly message?: string,
  ) {}
}
