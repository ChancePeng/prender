import { RuntimeConfig } from 'prender/render/major';
import { MiddlewareImplements } from '../type';
import { convertToChinaNum } from './utils';

interface Option {
  level?: number;
  language?: 'chinese' | 'arba';
}

class HeadlineCount implements MiddlewareImplements {
  count: number[];
  language: 'chinese' | 'arba';
  constructor(option: Option) {
    const { level = 3, language = 'chinese' } = option || {};
    this.count = new Array(level).fill(0);
    this.language = language;
  }
  stringify = (endIndex: number) => {
    let str = '';
    this.count.forEach((num, index) => {
      if (index === 0) {
        str += num;
      } else if (index <= endIndex) {
        str += `.${num}`;
      }
    });
    return str;
  };
  run(config: RuntimeConfig, next: () => void): void {
    const { type, instanceOf, fieldProps, dataSource } = config;
    const tag: string = fieldProps?.tag || 'h1';
    const key = instanceOf ?? type;
    if (key === 'Headline') {
      const currIndex = Number(tag.replace('h', '')) - 1;
      this.count.forEach((_, index) => {
        if (index <= currIndex) {
          if (index === currIndex) {
            this.count[index] += 1;
          }
        } else {
          this.count[index] = 0;
        }
      });
      if (tag === 'h1' && this.language === 'chinese') {
        const title = convertToChinaNum(this.count[0]);
        config.dataSource = `${title}、${dataSource ?? ''}`;
      } else {
        const title = this.stringify(currIndex);
        config.dataSource = `${title} ${dataSource ?? ''}`;
      }
    }
    next();
  }
}

export default HeadlineCount;
