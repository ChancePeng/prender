
import type { CSSProperties } from 'react';
import type { IConfig, MiddlewareType } from '@/render';

export interface PaginationProps {
  config?: IConfig[],
  data?: Record<string, any>,
  water?: string,
  style?: CSSProperties,
  className?: string,
  pfcs?: Record<any, any>,
  middlewares?: MiddlewareType
}