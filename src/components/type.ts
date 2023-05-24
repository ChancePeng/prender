import type { CSSProperties, FC, PropsWithChildren } from 'react';

interface PFCProps<T> extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
  readonly dataSource?: T;
  bordered?: boolean;
}

export type PFC<T = unknown, P = Record<string, any>[]> = FC<T & PFCProps<P>>;
