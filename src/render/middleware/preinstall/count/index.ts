import type { MiddlewareImplements } from "../../type";
import { IConfig } from "@/render/major";
import initCount from "./init";
import type { CountOption } from './type'

class CountMiddleware implements MiddlewareImplements {
  countMap;
  constructor(options: CountOption[]) {
    this.countMap = initCount(options)
  }
  emit(config: IConfig) {
    const { type, instanceOf, fieldProps } = config;
    const key = type || instanceOf;
    const plugin = this.countMap[key]
    if (plugin) {
      const {emit} = plugin;
      const _emit = emit.bind(plugin)
      _emit(fieldProps)
    }
  }
  defineConfig(config: IConfig) {
    const { type, instanceOf, fieldProps, header, __data, __origin } = config;
    const key = type || instanceOf;
    if (key) {
      const plugin = this.countMap[key];
      if(plugin){
        const {render} = plugin;
        const _render = render.bind(plugin)
        const dom: any = _render(fieldProps, __origin);
        return {
          ...config,
          dataSource:dom
        } as IConfig
      }
      return config;
     
    }
    return config;
  }
}

export default CountMiddleware;