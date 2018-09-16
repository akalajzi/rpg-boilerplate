// @flow strict
import importedComponent from 'react-imported-component';

export { default as HomePage } from './HomePage';

// error pages
export const BadUrlPage = importedComponent(
  (): React.ComponentType => import('./ErrorPages/BadUrlPage'),
);
export const UnknownErrorPage = importedComponent(
  (): React.ComponentType => import('./ErrorPages/UnknownErrorPage'),
);
