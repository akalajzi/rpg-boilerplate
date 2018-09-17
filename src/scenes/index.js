// @flow strict
import importedComponent from 'react-imported-component';

export { default as HomePage } from './HomePage';

// react-imported-component allows us to lazy load our components, and create separate js chunks with parcel
export const GraphqlPage = importedComponent((): React.ComponentType => import('./GraphqlPage'));

// error pages
export const BadUrlPage = importedComponent(
  (): React.ComponentType => import('./ErrorPages/BadUrlPage'),
);
export const UnknownErrorPage = importedComponent(
  (): React.ComponentType => import('./ErrorPages/UnknownErrorPage'),
);
