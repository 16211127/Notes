# 1.前言
实际写项目时候发现自己对dom的操作非常的僵硬,jq最基本的操作都写不来,导致增删改查都很难写,本篇就是回过头来复习dom,复习jq,打一下基础

# 2.获取元素/标签
```
方法一:
window.(id)xxx或者直接id
方法二:
document.getElementByID('(id)xxx')
document.getElementsByTag(Class)Name('div')[0]
//如果不加下标会得到一个整体,tag=标签,可能会有很多呀,同理class也是一样的,下面的同理
方法三:
document.querySelector('#(id)xxx')  =>selector的复杂写法可以查看mdn
document.querySelectorAll('.red')[0]

(id)只是注释,实际不写
```
dom的直接操作很麻烦,所以我们学习jq,vue,react来操作dom


# 2.1 Node
```
使用XXX.Nodetype可以得到一个数字,1就是元素,3就是文本,其他的不用记,详情查mdn
这里为什么要提Node呢?因为节点是我们用来增删改查的标记点
```
# 3.创建元素/标签
```
增

创建标签节点
let div1 = document.createElement('div')
document.createElement('li')
document.createElement('script')
document.createElement('style')

创建一个文本节点
text1 = document.createTextNode("你好")

插入文本
div1.appendChild(text1)
div1.innerText='你好'或者div1.textContent='你好'
但是不能用div1.appendChild('你好')

修改文本
xxx.innerText = 'xxx'
xxx.innerHTML = '<div>xxx<div>' //这个直接改html
```


```
删
childNode.remove()
```


```
改

写标准属性
xxx.className = '123' / xxx.className += '123' //加一个标签
xxx.style.color = 'blue'
xxx.style.backgroundColor = 'red' //'-'不能出现在js里,所以规定用一个大写代替

读标准属性
div2.className
div2.id
div2.style
<a>只能用xxx.getAttribute('href')获取原本的值

改事件函数
div.onclick默认值为null
如果将div.onlick的值改为一个fn,那么点击这个fn的时候,浏览器就会调用这个fn
并且是这样调用的:fn.call(div,event)
div也就是this,event就是整个事件的所有信息,比如坐标
**注意这个是很有用的,知道了div是this,就有了可操作性**


div.addEventListener 可以加更多的函数
```

```
查

查爸爸:node.parentNode
查子代:node.children 
//这里不用node.childNode,因为空格回车会被算作一个text,算成一个文本Node
查兄弟姐妹
parentNode.children 然后排除自己
node.firtChild 查看老大
node.lastchild 查看老幺
node.previousSibling 查看上一个哥哥
node.nextSibling 查看下一个弟弟

如何查看一个div里的所有元素?ok,数据结构的基本遍历
```