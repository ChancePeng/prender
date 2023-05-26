import React, { createContext, ReactNode } from 'react';

interface IConfigProvierProps {
  renderEmpty?: () => ReactNode;
}

const defaultContext = {
  renderEmpty: () => {
    return <div>no data</div>;
  },
};

const ConfigContext = createContext<IConfigProvierProps>(defaultContext);
const { Provider, Consumer } = ConfigContext;
export default ConfigContext;
export { Provider, Consumer };
