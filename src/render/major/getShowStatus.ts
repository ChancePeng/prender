import { isEmpty } from 'lodash';

import type { VisibleType } from './typs';

interface IgetShowStaus {
  visible: VisibleType;
  origin?: any;
  dataIndex?: string | string[];
  data?: Record<string, any>;
}

const getShowStaus = (params: IgetShowStaus) => {
  const { visible, dataIndex, origin, data } = params;
  if (typeof visible === 'boolean') {
    if (!visible) {
      return false;
    }
    return true;
  }
  if (visible instanceof Function) {
    return visible(origin, data);
  }
  if (visible === 'hidden-while-empty-dataIndex') {
    return !isEmpty(dataIndex);
  }
  if (visible === 'hidden-while-empty-origin') {
    return !isEmpty(origin);
  }
  return true;
};

export default getShowStaus;
