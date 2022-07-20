# 1.创建项目
## 打开cmd,移动到vite文件夹
## 输入 yarn global add create-vite-app@1.18.0 全局安装vite app

## 创建项目目录 cva gulu-ui-1
## 根据提示输入
```
    cd-gulu-ui-1
    yarn
    yarn dev
```
## 创建完成,查看给的本地链接 http://localhost:3000/ 使用vscode打开gulu-ui-1

```
修改为ts语言
*1 将main.js改为main
*2 将index.html中引入的main.js改为main
*3 将app.vue中的script标签改为lang="ts"
*4 Vite 现在只支持对 TS 转译，不能对其进行类型推断，所以如果由类型使用错误的代码，只能在打包后运行的时候才会报错。
可以自己在项目中安装 TypeScript，在打包前执行 tsc --noEmit 进行类型推断校验。（--noEmit 不生成输出文件）
```

# 2.创建项目
## 提示:安装vscode插件 vue3 snippets

## Vue2和Vue3的部分区别
* Vue3的Template支持多个根标签
* Vue3有createApp(),而Vue2的则是new Vue()
* createApp(组件),new Vue({template,render})

## 安装vue-router
* λ npm info vue-router versions 查看所有版本号
* yarn add vue-router@版本号 安装
* 如果在创建项目时没有安装vue-router,需要
npm install vue-router
* 安装vue3插件volar来代替vue2的插件vetur,禁用vetur

## 初始化vue-router

* 新建history对象
* 新建router对象
* 引入TypeScript
* app.use(router)
* 添加<router-view></router-view>
* 添加<router-link></router-link>
[* ](https://juejin.cn/post/7117637677645561892/)

* 安装auto import插件 来自动引入

## provide&&inject
父组件provide值,子组件inject接受值
做一个侧边导航栏:
点击a按钮跳出导航栏b的方法:app.vueprovide 一个 visible的布尔值,然后用v-if控制导航栏b是否出现

** 做一个侧边导航的组件