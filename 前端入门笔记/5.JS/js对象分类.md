# js对象分类
## 构造函数

* js中所有函数都有prototype属性和constructor(指向自己)
* this代表新构造的对象
* js之父用new来减少代码量

```
    function Square(width){
        this.width=width
    }
    Square.prototype.getArea= function(){
        return this.width*this.width
    }
    Square.prototype.getArea= function(){
        return this.width*4
    }
    let square = new Square(5)
```

```
    ES6引入了java的class
    class Square{
        Constructor(width){
            this.width = width
        }
        getArea(){
            return this.width*this.width
        }
    }
```
## new X()自动做了四件事情

* 自动创建空对象
* 自动为空对象关联原型,原型地址指定为X.prototype
* 自动将空对象作为this关键字运行构造函数
* 自动return this
* --JS之父的爱

## 构造函数X
* X 函数本身负责给对象本身添加属性
* X.prototype对象负责保存对象的共用属性

## 题外话:代码规范
* 大小写:所有构造函数首字母大写,被构造的对象首字母小写
* 词性:new后面的函数,使用名词形式,其他函数一般用动词开头,如new Person()和createSquare()的区别;

## 原型与公用属性的关系
* 你是谁构造的,你的原型就是谁的prototype属性对应的对象
* 原型公式:对象.\_proto\_===  其构造函数.prototype

## 对象需要分类
* 对象需要分类,比如dog1和dog2,而Object创建的对象是最没有特点的对象

## 数组对象
* 在其它语言里数组是一个单独的东西,但是在js里他是一个对象