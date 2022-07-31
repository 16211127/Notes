js的数组是用key模拟的
原理图:

## 创建一个数组
* let arr = [1,2,3]
* let arr = new Array(1,2,3)

## 转化一个数组
* let arr='1,2,3' spilt(',')
* Array.from('123')

## 伪数组
伪数组的原型链中没有数组的原型链

##
* 合并数组:arr1.contact(arr2)
* 分离数组:arr1.slice(0)//经常用slice(0)来复制数组

## 数组的增删改查
* arr.delete不会改变数组长度,
* 删除头部:arr.shift
* 删除尾部:arr.pop
* 删除中间:arr.splice(下标,数量)
* 替换数值:arr.splice(下标,数量,修改的值)
  
* 对象的查看方式不靠谱(Object.keys/values),写for循环或者使用forEach函数
```
  arr.forEach(fuction(item,index){
     console.log('${index}:&{item}')
  })//回调函数
```

## 查看单个属性
* arrfind(item=>item%2 === 0)//找第一个偶数
* arrfindIndex (item=>item%2 === 0) //找第一个偶数的索引
* arrindexOf(item)//存在返回索引,不存在返回1

## 增加数组中的元素
* 尾部添加元素:array.push()
* 头部添加元素:array.unshift()
* 增加元素:array.splice(下标,0,增加的值)

## 修改数组中的元素
* 反转顺序:arr.reverse()
* 排序:arr.sort((a.b)=>a-b)
  
    经典面试题:如何将var s="abcde"调换顺序?
    答: s.split('').reverse();

## 数组变换
* map:n变n
* arr.map(item=> item*item)
* filter:n变少
* arr.ailter( item => item%2===1 ? true : false)
* reduce:n变1,可以代替map和filter

```
    reduce模拟map
    arr.reduce((result,item)=>{return result.concat(item*item)},[])

    reduce模拟filter
    arr.reduce((result,item)=>{result.concat(item%2 === 1 ? [] : item),[])
```

