# EMP Vue3 Template

## 目录架构

``` 

|--src
    |--components // 组件目录
        |--Layout // Layout组件
    |--main.js // 入口文件
    |--config.js // host配置文件
|--emp-config.js // emp配置文件
```

## 使用说明

1. 在项目 host 配置文件 config.js 中引入基站地址

``` js
const dev = {
    host: "localhost",
    port: 8005,
    publicPath: "http://localhost:8005/",
    // 远程基站地址
    baseRemote: '你的基站地址',
    baseRemoteEntry: `你的基站地址/emp.js`,
};
const prod = {
    host: "localhost",
    port: 8005,
    publicPath: "http://localhost:8005/",
    // 远程基站地址
    baseRemote: '你的基站地址',
    baseRemoteEntry: `你的基站地址/emp.js`,
};
```

2. 在项目的emp-config.js引入emp.js

``` js
  config.plugin('html').tap(args => {
      args[0] = {
          ...args[0],
          ...{
              filename: 'emp.js',
          },
      }
      return args
  })
```

3. 在MF的配置中引入

``` js
config.plugin('mf').tap(args => {
    args[0] = {
        ...args[0],
        ...{
            remotes: {
                // '基站别名': '基站暴露的别名(因基站而定)',
                vue3Components: 'vue3Components',
            },
        },
    },
}
return args
})
```

4. 暴露当前项目的组件、工具方法等等

``` js
  config.plugin('mf').tap(args => {
      args[0] = {
          ...args[0],
          ...{
              exposes: {
                  // '暴露对外的别名': '组件在项目的相对路径',
                  './Button': './src/components/Button',
              },
          },
      }
      return args
  })
```

5. 同步类型文件

*  通过配置scripts手动更新（emp tss https://你的项目地址/index.d.ts -n @emp-react-base.d.ts）
* [安装vscode插件 emp-sync-base自动同步](https://marketplace.visualstudio.com/items?itemName=Benny.emp-sync-base)

4. 使用基站组件（远程组件）

main.js

``` js
import {
    createApp,
    defineAsyncComponent
} from 'vue'
import Layout from './Layout.vue'

const Button = defineAsyncComponent(() => import('vue3Components/Button'))

const app = createApp(Layout)

app.component('button-element', Button)

app.mount('#emp-root')
```

Layout.vue

``` js
<template>
  <div class="layout-app">
    <img src="../logo.png" width="30" />
    <h1>EMP Vue3 Hello</h1>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {},
  data() {
    return {};
  },
};
</script>

<style scoped>
img {
  width: 200px;
}

.layout-app {
  text-align: center;
  padding: 10px;
}
</style>
```

## 依赖库 package.json

``` json
  "devDependencies": {
    "@efox/emp-cli": "^1.2.9",
    "@efox/emp-vue3": "^1.0.1",
    "@vue/compiler-sfc": "^3.0.2",
    "vue-loader": "^16.0.0-rc.1"
  },
  "dependencies": {
    "vue": "^3.0.2"
  },
```

## 微前端配置 emp-config.js
```js
const withVue3 = require('@efox/emp-vue3')
const path = require('path')
const ProjectRootPath = path.resolve('./')
const { getConfig } = require(path.join(ProjectRootPath, './src/config'))
module.exports = withVue3(({ config, env, empEnv }) => {
  const confEnv = env === 'production' ? 'prod' : 'dev'
  const conf = getConfig(empEnv || confEnv)
  const port = conf.port
  const projectName = 'vue3Template'
  const publicPath = conf.publicPath
  // 设置项目URL
  config.output.publicPath(publicPath)
  // 设置项目端口
  config.devServer.port(port)
  config.plugin('mf').tap(args => {

    args[0] = {
      ...args[0],
      ...{
        // 项目名称
        name: projectName,
        // 暴露项目的全局变量名
        library: { type: 'var', name: projectName },
        // 被远程引入的文件名
        filename: 'emp.js',
        remotes: {
          // 远程项目别名:远程引入的项目名
        },
        // 需要暴露的东西
        exposes: {
          // 别名:组件的路径
        },
        // 需要共享的依赖
        shared: [],
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
        title: 'EMP Vue3 Template',
        // 远程调用项目的文件链接
        files: {
        },
      },
    }
    return args

  })
})

```
