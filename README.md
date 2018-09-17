# RPG (React Parcel GraphQL) boilerplate

[![GitHub issues](https://img.shields.io/github/issues/akalajzi/rpg-boilerplate.svg)](https://github.com/akalajzi/rpg-boilerplate/issues) [![licence](https://img.shields.io/badge/licence-just%20take%20it-ff69b4.svg)](https://img.shields.io/badge/licence-just%20take%20it-ff69b4.svg)

Clean, simple and somewhat opinionated [React](https://facebook.github.io/react/) boilerplate.  
Easy **code splitting** with [react-imported-component](https://www.npmjs.com/package/react-imported-component) on a component level. No server included.  
**Typed** with [Flow](https://flow.org/en/), built with [Parcel](https://parceljs.org/) with very little configuration. [Styled Components](https://www.styled-components.com/) are included for styling, but project supports `scss` to easily include third party designs.

## Tech

- [Parcel](https://parceljs.org/)

- [Flow](https://flow.org/en/)

- [Jest](https://jestjs.io/) with [enzyme](http://airbnb.io/enzyme/)

- [React v16](https://facebook.github.io/react/)
- [React Router 4](https://github.com/ReactTraining/react-router/tree/v4)
- [react-imported-component](https://www.npmjs.com/package/react-imported-component)
- [react-helmet](https://github.com/nfl/react-helmet)

- [Apollo Client 2.1](http://dev.apollodata.com/react/)

- [Styled Components](https://www.styled-components.com/) + [sass/scss](https://sass-lang.com) styling

## Project layout

- [entry](entry) - Entry point. Also includes HTML template on which app is built upon.

- [etc](etc) - Project setup files (jest)

- [flow-typed](flow-typed) - Auto generated flow definitions for npm packages. Add more definitions with `flow-typed install`

- [src/components](src/components) - Common/shared React components; building blocks for application

- [src/scenes](src/scenes) - Routes/pages

- [src/static](src/static) - Place for static assets

- [src/themes](src/themes) - Theme definitions supplied to `<ThemeProvider />`

- [src/types](src/types) - User defined shared Flow types

## Prerequisites

Dependency manager  
https://yarnpkg.com/en/docs/install

Install parcel-bundler

```
yarn global add parcel-bundler
```

## Running the project

First, clone the repo and install dependencies

```
git clone git@github.com:akalajzi/rpg-boilerplate.git
cd rpg-boilerplate
yarn
```

And run:

```
yarn start
```

Starts the development version with hot reloading

#### Validate code

```
yarn check-all
```

runs flow check, linter and unit tests, basically running each of the separate commands:  
`yarn flow:check`  
`yarn lint`  
`yarn test`

## TODO:

- add/fix gql tests
- auto generating flow defs for graphql queries on the fly
