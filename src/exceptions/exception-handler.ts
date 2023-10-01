import { Exception } from './exception';

const NotFound = (message?: string) => ({ statusCode: 404, message: message ?? 'Not Found' });
const UnknownError = () => ({ statusCode: 500, message: 'UnknownError' });

export class ExceptionHandler {
  static execute({ type, message }: Exception) {
    if (type === 'Not Found') {
      return NotFound(message);
    }
    return UnknownError();
  }
}
