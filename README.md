# emp项目介绍

# 介绍 #

项目基于webpack5的新特性Webpack5 Module Federation搭建而成。采用的框架性设计是emp。

Github项目地址: [https://github.com/efoxTeam/emp](https://github.com/efoxTeam/emp)

# 软件架构 #

整个项目分为一个base、N个project、一个export。

## base ##

base模块是前置模块。它对外输出基础组件、基础布局、基础页面（包括登录）

## project ##

project是产品模块（它的前置模块是base，但是它同时是export的前置模块）。它可能有多个。它接收base作为前置模块。对外输出基础的pages页面。

## export ##

export是输出模块（它的前置模块是base和project）。也就是最终的输出模块。它接收base和project。对外输出完整页面。

# 开发说明 #

1. 先启动前置模块（yarn start）。启动时请保证存在dist/index.d.ts文件。（如不存在，yarn run build:ts）。
2. 启动开发项目的时候。使用命令yarn run dev:hot。
3. .vscode下面的settings.json文件是一个vscode插件(emp-aync-base)的配置。它主要用于同步生成src下面的@emp-***.d.ts文件。(这一步也可以使用命令 yarn tss完成)。注意本身应该有一个和自己目录同名的文件（ @emp.d.ts 文件 ）主要声明本项目模块的ts声明。

# emp-config.js #