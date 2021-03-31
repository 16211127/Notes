# 1.HTML是谁发明的

HTML的英文全称是 Hyper Text Markup Language，即超文本标记语言。HTML是由Web的发明者 Tim Berners-Lee和同事 Daniel W. Connolly于1990年创立的一种标记语言，它是标准通用化标记语言SGML的应用。用HTML编写的超文本文档称为HTML文档，它能独立于各种操作系统平台(如UNIX， Windows等)。使用HTML语言，将所需要表达的信息按某种规则写成HTML文件，通过专用的浏览器来识别，并将这些HTML文件“翻译”成可以识别的信息，即现在所见到的网页。

# 2.HTML起手应该写什么

```html

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width"  initial-scale="1.0"/>

<meta http-equiv="X-UA-compatible" content="ie=edge"/>

<title>标题</title>

</head>

<body>

</body>

</html>
```

# 3.HTML中常用的表示章节的标签有哪些，分别有什么意思

标题 h1~h6

文章 article

头部 header

章节 section

段落 p

主要内容 main

旁支内容 aside

划分 div

# 4.HTML中全局属性有那些

class 

contentditable

    利用这个属性可以让用户修改div,将div写在body里并显示即可
hidden

id

    因为id重合不会报错,所以尽量不用id

style

tabindex

    主要功能是用tab控制界面,值为-1不能选中,0最后选中,其他的按大小顺序选中

title

    用来显示完整的内容

# 5.HTML中常用的内容标签有那些，分别是什么意思？

ol+li           

    order list

ul+li           

    unorder list

dl+dt+dd        

    description list,dt里是描述对象,dd是描述内容

pre

    里面的空格不会被省略

hr

    分割线符

br

    换行符
a

    超链接

em

    语气强调

strong

    本质强调

code

    写代码

quote

    引用

blockquote

    块引用