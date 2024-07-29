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
const { Provider: ConfigProvicer, Consumer: ConfigConsumer } = ConfigContext;
export default ConfigContext;
export { ConfigConsumer, ConfigProvicer };
