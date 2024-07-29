import context, { IRuntimeContext } from '@/context';

const useContext = (key?: keyof IRuntimeContext) => {
  return context.getContext(key);
};

export default useContext;
