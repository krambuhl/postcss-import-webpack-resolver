# postcss-import-webpack-resolver

This provides a custom css filesystem resolver for postcss-import.  This provides the ability to use webpack aliases in css as described in [postcss-import#190](https://github.com/postcss/postcss-import/issues/190#issuecomment-298078092).

## Install

Using npm, do:

```
npm install postcss-import-webpack-resolver --dev
```

## Example

```js
const cssImport = require('postcss-import');
const createResolver = require('postcss-import-webpack-resolver');

const postcssPlugins = [
  cssImport({
    resolve: createResolver({
      // use aliases defined in config
      alias: webpackConfig.resolve.alias,

      // include where to look for modules
      modules: ['src', 'node_modules']
    })
  })
]
```

## createResolver(opts)

returns a `postcss-import` resolve function, takes the same options as [enhanced-resolve](https://www.npmjs.com/package/enhanced-resolve).  Please refer there for proper API documentation.


## License

MIT 2017