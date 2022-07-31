# js基本语法

## 1.什么是表达式和语句

### 表达式:
* 1+2表达式的值为3
* conso.log(3)的值为Undefined(函数的返回值)

### 语句:
* var a = 1;

    大部分空格和回车没有影响,除了return后面不能乱加回车;
### 标识符的规则

* 规则
    第一个字符,可以是Unicode字母或$或_或中文
* 变量名是标识符
    var _=1;
    var $=1;
    var 你好=1;
* 注释符号://或者/* */
###  写注释的误区:不是越多越好,注意信噪比(好的注释:踩坑注解,为什么代码会写这么奇怪,遇到什么bug/烂的注释:我写了什么)

## 2. if else 语句
* 略

## 3.while for 语句
* 略
## 4.break continue
* 略
## label

语法:
```
    outPoint:
        for (var i = 0 ; i < 10 ; i++){
            for (var j = 0 ; j < 10 ; j++){
                if( i == 5 && j == 5 ){
                        break outPoint;
                }
            num++;
            }
        }
```
面试题:
这个{foo:1}是一个标签,在chrome被优化成了个对象

[Lavle实例](https://www.cnblogs.com/hjbky/p/6178625.html)