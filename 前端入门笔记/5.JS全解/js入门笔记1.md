# 操作系统常识

## 一切运行都在内存里

* stack(栈):每个区的数据顺序存放
* heap(堆):每个区的数据随机存放

    细节
    window对象和变量是两个东西
    比如 var x=window之后就可以用x调用window对象上的函数了
 
![9](./photo/内存图.png) 
![9](./photo/抽象内存图.png) 
## JS的三座大山
* this
* 原型
* ajax

1.原型链 prototype
一般开头大写的都带有这个属性

    var obj={}
    obj.toString()
    声明一个空的对象obj就会引用一个隐藏的属性
    声明空的数组会引用另外一组隐藏的属性

    隐藏属性:
![9](./photo/prototype.png) 

最后分享一篇文章很好的解释了protetype的由来和原理</br>
[Javascript继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)

