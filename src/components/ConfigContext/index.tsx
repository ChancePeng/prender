import React, { createContext, ReactNode } from 'react';

interface IConfigProvierProps {
  renderEmpty?: () => ReactNode;
  columnEmptyText?: string | false;
  [data: string | number | symbol]: any;
}

const defaultContext: IConfigProvierProps = {
  renderEmpty: () => {
    return <div>no data</div>;
  },
  columnEmptyText: false,
};

const ConfigContext = createContext<IConfigProvierProps>(defaultContext);
const { Provider, Consumer } = ConfigContext;
export default ConfigContext;
export { Consumer, Provider };
