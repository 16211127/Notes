## 定义一个函数
### 具名函数
    fuction fn(x,y){return x+y}
### 匿名函数(也叫函数表达式)
    let a=function(x,y){return x+y}
### 箭头函数
    let f2=(x,y)=>{ console.los("hi"); return x+y }

## 函数的要素
### 调用时机
### 作用域
###  闭包
    详见方方老师的文章:(https://xiedaimala.com/posts/62c7446c-dac8-4d95-b965-db3fb8fc1187)
### 形式参数
### 返回值
### 调用栈
* chrome的压栈数大概在1.1W+
### 函数提升

### arguments(除了箭头函数)
* arguments是一个伪数组(用Array.form可以变数组)
### this(除了箭头函数)
* 如果不给条件,this一般默认指向Window
* 奇葩:如果this传的对象不是对象,js默认会将其封装为对象
```
    fuction fn(){
        //'use strict'  这句话可以防止封装为对象
        console.log(this)
    }
    结果:Number(1)
```
## 如何传this
* 目前可以使用fn.call(xxx.1,2,3)传this和arguments
* 而且xxx会被**自动转化为对象**(js的糟粕)
* this类似于python的self的参数

## 所有函数调用都使用call写法
* 大师写法:fn.call(this的值,参数)

## 立即执行函数
* 只有js里有的,用来造局部变量,现在基本不用
* 新版的直接用代码块就行了

## JS的函数的执行时机
```
let i = 0
for(i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}
```
上述代码会打印出6个6,原因是setTimeout导致所有的console.log执行都在for循环之后

```
let i = 0
for(let i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}
```
上述代码会打印出0,1 ,2,3,4,5,原因是js自己擅自修改..一共创建了7局部变量i,导致先前的情况失效

除了使用 for let 配合，还有什么其他方法可以打印出 0、1、2、3、4、5?
```
    let person ={
    name:'justin'
    f(){
        console.log(this.name)
    }
}
person.f.call({name:'0'})
person.f.call({name:'1'})
person.f.call({name:'2'})
person.f.call({name:'3'})
person.f.call({name:'4'})
person.f.call({name:'5'})

```
```
function fn(x){
    if(x<6){
        return x
    }
}
fn(1)
fn(2)
fn(3)
fn(4)
fn(5)
```