# 跨域(面试一定会问)
## 1.跨域关键知识
#### 同源策略:浏览器故意设置的一个功能限制
#### CORS:突破浏览器限制的一个办法
#### JSONP:IE时代的妥协

## 2.同源定义
#### window.origin或location.origin可以得到源
#### 源 = 协议 + 域名 + 端口号 
#### 如果两个url的上述三者相同,就是同源的

## 3.同源策略定义
#### 如果JS运行在源A里,那么只能获取源A的数据
#### 作用:保护用户隐私数据
#### 例子:qq空间请求好友列表

## 4.演示跨域被阻止
#### 黑客发请求成功了,浏览器根据CROS禁止黑客拿到数据

## 5.
![9](../image/跨域.png) 

## 6.解决方法一、CORS：跨域资源共享
#### 方法：在响应头里加入以下字符串提前声明可以共享数据的网址
#### response.setHeader('Access-Contorl-Allow-Origin','http://foo.example')
#### 更具体的查阅MDN文档

## 7.解决方法二、JSONP：jsonpadding
#### 为了兼容IE提出的方法,基本思想:通过js去拿其他网站的数据
#### 将json数据放入js文件夹里，就可以引用了
#### 步骤：原网站将数据写到js里，用script标签引用js文件执行，执行事先写好的window.xxx函数，就可以获取里面的数据了，window.xxx就是回调函数

## 8.封装jsonp()
####
```
    function jsonp{}
```

## 9.面试:jsonp是什么
#### 完美回答:
#### 是什么:在当前网站创建一个script去请求另一个网站的js,js会夹带一些数据引用到我的网站上使用
#### 优点:1.兼容IP 2.可以跨域
#### 缺点:1.由于是script标签,所以读不到ajax那么精确的状态,不知道状态码,响应的头是什么2.由于是script标签所以只能发get请求,不能发post请求

## 10.跨域实战
#### 1.创建目录:qq.com和hacker.com,分别放一个对应的server.js模拟网站
#### 2.完善网站:qq.com加入首页index.html,脚本文件qq.js模拟好友数据friend.json
#### 3.node-dev server.js 88884
#### CORS:response.setHeader('Access-Control-Allow-Origin','http://hacker.com:8999'),后面的网站可以改成refer,这样就可以给所有访问权限了
#### 详见./Code/CORS&JSONP