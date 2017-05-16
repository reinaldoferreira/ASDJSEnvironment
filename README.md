# ASD JS Environment

ASD is short for Awesome Super Duper =D

## Getting started

Clone the repo

```
git clone git@github.com:reinaldoferreira/ASDJSEnvironment.git your-project-name
```

Inside of the project's folder (`cd your-project-name`), install all dependencies:

```
npm i
```

## Commands

The `start` command watches `js` and `sass` files for changes and to run tests, runs the `json-server` for the mockAPI, and opens your project at `localhost:3000/?inDev`.

```
npm start
```

The `nsp` command checks if is there any insecure package installed on the project

```
npm run nsp
```

The `start-mockapi` command serves the mock data located at `src/js/api/data.json` through the port `3030`.


```
npm run start-mockapi
```

The `build` command builds the static files into `./dist`.

```
npm run build
```

The `deploy` command deploys the static files inside of `./dist` to surge.

```
npm run deploy
```

### CSS

The generated `css` file is loaded, compressed and cached through `webpack`.

The `scss` command builds the `main.min.scss` file inside `./src` stripping out comments and minifying the output.

```
npm run scss
```

The `scss:watch` command watches `scss` files for changes and builds the `main.min.scss` file inside `./src`.

```
npm run scss:watch
```

### Testing

```
npm test
```

```
npm test:watch
```

### Linting

```
npm run lint
```

```
npm run lint:watch
```
