# 一、异步与回调
## 1.什么是异步,什么是同步?
### 同步:直接拿到结果 例子:医院挂号,一直在等待结果
### 异步:餐厅挂号,拿到号可以出去干其他的 ,可以每十分钟问一次(轮询),可以等微信通知(回调)

## 2.回调 callback
### 你写给自己用的函数不是回调,写给别人用的函数就是回调
### requestonreadystatechange就是我写给浏览器调用的函数

### 回调举例
```
    function f1(){}
    function f2(fn){
        fn()
    }
    f2(f1)
```
### f1是我写给f2的调用函数,所以f1是回调函数

## 3.异步和回调的关系
### 关联:异步常常用到回调
### 区别:回调也可以用到同步任务里
#### 如:array.forEach(n => console.log(n) )就是同步回调

## 4.判断异步和同步
### 如果一个函数的返回值处于
#### *setTimeout
#### *AJAX(即XMLHttpRequest)
#### *AddEventLisenter
#### 这三个东西内部,那么这个函数就是异步函数

## 5.举例:摇骰子
```
    function 摇骰子(){
        setTimeout( () =>{
            return parseInt(Math(.random() * 6 + 1 ))
        },1000)
        // return undefied
    }

    简化
    f1(x) => {console.log(x)}
    function 摇骰子(fn){
        setTimeout( () =>{
            fn( parseInt(Math(.random() * 6 + 1 ) )
        },1000)
        // return undefied
    }

    简化为箭头函数
    摇骰子(x => { console.log(x)})
    
    再简化为摇骰子(console.log)//如果参数不一致不可以这么优化,比如下面的题
```
## 6.著名面试题
```
    const array = ['1','2','3'].map(parseInt)
    console.log(array)
    结果是什么?
    答案:[1,NaN,NaN]
    原因:数组提供的参数数量与parseInt不一致
    解释:parseInt(item,i,arr)中的i表示进制,跟map(item,i,arr)中的i不一样,直接引用发生错误NaN
    正解:const array= ['1','2','3'].map(item => parseInt(item))
```

## 7.考虑成功与失败
### 1.回调接受两个参数 error,data
### 2.接受两个回调
### 以上两种方法都不足
```
    1.命名不规范
    2.容易出现回调地狱
    3.很难进行错误处理
```
### 为了解决上述问题,提出了promise(面试必考点)

## 8.promise

第一步:return new promise((resolve,reject) =>{})
第二步:使用.then(success,fail)

## 9.axios 
### 推荐写博客了解这个库
### 在bootcdn上引入



ajax('get','/xxx').then((response)=>{},(request)=>{})
then的第一个参数就是success,第二个就是fail
ajax返回了一个promise对象(链式函数,参考jq),这里就需要改造一下ajax
改造写法<strong>return new Promise ({resolve,reject}=>{})</strong>

自己写ajax太过复杂,我们可以用过jquery ajax 或者axios(专业前端都用这个)
