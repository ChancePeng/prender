import { RuntimeConfig } from '../major/types';
import { MiddlewareType } from './type';

class MiddlewareCore {
  middlewares;
  state;
  constructor(middlewares: MiddlewareType) {
    this.middlewares = middlewares.map((Item) => {
      if (Item instanceof Function) {
        return new Item();
      }
      const { use, option } = Item;
      return new use(option);
    });
    this.state = true;
  }
  next = () => {
    this.state = true;
  };
  execute(runtime: RuntimeConfig) {
    this.state = true;
    const arr = [...this.middlewares];
    let bool = true;
    while (arr.length && bool) {
      const middleware = arr.pop();
      this.state = false;
      middleware?.run.call(middleware, runtime, this.next);
    }
  }
}

export default MiddlewareCore;
