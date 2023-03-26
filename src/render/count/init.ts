import HeadlinePlugin from './plugin/headline';
import DefaultPlugin from './plugin/default';
import type { CountOption } from './type'

const initCount = (configs: CountOption[]) => {
  const map: Record<string, any> = {}
  configs.forEach((config: CountOption) => {
    if (typeof config === 'string') {
      if (config === 'Headline') {
        map[config]= new HeadlinePlugin()
      } else {
        // 默认
        map[config] = new DefaultPlugin()
      }
    } else {
      const { type ,plugin} = config;
      if(plugin instanceof Function){
        map[type] = new plugin()
      }else{
        const {use,option} = plugin;
        map[type] = new use(option)
      }
    }
  })
  return map;
}

export default initCount;