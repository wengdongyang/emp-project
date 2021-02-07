# emp-export #

## 1.项目介绍 ##

项目基于webpack5的新特性Webpack5 Module Federation搭建而成。采用的框架性设计是emp。

Github项目地址: [https://github.com/efoxTeam/emp](https://github.com/efoxTeam/emp)

## 2.本项目说明 ##

本项目不对外暴露pages

### 2.1@emp-*.d.ts
这是项目的ts类型说明文件

- 如果是定义本项目的文件，应当手动定义
- 如果是定义远程项目的文件，应当从/dist/index.d.ts复制而来，并重命名（重命名规则为：package.json里面的name）(eg:@emp/emp-base => @emp-emp-base.d.ts)

## 3.emp-config.js文件详解 ##

port：启动的端口

name：项目名称

publicPath：项目的路径（prod模式应为项目的ngix转发的路径，dev模式应为http://localhost:${port}/）

shared：与其它项目共享的基础依赖

remotes：远程依赖地址

    remotes = {
      '@emp/emp-base': 'empBase@http://*/emp.js'
    };

### 3.1remotes说明

1. @emp/emp-base：远程项目package.json的name
2. empBase：远程项目名称。取自emp-config.js的name
3. @http://*/emp.js：远程的emp.js地址


### 3.2禁止antd按需加载
    config.module.rule('scripts').use('babel').tap(o => {
      o.plugins = o.plugins.filter(p => !(p instanceof Array && p[0] === 'import'))
      return o
    })

# 4.发布说明 #

1. 从多个项目中拷贝/dist/index.d.ts到src/，并按规则重命名
2. 从多个项目中拷贝/dist/projectInfo.js到本项目的script/config.js的module中。
4. 执行yarn run build:ts