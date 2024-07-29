import type { ReactNode } from 'react';

export type HeadlineTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadlineProps {
  tag?: HeadlineTagType;
  dataSource?: string | ReactNode;
}
