import type { ReactNode } from 'react';
export interface PluginImplements<T> {
  value: T | null | undefined,
  constructor: Function;
  emit?: (props: Record<string, any>) => void,
  render?: (props: any, dom: ReactNode) => ReactNode
}