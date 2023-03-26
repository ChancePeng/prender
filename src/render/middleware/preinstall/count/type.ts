import type { ComponentType } from '@/render';
import type { PluginImplements } from './plugin/type';


export interface IPlugin<T, P> {
  new(options?: P): PluginImplements<T>
}

export type CountOption<T = unknown, P = any> = {
  type: ComponentType,
  plugin: IPlugin<T, P> | {
    use: IPlugin<T, P>,
    option: P
  },
} | ComponentType;


