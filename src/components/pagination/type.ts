import type { IConfig } from '../../render/typs';
import type { CSSProperties } from 'react'

export interface PaginationProps {
  config?: IConfig[],
  data?: Record<string, any>,
  water?: string,
  style?: CSSProperties,
  className?: string,
  pfcs?: Record<any, any>
}