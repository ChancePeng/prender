import React from 'react';
import type { PluginImplements } from './type';
import type { HeadlineProps, HeadlineTagType } from '@/components'
import { ReactNode } from 'react';
import { convertToChinaNum } from '../tools'

const tagIndexMap: Record<HeadlineTagType, number> = {
  h1: 0,
  h2: 1,
  h3: 2,
  h4: 3
}

interface Option {
  language: 'chinese' | 'arba'
}


const initOption = (option?: Option) => {
  const { language = 'chinese' } = option || {};
  return {
    language
  }
}

class HeadlinePlugin implements PluginImplements<number[]> {
  value: number[] | null | undefined;
  option: any;
  constructor(option?: Option) {
    this.value = [0, 0, 0, 0];
    this.option = initOption(option);
  }
  emit(props: HeadlineProps) {
    const { tag = 'h1' } = props;
    const tagIndex = tagIndexMap[tag];
    const newValue = this.value?.map((item, index) => {
      if (index < tagIndex) {
        return item;
      }
      if (index === tagIndex) {
        return item + 1
      }
      return 0;
    })
    this.value = newValue;
  }
  renderHeader(props: HeadlineProps, dom: ReactNode) {
    const { tag = 'h1' } = props;
    const tagIndex = tagIndexMap[tag];
    let title = this.value?.filter((_, index) => index <= tagIndex).join('.') || '';
    if (tag === 'h1' && this.option.language === 'chinese') {
      title = convertToChinaNum(Number.parseInt(title))
    }
    return (
      <span>{title}{dom}</span>
    )
  }
}

export default HeadlinePlugin;