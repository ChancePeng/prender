
import type { PluginImplements } from './type';

class DefaultPlugin implements PluginImplements<number> {
  value:number;
  constructor(){
    this.value = 0;
  }
  emit() {
    this.value = this.value + 1;
  }
}

export default DefaultPlugin;