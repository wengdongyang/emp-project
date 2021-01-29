/*
 * @Author: wdy
 * @Date: 2021-01-27 17:35:13
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-29 16:08:28
 */
const path = require('path')
const packagePath = path.join(path.resolve('./'), 'package.json')
const {dependencies} = require(packagePath)
const empConfig = {
  name: 'empReactExport',
  remotes: {
    '@emp/react-base': 'empReactBase@http://localhost:8001/emp.js',
    '@emp/react-project': 'empReactProject@http://localhost:8002/emp.js',
  },
  exposes: {},
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

module.exports = ({config, env, empEnv}) => {
  console.log('empEnv===> 部署环境变量 serve模式不需要该变量', empEnv, env)
  const port = 8000
  const projectName = 'empReactExport'
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
      ...{
        ...empConfig,
        filename: 'emp.js', // 被远程引入的文件名
      },
    }
    return args
  })
  // 配置 index.html
  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        // head 的 title
        title: '输出模块',
        files: {}, // 远程调用项目的文件链接
      },
    }
    return args
  })
}
