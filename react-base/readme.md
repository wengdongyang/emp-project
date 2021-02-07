# emp-base #

## 项目介绍 ##

项目基于webpack5的新特性Webpack5 Module Federation搭建而成。采用的框架性设计是emp。

Github项目地址: [https://github.com/efoxTeam/emp](https://github.com/efoxTeam/emp)

### @emp-*.d.ts
这是项目的ts类型说明文件

- 如果是定义本项目的文件，应当手动定义
- 如果是定义远程项目的文件，应当从/dist/index.d.ts复制而来，并重命名（重命名规则为：package.json里面的name）(eg:@emp/emp-project => @emp-emp-project.d.ts)

## emp-config.js文件详解 ##

empConfig.name：项目名称
empConfig.exposes：对外暴露的项目成员
empConfig.shared：与其它项目共享的基础依赖

port：启动的端口
publicPath：项目的路径（prod模式应该是项目的ngix转发的路径）
remotes：远程依赖地址

### 禁止antd按需加载
    config.module.rule('scripts').use('babel').tap(o => {
      o.plugins = o.plugins.filter(p => !(p instanceof Array && p[0] === 'import'))
      return o
    })