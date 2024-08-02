import type { IConfig, MiddlewareImplements } from '@/render';

export interface IRuntimeContext<T = never, P = any, K = never> {
  data?: any;
  configs?: IConfig<T, P, K>[];
  middlewares?: MiddlewareImplements[];
  config: IConfig<T, P, K> | null;
}
