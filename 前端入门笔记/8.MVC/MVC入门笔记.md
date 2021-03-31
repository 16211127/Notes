## 1.MVC是什么
M-Model (数据模型)负责操作所有数据
V-View (视图)负责所有UI界面
C-Contorl (控制器)负责其他

## 2. 用js进行import
在main.js里写 import "./app1.css"
然后完善app1.css

安装插件 code spell check解决英语单词拼写问题

使用npm或者yarn引入jquery
yarn add jquery(可能需要先yarn init)
npm i jquery
再在main.js里写import $ from 'jquery'

(滚动条:14~19px长)

## 3.抽象思维
最小知识原则
```
引入一个模块需要引入js,html,css
优化:只需要js,css
优化:只需要引入js

代价:最开始页面会很空(一般加个loding界面,或者用ssr技术,让用户体验增加)
```

?.可选链语法