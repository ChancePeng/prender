import { IConfig } from '@/render/major';
import type { MiddlewareImplements } from '../../type';
import initCount from './init';
import type { CountOption } from './type';

class CountMiddleware implements MiddlewareImplements {
  countMap;
  constructor(options: CountOption[]) {
    this.countMap = initCount(options);
  }
  emit(config: IConfig) {
    const { type, instanceOf, fieldProps } = config;
    const key = type || instanceOf;
    let plugin = null;
    if (key) {
      plugin = this.countMap[key];
    }
    if (plugin) {
      const { emit } = plugin;
      const _emit = emit.bind(plugin);
      _emit(fieldProps);
    }
  }
  defineConfig(config: IConfig) {
    const { type, instanceOf, fieldProps, __origin } = config;
    const key = type || instanceOf;
    if (key) {
      const plugin = this.countMap[key];
      if (plugin) {
        const { render } = plugin;
        const _render = render.bind(plugin);
        const dom: any = _render(fieldProps, __origin);
        return {
          ...config,
          dataSource: dom,
        } as IConfig;
      }
      return config;
    }
    return config;
  }
}

export default CountMiddleware;

export * from './plugin';
