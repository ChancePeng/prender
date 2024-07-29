import type { IConfig } from '../major/types';
import type { MiddlewareType } from './type';

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
  execute(runtime: IConfig) {
    this.state = true;
    const arr = [...this.middlewares];
    while (arr.length && this.state) {
      const middleware = arr.pop();
      this.state = false;
      middleware?.run.call(middleware, runtime, this.next);
    }
  }
}

export default MiddlewareCore;
