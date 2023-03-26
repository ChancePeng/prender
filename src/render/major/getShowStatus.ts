import { isEmpty } from 'lodash'

import type { VisibleType } from './typs';

interface IgetShowStaus {
  visible: VisibleType,
  origin?: any,
  dataIndex?: string | string[]
}


const getShowStaus = (params: IgetShowStaus) => {
  const { visible, dataIndex, origin } = params;
  if (typeof visible === 'boolean') {
    if (!visible) {
      return false;
    }
    return true;
  }
  if (visible instanceof Function) {
    return visible()
  }
  if (visible === 'hidden-while-empty-dataIndex') {
    return !isEmpty(dataIndex)
  }
  if (visible === 'hidden-while-empty-origin') {
    return !isEmpty(origin)
  }
  return true;
}

export default getShowStaus;