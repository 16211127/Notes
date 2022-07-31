## JS中的数据类型
数字 number
字符串 string
布尔 bool
符号 symbol
空 undefined
空 null
对象 object

数组 函数和日期都是特殊的对象,属于object

### 数字: number

    存储方式:64位浮点数
    写法:科学计数法 1.23e4
    特殊:
    0,+0和-0等于但不同
    无穷大:Innfinity
    无法表示的数字:NaN(not a number)

64位浮点数:1位符号,11位指数(-1023~1024)有效数字占52位(开头的1省略) 例如:+ 2的三次方 1.5(二进制)=> 0 + 3 + 1.5

范围(忽略符号位):Number:MAX_VALUE:1.7976931348623157e+308
            Number:MIN_VALUE:5e-324

精度(有效数字):最多只能到52+1二进制位表示有效数字

### 字符串:String
每个字符两个字节(阉割版 UTF8)

写法
单引号:'你好'
双引号:"你好"
反引号:`你好`
转义:字符前面加一个\

字符串的属性:
String.length
String[]

String.btoa("123");
String.atob("MTIz");
一般用来自欺欺人,假加密骗外行(比如邮箱)

### bool
五个falsy值:undefined null 0 NaN ''(空字符串)

### symbol
不用

### object

变量声明
var a=1 (过时)
a=1 (过时)
let a=1
const a=1

let的作用域只在他的块里,不能重复声明,可以不赋值(默认undfined)
const:必须赋值且不能再改

强制赋值
let n=1;
String(n);
也可以写成n=n+''

number同理
bug: String(100000000000000000)=>"1e+22"

bool:!!n即可

bug:1.toString不合法
(1).toString或者1..toString即可

2020 年 6 月 JS 新增了一种类型：bigint