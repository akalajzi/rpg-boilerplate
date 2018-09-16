// @flow strict
import importedComponent from 'react-imported-component';

export { default as HomePage } from './HomePage';

// error pages
export const BadUrlPage = importedComponent(() => import('./ErrorPages/BadUrlPage'));
export const UnknownErrorPage = importedComponent(() => import('./ErrorPages/UnknownErrorPage'));
