import type {
  CSSProperties,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';

export interface PFCProps<D = any, E = never> {
  id?: string;
  className?: string;
  style?: CSSProperties;
  dataIndex?: string | string[];
  dataSource?: D;
  bordered?: boolean;
  htmlAttributes?: HTMLAttributes<E>;
}
export interface ColumnType<T = any> {
  align?: 'left' | 'right' | 'center';
  dataIndex?: string | string[];
  title?: string;
  render?: (value?: any, record?: T, index?: number) => ReactNode;
}

type PFCPropsWithChildren<D, E> = PropsWithChildren<PFCProps<D, E>>;

export type PFC<P = unknown, D = Record<string, any>[], E = never> = FC<
  P & PFCPropsWithChildren<D, E>
>;
