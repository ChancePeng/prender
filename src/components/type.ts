import type {
  CSSProperties,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';

export interface PFCProps<T = any, P = never> {
  id?: string;
  className?: string;
  style?: CSSProperties;
  dataIndex?: string | string[];
  dataSource?: T;
  bordered?: boolean;
  htmlAttributes?: HTMLAttributes<P>;
}
export interface ColumnType<T = any> {
  align?: 'left' | 'right' | 'center';
  dataIndex?: string | string[];
  title?: string;
  render?: (value?: any, record?: T, index?: number) => ReactNode;
}

type PFCPropsWithChildren<T, P> = PropsWithChildren<PFCProps<T, P>>;

export type PFC<T = unknown, P = Record<string, any>[], K = never> = FC<
  T & PFCPropsWithChildren<P, K>
>;
