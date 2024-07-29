import type { IRuntimeContext } from './types';

class RuntimeContext {
  context: IRuntimeContext;
  constructor() {
    this.context = {
      data: null,
      configs: [],
      middlewares: [],
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
}

export default new RuntimeContext();
export * from './types';
