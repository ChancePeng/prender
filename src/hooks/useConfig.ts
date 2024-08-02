import context from '@/context';

const useConfig = () => {
  return context.getContext().getConfig();
};

export default useConfig;
