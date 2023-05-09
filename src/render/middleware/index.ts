import { CountMiddleware } from './preinstall';

const MiddlewarePreInstall = {
  CountMiddleware,
};

export { default as initMiddlewares } from './init';
export * from './type';
export { MiddlewarePreInstall };
