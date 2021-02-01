/*
 * @Author: wdy
 * @Date: 2021-01-27 17:28:33
 * @Last Modified by: wdy
 * @Last Modified time: 2021-02-01 15:38:34
 */
const path = require('path')
const packagePath = path.join(path.resolve('./'), 'package.json')
const {dependencies} = require(packagePath)

const empConfig = {
  name: 'empReactBase',
  remotes: {},
  exposes: {
    './components': 'src/components/index',
    './configs': 'src/configs/index',
    './layouts/login': 'src/layouts/login/index',
    './layouts/login/LoginComponent': 'src/layouts/login/LoginComponent',
    './layouts/root': 'src/layouts/root/index',
    './layouts/root/RootComponent': 'src/layouts/root/RootComponent',
    './layouts/page404': 'src/layouts/page404/index',
    './pages/home': 'src/pages/home',
    './stores': 'src/stores/index',
    './stores/actions': 'src/stores/actions/index',
    './stores/reducers': 'src/stores/reducers/index',
    './types': 'src/types/index',
    './utils': 'src/utils/index',
  },
  shared: {
    '@ant-design/icons': {eager: true, singleton: true, requiredVersion: '^4.4.0'},
    antd: {eager: true, singleton: true, requiredVersion: '^4.11.2'},
    axios: {eager: true, singleton: true, requiredVersion: '^0.21.1'},
    classnames: {eager: true, singleton: true, requiredVersion: '^2.2.6'},
    'icomoon-react': {eager: true, singleton: true, requiredVersion: '^2.0.19'},
    jshashes: {eager: true, singleton: true, requiredVersion: '^1.0.8'},
    lodash: {eager: true, singleton: true, requiredVersion: '^4.17.20'},
    'minireset.css': {eager: true, singleton: true, requiredVersion: '^0.0.7'},
    qs: {eager: true, singleton: true, requiredVersion: '^6.9.6'},
    react: {eager: true, singleton: true, requiredVersion: '^17.0.1'},
    'react-dom': {eager: true, singleton: true, requiredVersion: '^17.0.1'},
    'react-redux': {eager: true, singleton: true, requiredVersion: '^7.2.2'},
    'react-router': {eager: true, singleton: true, requiredVersion: '^5.2.0'},
    'react-router-dom': {eager: true, singleton: true, requiredVersion: '^5.2.0'},
    redux: {eager: true, singleton: true, requiredVersion: '^4.0.5'},
    'redux-persist': {eager: true, singleton: true, requiredVersion: '^6.0.0'},
    'redux-thunk': {eager: true, singleton: true, requiredVersion: '^2.3.0'},
  },
}
module.exports = ({config, env}) => {
  const port = 8001
  const projectName = 'empReactBase'
  const publicPath = `http://localhost:${port}/`

  // 设置项目URL
  config.output.publicPath(publicPath)
  // 设置项目端口
  config.devServer.port(port)
  // // 禁止antd按需加载
  // config.module
  //   .rule('scripts')
  //   .use('babel')
  //   .tap(o => {
  //     o.plugins = o.plugins.filter(p => !(p instanceof Array && p[0] === 'import'))
  //     return o
  //   })
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...empConfig,
      // 被远程引入的文件名
      filename: 'emp.js',
    }
    return args
  })
  // 配置 index.html
  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        // head 的 title
        title: '基础项目',
        // 远程调用项目的文件链接
        files: {},
      },
    }
    return args
  })
}
