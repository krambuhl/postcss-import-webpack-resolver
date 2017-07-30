# postcss-import-webpack-resolver

This provides a custom css filesystem resolver for postcss-import.  This provides the ability to use webpack aliases in css as described in [postcss-import#190](https://github.com/postcss/postcss-import/issues/190#issuecomment-298078092).

```js
const cssImport = require('postcss-import');
const createResolver = require('postcss-import-webpack-resolver');

const postcssPlugins = [
  cssImport({
    resolve: createResolver({
      // use aliases defined in config
      alias: webpackConfig.resolve.alias,

      // use aliases defined in config
      modules: ['src', 'node_modules']
    })
  })
]
```


## Documentation

### createResolver(opts)

returns a `postcss-import` resolve function, takes the same options as [enhanced-resolve](https://www.npmjs.com/package/enhanced-resolve).


## License

MIT 2017