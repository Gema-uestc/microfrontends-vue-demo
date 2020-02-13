# Vue Microfrontends Demo
Demo：TODO

This is a Demo for having multiple vue microfrontends coexist within a single page.

Use:
* single-spa：https://single-spa.js.org/docs/getting-started-overview
* symstemjs
* lerna
* vue

### Tree
```
├── build.js
├── lerna-debug.log
├── lerna.json
├── package.json
├── packages
│   ├── navbar
│   │   ├── README.md
│   │   ├── babel.config.js
│   │   ├── package.json
│   │   ├── public
│   │   │   ├── favicon.ico
│   │   │   └── index.html
│   │   ├── src
│   │   │   ├── App.vue
│   │   │   ├── assets
│   │   │   │   └── logo.png
│   │   │   ├── components
│   │   │   │   └── HelloWorld.vue
│   │   │   ├── main.js
│   │   │   ├── router.js
│   │   │   └── set-public-path.js
│   │   ├── vue.config.js
│   │   └── yarn.lock
│   ├── root
│   │   ├── index.html
│   │   ├── package.json
│   │   └── yarn.lock
│   ├── vue1
│   │   ├── README.md
│   │   ├── babel.config.js
│   │   ├── package.json
│   │   ├── public
│   │   │   ├── favicon.ico
│   │   │   └── index.html
│   │   ├── src
│   │   │   ├── App.vue
│   │   │   ├── assets
│   │   │   │   └── logo.png
│   │   │   ├── components
│   │   │   │   └── HelloWorld.vue
│   │   │   ├── main.js
│   │   │   ├── router.js
│   │   │   └── set-public-path.js
│   │   ├── vue.config.js
│   │   ├── yarn-error.log
│   │   └── yarn.lock
│   └── vue2
│       ├── README.md
│       ├── babel.config.js
│       ├── package.json
│       ├── public
│       │   ├── favicon.ico
│       │   └── index.html
│       ├── src
│       │   ├── App.vue
│       │   ├── assets
│       │   │   └── logo.png
│       │   ├── components
│       │   │   └── HelloWorld.vue
│       │   ├── main.js
│       │   ├── router.js
│       │   └── set-public-path.js
│       ├── vue.config.js
│       └── yarn.lock
├── readme.md
└── yarn.lock
```

### Local development

```
# install dependency
lerna bootstrap

# develop
yarn serve
```
Now go to http://localhost:5000 in a browser.

### Build

```
yarn build
```