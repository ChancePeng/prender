import { RuntimeConfig } from 'prender/render/major';
import { MiddlewareImplements } from '../type';
import HeadlineCount from './headline';

class CountMiddlewareBase implements MiddlewareImplements {
  count;
  constructor(option: string[]) {
    const count: Record<string, number> = {};
    option.forEach((key) => {
      count[key] = 0;
    });
    this.count = count;
  }
  run(config: RuntimeConfig, next: () => void): void {
    const { type, instanceOf } = config;
    const key = instanceOf ?? type;
    if (key) {
      if (this.count.hasOwnProperty(key)) {
        this.count[key] += 1;
      }
    }
    next();
  }
}

type CountMiddlewareType = typeof CountMiddlewareBase;

interface CountMiddleWareInstance extends CountMiddlewareType {
  Headline: typeof HeadlineCount;
}

const CountMiddleware = CountMiddlewareBase as CountMiddleWareInstance;
CountMiddleware.Headline = HeadlineCount;

export default CountMiddleware;
