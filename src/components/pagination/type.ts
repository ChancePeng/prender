import type { IConfig, MiddlewareType, Options } from '@/render';
import type { CSSProperties } from 'react';

export interface PaginationProps {
  config?: IConfig[];
  data?: Record<string, any>;
  water?: string;
  style?: CSSProperties;
  className?: string;
  pfcs?: Record<any, any>;
  middlewares?: MiddlewareType;
  onFinished?: Options['onFinished'];
}
