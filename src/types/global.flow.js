// @flow strict

declare var module: {
  hot: {
    accept(path?: string, callback?: () => void): void,
  },
};

declare var __: string => string;
