# Mozilla Do Not Track (DNT) Helper

### What does it do?

A helper that returns true or false based on whether `doNotTrack` is enabled on the browser. For more general information on DNT, visit [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT).

### How to install and use

Install via npm: `npm install @mozmeao/dnt-helper`

Import the library at your applications entrypoint via require, import, or by using a global variable in your script tag:

-   `import dntHelper from '@mozmeao/dnt-helper';`
-   `const dntHelper = require('@mozmeao/dnt-helper')`
-   `const dntHelper = window.dntHelper`

### View demo
- Clone this repository: `git clone https://github.com/mozmeao/dnt-helper.git`
- `cd` into `dnt-helper`
- Install npm dependencies: `npm install`
- Start the server with `npm start`
- Visit http://localhost:8080/ to view the server

The purpose of the demo is just to show if your browser has DNT enabled or disabled.
## Further Documentation

-   [Building the NPM package](docs/#building-the-npm-package)
-   [Running tests](docs/#running-tests)
-   [Publishing to NPM](docs/#publishing-to-npm)

## License

This Source Code Form is subject to the terms of the [Mozilla Public
License, v. 2.0.](http://mozilla.org/MPL/2.0/)
