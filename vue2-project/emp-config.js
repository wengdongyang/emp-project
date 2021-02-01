/*
 * @Author: wdy
 * @Date: 2021-02-01 13:55:00
 * @Last Modified by: wdy
 * @Last Modified time: 2021-02-01 14:13:40
 */
const path = require('path');
const withVue2 = require('@efox/emp-vue2');
const { VueLoaderPlugin } = require('vue-loader');
const ProjectRootPath = path.resolve('./');

const { getConfig } = require(path.join(ProjectRootPath, './src/config'));

const empConfig = {
  name: 'vue2Project',
  remotes: {
    '@emp/react-base': 'empReactBase@http://localhost:8001/emp.js'
  },
  exposes: {
    './Content.vue': './src/components/Content'
  },
  shared: ['vue/dist/vue.esm.js']
};

module.exports = withVue2(({ config, env, empEnv }) => {
  const confEnv = env === 'production' ? 'prod' : 'dev';
  const conf = getConfig(empEnv || confEnv);
  console.log('config', conf);
  // config
  //   .entry('index')
  //   .clear()
  //   .add(path.join(srcPath, 'main.js'));
  //
  // config.resolve.alias.set('vue', '@vue/runtime-dom');
  // config.plugin('vue').use(VueLoaderPlugin, []);
  // config.module
  //   .rule('vue')
  //   .test(/\.vue$/)
  //   .use('vue-loader')
  //   .loader('vue-loader');
  //
  const port = conf.port;
  const publicPath = conf.publicPath;
  config.output.publicPath(publicPath);
  config.devServer.port(port);
  config.plugin('mf').tap((args) => {
    args[0] = {
      ...args[0],
      ...empConfig,
      name: 'vue2Project'
    };
    return args;
  });
  // config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js').clear();
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
});
