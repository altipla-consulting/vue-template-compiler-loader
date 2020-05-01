
# vue-template-compiler-loader

This is a copy of the official `vue-template-compiler-loader` that allows custom compiler options.

See this repo for the original source code: https://github.com/fergaldoyle/vue-template-compiler-loader


## Install

```shell
npm i @altipla/vue-template-compiler-loader --save-dev
```

You will also need the peer dependency of `vue-template-compiler` in the same version as Vue. All the compiler versions work with the latest release of this package.

```shell
npm i vue-template-compiler --save-dev
```


## Configuration

Add this configuration to your `module.loaders` inside `webpack.config.js`:

```js
  {
    test: /\.vhtml$/,
    loader: '@altipla/vue-template-compiler',
    options: {
      compilerOptions: {
        whitespace: 'preserve',
      },
    },
  },
```

You can use any option of the compiler available in [the documentation](https://www.npmjs.com/package/vue-template-compiler).


## Usage

Split the template and the script in two files and you can import it from the component:

```js
import Vue from 'vue';

import template from './my-component.vhtml';


Vue.component('my-component', {
  ...template,

  mounted () {
    // ...
  },
});
```
