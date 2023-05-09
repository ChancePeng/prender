import { MiddlewareType } from './type';

const initMiddlewares = (config: MiddlewareType) => {
  return config.map((Item) => {
    if (Item instanceof Function) {
      return new Item();
    }
    const { use, option } = Item;
    return new use(option);
  });
};

export default initMiddlewares;
