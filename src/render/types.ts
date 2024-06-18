import type { FunctionComponent } from 'react';
import type { MiddlewareType } from './middleware/type';

export interface Options {
  pfcs?: Record<string, FunctionComponent>;
  data?: Record<string, any>;
  middlewares?: MiddlewareType;
  onFinished?: () => void;
}
