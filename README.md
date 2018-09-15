Work in progress...
TODO:
- Apollo
- lint



# RPG (React Parcel GraphQL) boilerplate

Clean, simple and opinionated [React v16](https://facebook.github.io/react/) boilerplate. No server included.  
Typed with [Flow](https://flow.org/en/), packaged with [Parcel](https://parceljs.org/) with very little configuration. [Styled Components](https://www.styled-components.com/) are included for styling, but project supports `scss` to easily include third party designs.

## Tech

- [Parcel](https://parceljs.org/)

- [Flow](https://flow.org/en/)

- [React v16](https://facebook.github.io/react/)
- [React Router 4](https://github.com/ReactTraining/react-router/tree/v4)
- [react-helmet](https://github.com/nfl/react-helmet)

- [Apollo Client 2.0](http://dev.apollodata.com/react/)

- [Styled Components](https://www.styled-components.com/) + [sass/scss](https://sass-lang.com) styling


## Project layout

* [flow-typed](flow-typed) - Auto generated flow definitions for npm packages. Add more definitions with `flow-typed install`

* [src/components](src/components) - Common/shared React components; building blocks for application

* [src/entry](src/entry) - Entry point. Also includes HTML template on which app is built upon.

* [src/scenes](src/scenes) - Routes/pages

* [src/themes](src/themes) - Theme definitions supplied to `<ThemeProvider />`

* [src/types](src/types) - User defined shared Flow types


## Running the project

`yarn start` - Starts the development version with hot reloading  
`yarn build` - Build the project  
`yarn production` - Starts the project in production mode

#### Validate code

`yarn flow:check`  
`yarn lint`  
`yarn test`

... TODO: finish this
