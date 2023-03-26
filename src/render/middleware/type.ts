import { IConfig } from "../major/typs";


export type MiddlewareType<T = unknown> = (IMiddleware<T> | {
  use: IMiddleware<T>,
  option: T
})[];

export interface MiddlewareImplements {
  emit?: (config:IConfig) => void;
  defineConfig?: (config:IConfig) => IConfig
}

export interface IMiddleware<T> {
  new(value?:T): MiddlewareImplements,
}
