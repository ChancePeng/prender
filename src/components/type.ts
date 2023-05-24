import type { CSSProperties, FC, PropsWithChildren, ReactNode } from 'react';

interface PFCProps<T> extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
  readonly dataSource?: T;
  bordered?: boolean;
}

export interface ColumnType<T = any> {
  align?: 'left' | 'right' | 'center';
  dataIndex?: string | string[];
  title?: string;
  render?: (value?: any, record?: T, index?: number) => ReactNode;
}

export type PFC<T = unknown, P = Record<string, any>[]> = FC<T & PFCProps<P>>;
