import type {
  CSSProperties,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';

interface PFCProps<T, P = never> extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
  readonly dataSource?: T;
  bordered?: boolean;
  id?: string;
  htmlAttributes?: Omit<HTMLAttributes<P>, 'id' | 'className' | 'style'>;
}

export interface ColumnType<T = any> {
  align?: 'left' | 'right' | 'center';
  dataIndex?: string | string[];
  title?: string;
  render?: (value?: any, record?: T, index?: number) => ReactNode;
}

export type PFC<T = unknown, P = Record<string, any>[], K = never> = FC<
  T & PFCProps<P, K>
>;
