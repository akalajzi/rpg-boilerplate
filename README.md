Work in progress...

# RPG (React Parcel GraphQL) boilerplate

Clean, simple and somewhat opinionated [React v16](https://facebook.github.io/react/) boilerplate. No server included.  
Typed with [Flow](https://flow.org/en/), packaged with [Parcel](https://parceljs.org/) with very little configuration. [Styled Components](https://www.styled-components.com/) are included for styling, but project supports `scss` to easily include third party designs.

## Tech

- [Parcel](https://parceljs.org/)

- [Flow](https://flow.org/en/)

- [Jest](https://jestjs.io/) with [enzyme](http://airbnb.io/enzyme/)

- [React v16](https://facebook.github.io/react/)
- [React Router 4](https://github.com/ReactTraining/react-router/tree/v4)
- [react-helmet](https://github.com/nfl/react-helmet) // TODO

- [Apollo Client 2.0](http://dev.apollodata.com/react/) // TODO

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
git clone ...
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
yarn check-ci
```

runs flow check, linter and unit tests, basically running each of the separate commands:  
`yarn flow:check`  
`yarn lint`  
`yarn test`

... TODO: finish README
