import { IConfig } from 'prender/render';
import type { IRuntimeContext } from './types';
class RuntimeContext {
  context: IRuntimeContext;
  constructor() {
    this.context = {
      data: null,
      configs: [],
      middlewares: [],
      config: null,
      pfcs: {},
      options: {},
    };
  }
  setContext(context: IRuntimeContext) {
    this.context = {
      ...this.context,
      ...context,
    };
  }
  getContext(key?: keyof IRuntimeContext) {
    if (key) {
      return this.context[key];
    }
    return this.context;
  }
  setConfig(config: IConfig | null) {
    this.context.config = config;
  }
  getConfig() {
    return this.context.config;
  }
}

export default new RuntimeContext();
export * from './types';
