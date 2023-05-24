import type { ReactNode } from 'react';

export type HeadlineTagType = 'h1' | 'h2' | 'h3' | 'h4';

export interface ColumnType<T = any> {
  align?: 'left' | 'right' | 'center';
  dataIndex?: string | string[];
  title?: string;
  span?: number;
  width?: string | number;
  render?: (value?: any, record?: T, index?: number) => ReactNode;
}

export interface HeadlineProps {
  tag?: HeadlineTagType;
}
