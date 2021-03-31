# 系统学习HTTP

## 必须学会什么
* 基础概念
* 如何调试(用的是node.js,可以用log/debugger)
* 在哪儿查资料(用的是Node.js,看Node.js文档)
* 标准制定者是谁(HTTP规格文档:RFC 2612等)
  
## HTTP基础概念

### 请求
* 请求动词 路径加查询参数 协议名/版本
* Host:域名或IP
* Accept:text/html
* content-Type:请求体的格式
* 回车
* 请求体(也就是上传的内容)
```
  GET /?wd=hi HTTP/1.1 
```



### 细节
* 三部分:请求行 请求头 请求体
* 请求动词:GET/POST/PUT/CATCH/PATCH/DELETE等
* 请求体在GET请求中一般为空
* 文档位于RFC 2612第五章
* 大小写不敏感

## 用curl构造请求
curl -v http://localhost:8888/XXXX

## consolo.log()调试大法

