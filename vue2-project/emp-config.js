const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
//
const ProjectRootPath = path.resolve('./');
// const packagePath = path.join(ProjectRootPath, 'package.json')
// const {dependencies} = require(packagePath)
//
const { getConfig } = require(path.join(ProjectRootPath, './src/config'));
//
module.exports = ({ config, env, empEnv }) => {
  const confEnv = env === 'production' ? 'prod' : 'dev';
  const conf = getConfig(empEnv || confEnv);
  console.log('config', conf);
  //
  const srcPath = path.resolve('./src');
  config.entry('index').clear().add(path.join(srcPath, 'main.js'));
  //
  config.resolve.alias.set('vue', '@vue/runtime-dom');
  config.plugin('vue').use(VueLoaderPlugin, []);
  config.module
    .rule('vue')
    .test(/\.vue$/)
    .use('vue-loader')
    .loader('vue-loader');
  //
  const port = conf.port;
  const publicPath = conf.publicPath;
  config.output.publicPath(publicPath);
  config.devServer.port(port);
  //
  config.plugin('mf').tap((args) => {
    args[0] = {
      ...args[0],
      ...{
        name: 'vue2Project',
        filename: 'emp.js',
        remotes: {},
        exposes: {
          './Content.vue': './src/components/Content',
          './pages/vuePage/VuePage.vue': './src/pages/vuePage/VuePage'
        }
      }
    };
    return args;
  });

  config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js').clear();

  //
  config.plugin('html').tap((args) => {
    args[0] = {
      ...args[0],
      ...{
        title: 'EMP Vue Components',
        files: {}
      }
    };
    return args;
  });
};
