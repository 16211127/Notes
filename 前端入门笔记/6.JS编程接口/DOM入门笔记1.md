# DOM入门笔记

## 获取元素,也叫做标签
1. window.idxxx或直接idxxx
2. document.getElementById('idxxx')
3. document.getElementsByTagName('div')[0]
4. document.getElementsByClassName('div')[0]
5. document.querySelector('#idxxx')
6. document.querySelectorAll('.red.')[0]</br>
**上面几个坐标加0的原因是,他们返回的是从这个点开始的树,不推荐**

### 用哪一个?
* 工作中用5和6
* 做demo可以直接用idxxx,千万别让人发现
* 要兼容IE的可怜虫才用234

### 获取特定元素
* document.body/html/head
* document.all可以获取所有的标签(ps:这是一个奇葩的falsy值)

### div的六层原型链
* 一层套一层,div可以使用祖宗的所有共有属性
  
### 节点和元素的区别
nodetype MDN可查阅 为1时表示标签,3是文本

## 节点:node的增删改查
### 增:
* 创建一个标签节点
```
    let div1 = document.createElement('div')
    document.createElement('style')
    document.createElement('script')
    document.createElement('li')
```
* 创建一个文本节点
```
    text1 = document.createTextNode('你好')
```
* 标签里插入文本
```
    div1.appendChild(text1)
    div1.innerText = '你好' 或 div1.textcontent = '你好'
    但是不能用div1.appendChild('你好') //就很傻逼
```
* 你创建的标签默认在js线程中,但你需要把他插入head,body或者更深的地方才能生效,插入方法:appendchild
```
    let div = document.createElement('div')
    test1.appendchild(div)
    test2.appendchild(div)
    //最后会插入到test2里面,因为div只有一个
```
### 删:
* 新方法:childNode.remove()
* remove以后内存还在,可以弄回来,如果想彻底删除就让它等于null

### 改:
* div.style.width
* div.className = 'blue'
* div.classList.add =('blue')
* 读标准属性:div.getAttribbute('class')
* 改事件处理函数:
  ```
  div.onclick默认为null,你可以写一个函数覆盖,
  并且是这么被调用的:fu.call(div,event)
  div会被当作this,event则包含了所有的信息包括坐标

  div.addEventListener是div.onclick的升级版,之后会写
  ```
* 改内容:
```
    div.innerText = 'xxx'
    div.textContent = 'xxx'
    div.innerHTML = 'xxx'
    改标签:div.innerHTML=null;//先清空
    div.appendchild(div2)//再添加内容
    改爸爸:newParent.appendChild(div)//直接换地方
```

### 查:
* 查爸爸:node.parentNode 或者 node.parentElement
* 查儿子:node.childNode 或者 node.children
```
node.childNode 的区别 node.children
<ul id="test">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
console.log(test.childNodes.length) = 7
JS的变态之处:ul和li后面的空格文本也算儿子,一共四个文本儿子
这里使用console.log(test.children.length)可以避免这种情况
```
* 查兄弟姐妹:node.parentNode.childNodes/children 然后排除自己
* 查看老大老幺 node.firstChild/lastChild
* 查看上下兄弟 node.previousSilbling/nextSibling

```
    遍历一个div里的所有元素
    travel = (node,fn) => {
        fn(node)
        if(node.children){
            for(let i=0;i<node.children.length;i++){
                travel(travel(node.children[i]),fn);
            }
        }
    }
    travel (div1,(node) => console.log(node))
```
## DOM操作是跨线程的
* JS执行线程和渲染引擎线程中间需要浏览器沟通,所以DOM操作要花时间
* 属性同步:data-作为前缀的自定义属性以及标准属性会被同步到页面中

## Property 和 Attribute
* js引擎中div1的属性叫做Property
* 渲染引擎中div1的属性叫做Attribute
* 他俩大部分时候相等,但是如果不是标准属性,那么他们只会一开始相等,前者支持字符串布尔等类型,后者只支持字符串