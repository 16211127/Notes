## 自增自减运算符
* a++的值为a+1
* ++a的值为a
* 求值运算符:+
* 负数运算符:-
* js的特殊加法: 1+'2'='12'
* 永远不要用==,js总是自作聪明给你整个类型转换

## 布尔运算符
* 或且非:|| && !
* 可选链语法:console?.log?("hi")
* a=a||100 a的保低值为100
* function add(n=0){return n+1} 可以防止传进来的是0或者其他几个假值

## 二进制运算符
* 或与否:|&~ 只对二进制数有效
* 异或:^
* 左移右移:<<>>
* 头部补零的右移>>>

## 面试参考:

* 偶数 & 1 = 0
* 奇数 & 1 = 1

使用~,>>,<<,>>>来取整
位运算零位就能消除小数

使用^来三步交换a b的值
a ^= b
b ^= a
a ^= b

## 其他奇葩运算符
### .运算符 
* 非对象也可以使用共有属性的原因:创建一个一次性的替身
* 程序员不会用Number String Boolean这三种对象

### void运算符
* 作用:求表达式的值或者执行语句,然后void的值总是为undefined

### 逗号运算符
* ,会默认把最后一个值return 
比如:let a=(1,2,3,4,5)a的值为5
有用的地方 let f = (x) =>(console.log("hi"),x*x) 默认return 后面的

## 运算符优先级
* 相同的运算符从右往左算
* 圆括号优先级最高

