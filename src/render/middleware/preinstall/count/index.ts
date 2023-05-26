import { IConfig } from '@/render/major';
import getShowStaus from '../../../major/getShowStatus';
import type { MiddlewareImplements } from '../../type';
import initCount from './init';
import type { CountOption } from './type';

class CountMiddleware implements MiddlewareImplements {
  countMap;
  constructor(options: CountOption[]) {
    this.countMap = initCount(options);
  }
  emit(config: IConfig) {
    const {
      type,
      instanceOf,
      fieldProps,
      dataIndex,
      __origin,
      __data,
      visible = true,
    } = config;
    const key = type || instanceOf;
    const show = getShowStaus({
      visible,
      data: __data,
      origin: __origin,
      dataIndex,
    });
    if (show) {
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
  }
  defineConfig(config: IConfig) {
    const {
      type,
      instanceOf,
      fieldProps,
      visible = true,
      __data,
      dataIndex,
      __origin,
    } = config;
    const key = type || instanceOf;
    const show = getShowStaus({
      visible,
      data: __data,
      origin: __origin,
      dataIndex,
    });
    if (key && show) {
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
