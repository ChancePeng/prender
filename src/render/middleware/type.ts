import { IConfig } from '../major/types';

export type MiddlewareType<T = unknown> = (
  | IMiddleware<T>
  | {
      use: IMiddleware<T>;
      option: T;
    }
)[];

export interface MiddlewareImplements {
  run(config: IConfig, next: () => void | Promise<void>): void;
}

export interface IMiddleware<T> {
  new (value?: T): MiddlewareImplements;
}
