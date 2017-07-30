const ResolverFactory = require('enhanced-resolve/lib/ResolverFactory');
const NodeJsInputFileSystem = require('enhanced-resolve/lib/NodeJsInputFileSystem');
const CachedInputFileSystem = require('enhanced-resolve/lib/CachedInputFileSystem');


const defaultConfig = {
  extensions: ['.css'],
  modules: ['node_modules'],
  useSyncFileSystemCalls: true
}

module.exports = (config) => {
  const fileSystem = new CachedInputFileSystem(new NodeJsInputFileSystem(), 60000);
  const resolver = ResolverFactory.createResolver(
    Object.assign({ fileSystem }, defaultConfig, config)
  );
  
  return (id, basedir) => resolver.resolveSync({}, basedir, id);
};