import type { WaterProps } from '@/components/water';
import type { IConfig, MiddlewareType, Options } from '@/render';
import type { CSSProperties } from 'react';

type Water =
  | string
  | (WaterProps & {
      above?: boolean;
    });

export interface PaginationProps {
  config?: IConfig[];
  data?: Record<string, any>;
  style?: CSSProperties;
  water?: Water;
  className?: string;
  above?: boolean;
  pfcs?: Record<any, any>;
  middlewares?: MiddlewareType;
  onFinished?: Options['onFinished'];
}
