# 1网络和IP
Internet Protocol:网络协议

外网和内网之间唯一的联通点就是路由器,也称为网关

# 2端口

## 几个特殊的IP:
* 127.0.0.1 表示自己
* localhost 通过hosts指定为自己
* 0.0.0.0 不表示任何设备

## 端口port
* 一共有65535个端口,wiki上列出了每个端口的用法
* 0到1023号端口是给系统使用的

ip和端口缺一不可

# 3域名

* 域名就是对IP的别称
* 一个域名可以对应多个IP,一个IP可以对应多个域名,前者缓解服务器压力,后者省钱(共享主机)
* 通过DNS把域名和IP链接起来


* 冷知识:ping pang 皮卡丘跑起来变成皮卡乒乓

# 4题外话

* com是顶级域名
* xiedaima.com是二级域名(俗称一级域名)
* www.xiedaima.com是三级域名(俗称二级域名)
* 他们是父子关系,www是非常多余的
* github.io把xxx.github.io免费给你使用


URL=协议+域名+路径+查询参数+锚点+端口
>https://www.baidu.com/s?wd=hello&rsv_spt=1#5

锚点如果是中文会变成一串数字和#%</br>
锚点是无法在network面板看到的</br>
**因为锚点不会传给服务器**

# curl命令
* 用curl可以发送http请求