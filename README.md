# react-flickr-example [![Build Status](https://travis-ci.org/andresz1/react-flickr-example.svg?branch=master)](https://travis-ci.org/andresz1/react-flickr-example)
A simple project to practice [React](https://reactjs.org/) and [Express](https://expressjs.com/) basics :ghost: using [Redux](https://redux.js.org/). Live [here](https://react-flickr-example.herokuapp.com/). Shows you the public Flickr feed, allowing you to view the images either in a lightbox or on Flickr's site.

## Features
- Responsive Flickr's latest photos with caption and owner
- Link to original photo post
- Responsive lightbox with all photo information (you can also change the photo with :arrow_left: and :arrow_right: keys)
- Asynchronous image load treatment
- Pagination using infinite scroll
- Test automation

## Build
To develop and build this project you need to have installed [Node.js](https://nodejs.org/), and follow this steps.

Clone (or download and unzip) the project to your file system an go into the directory of the project.

```bash
cd react-flickr-example/
```

Install dependencies.

```bash
npm install # server
cd client/ && npm install # client
```

Configure you enviroment using [dotenv](https://github.com/motdotla/dotenv). Create `.env` file based on `.env.example` and fill it with your own data.
```bash
NODE_ENV=development
PORT=5000
FLICKR_API_KEY=x
```

API documentation is automatically generated using [apiDoc](http://apidocjs.com/) and parameters are validated using [Joi](https://github.com/hapijs/joi).
```bash
npm run server:docs # you can also do it this way
```

Run a local development server (livereload enabled).

```bash
npm run server
npm run client
npm run dev # both
```

Run defined tests using [Mocha](https://mochajs.org/), [Chai](http://www.chaijs.com/) for the server and [Jest](https://jestjs.io/) for the client. Code is linted with [ESLint](https://eslint.org/). Type checking is available for the client using [Flow](https://flow.org/). 

```bash
npm server:test
npm client:test
npm test # both
```

Package the app (minify html, css and js). The output will be in the `client/build/` folder.

```bash
cd client/ && npm run build
```

The client code was generated using [Create React App](https://github.com/facebook/create-react-app) and configured to fulfil requirements and it follows the [datchley](https://gist.github.com/datchley/4e0d05c526d532d1b05bf9b48b174faf) code style guide. The folders hierarchy is divided by file types (e.g. components, containers, reducers, etc.) because this is just an example but for larger projects I recommend a hierarchy based on functionalties.

## Feedback

Pull requests, feature ideas and bug reports are very welcome. We highly appreciate any feedback.

## License

MIT
