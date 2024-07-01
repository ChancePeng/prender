import type {
  CSSProperties,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';

import type { IConfig } from '@/render';

export interface PFCProps<T = any, P = never> {
  id?: string;
  className?: string;
  style?: CSSProperties;
  dataIndex?: string | string[];
  dataSource?: T;
  bordered?: boolean;
  htmlAttributes: HTMLAttributes<P>;
  __data?: any;
  __config?: IConfig;
}
export interface ColumnType<T = any> {
  align?: 'left' | 'right' | 'center';
  dataIndex?: string | string[];
  title?: string;
  render?: (value?: any, record?: T, index?: number) => ReactNode;
}

type PFCPropsWithChildren<T, P> = PFCProps<T, P> & PropsWithChildren;

export type PFC<T = unknown, P = Record<string, any>[], K = never> = FC<
  T & PFCPropsWithChildren<P, K>
>;
