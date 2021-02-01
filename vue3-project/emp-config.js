/*
 * @Author: wdy
 * @Date: 2021-02-01 12:11:26
 * @Last Modified by: wdy
 * @Last Modified time: 2021-02-01 13:40:57
 */
const path = require('path')
const withVue3 = require('@efox/emp-vue3')
const {VueLoaderPlugin} = require('vue-loader')

const srcPath = path.resolve('./src')
const ProjectRootPath = path.resolve('./')

const { getConfig } = require(path.join(ProjectRootPath, './src/config'))

const empConfig = {
  name: 'empVue3Project',
  remotes: {
    '@emp/react-base': 'empReactBase@http://localhost:8001/emp.js',
  },
  exposes: {
    // './pages/project': 'src/pages/project/index',
  },
  shared: {
    // vue: {eager: true, singleton: true, requiredVersion: '^3.0.2'},
  },
}
module.exports = withVue3(({ config, env, empEnv }) => {
  const confEnv = env === 'production' ? 'prod' : 'dev'
  const conf = getConfig(empEnv || confEnv)
  const port = conf.port
  const publicPath = conf.publicPath

  // config.entry('index').clear().add(path.join(srcPath, 'main.js'))
  // config.resolve.alias.set('vue', '@vue/runtime-dom')
  // config.plugin('vue').use(VueLoaderPlugin, [])
  // config.module
  //   .rule('vue')
  //   .test(/\.vue$/)
  //   .use('vue-loader')
  //   .loader('vue-loader')
  // 设置项目URL
  config.output.publicPath(publicPath)
  // 设置项目端口
  config.devServer.port(port)
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...empConfig,
      filename: 'emp.js',
    }
    return args
  })
  // config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js').clear()
  // 配置 index.html
  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        // head 的 title
        title: 'EMP Vue3 Template',
        // 远程调用项目的文件链接
        files: {
        },
      },
    }
    return args
  })
})
