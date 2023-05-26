import type { HeadlineProps, HeadlineTagType } from '@/components';
import React, { Fragment, ReactNode } from 'react';
import { convertToChinaNum } from '../tools';
import type { PluginImplements } from './type';

const tagIndexMap: Record<HeadlineTagType, number> = {
  h1: 0,
  h2: 1,
  h3: 2,
  h4: 3,
};

type Tag = 'h1' | 'h2' | 'h3' | 'h4';

interface Option {
  language?: 'chinese' | 'arba';
  tags?: Tag[];
  startIndex?: number[];
}

const initOption = (option?: Option) => {
  const {
    language = 'chinese',
    tags = ['h1', 'h2', 'h3', 'h4'],
    startIndex = [0, 0, 0, 0],
  } = option || {};
  return {
    language,
    tags,
    startIndex,
  } as Option;
};

class HeadlinePlugin implements PluginImplements<number[]> {
  value: number[] | null | undefined;
  option: any;
  constructor(option?: Option) {
    this.option = initOption(option);
    const { startIndex = [0, 0, 0, 0] } = this.option;
    this.value = startIndex;
  }
  emit(props: HeadlineProps) {
    const { tag = 'h1' } = props;
    const tagIndex = tagIndexMap[tag];
    const newValue = this.value?.map((item, index) => {
      if (index < tagIndex) {
        return item;
      }
      if (index === tagIndex) {
        return item + 1;
      }
      return 0;
    });
    this.value = newValue;
  }
  render(props: HeadlineProps, dom: ReactNode) {
    const { tag = 'h1' } = props;
    const tagIndex = tagIndexMap[tag];
    if (this.option.tags?.includes(tag)) {
      let title =
        this.value?.filter((_, index) => index <= tagIndex).join('.') || '';
      if (tag === 'h1' && this.option.language === 'chinese') {
        title = `${convertToChinaNum(Number.parseInt(title))}、`;
      } else {
        title = `${title} `;
      }
      return React.createElement(Fragment, {}, title, dom);
    }
    return React.createElement(Fragment, {}, dom);
  }
}

export default HeadlinePlugin;
