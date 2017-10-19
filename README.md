# b2io-gatsby

> Spike of base2.io using Gatsby 

## Setup

Installation:

```
$ npm i
$ npm run build
```

Local development server on port 8000:

```
$ npm run dev
```

## Production

Local production server on port 9000:

```
$ npm start
```

Deploy staging version using `now`:

```
$ npm run deploy
```

## Known Issues

If you're getting unexpected errors with GraphQL data or plugins, try:

```
$ rm .cache
$ rm public
$ npm run build
```
