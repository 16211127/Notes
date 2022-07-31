# 对象
## 定义
* 无序的数据集合
*  键值对的集合

## 写法

    let obj={'name':'frank','age':18}
    let obj= new Object({'name':'frank','age':18})
    console.log({'name':'frank','age':18})

## 细节
* 键名(key)是**字符串**,不是标识符,可以包含任意字符
* 引号可以省略,省略之后只能写标识符
* 就算引号省略了,键名依然是字符串

## 奇怪的属性名
* 所有属性名都会自动变成字符串:
```
    let obj={
    1:'a',
    *3.2:'b',
    1e2:ture,
    .234:true
    0xFF:true
    };
    Object.keys(obj)
    =>["1","100","255","3.2","0.01","0.234"]

    可以看到1e2先变成了100再变成字符串,也就是先求值再变字符串,其他的同样如此,要保证安全就加引号
```
* 用变量作为属性名:
```
let p1='name'
let obj={[p1]:'frank'}

用中括号括起来就行
```
## 对象的隐藏属性
* 对象隐藏的_proto_属性记录了共有属性组成对象prototype的地址
* 详见js入门笔记

## 对象属性的增删改查
* 删:delete obj.xxx或delete obj['xxx']
* 读:Object.keys(obj):查看自身所有属性</br>
     console.dir(obj):查看obj的共有属性</br>
     obj.hawOwnProperty('toString'):判断一个属性是否是自身拥有的</br>
* 查:obj['key']/obj.key
* 写:批量赋值:Object.assign(obj,{p1:1,p2:2})
* 声明时修改隐藏属性:Object.create:let obj =Objcet.create(common)g'i't

* 注:Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
```
    const object1 = {};
    Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
    });
```