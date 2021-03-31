# HTML常用标签
## 1.a 标签的用法
### 1.属性

    · href
    · target
    · download</br>
    · rel=noopener</br>

### 2.a的herf取值
    · 网址:</br>
        https://google.com
        http://google.com
        //google.com
    *:写网址就写第三个,不会出错

    · 路径:
    /a/b/c以及a/b/c
    index.html以及./index.html
    *:./是当前路径 /是相对路径 不加/是相对路径
    
    · 伪协议</br>
    JavaScript:代码;
    mailto:邮箱
    tel:手机号
    *:js写法可以点击之后没有动作
    

### 3.a的target取值
    · 内置名字:
        _blank  浏览器总在一个新打开、未命名的窗口中载入目标文档。
        _top    浏览器总在一个新打开、未命名的窗口中载入目标文档。
        _parent 这个目标使得文档载入父窗口或者包含来超链接引用的框架的框架集。如果这个引用是在窗口或者在顶级框架中，那么它与目标 _self 等效。
        _self 这个目标使得文档载入包含这个超链接的窗口，用 _top 目标将会清除所有被包含的框架并将文档载入整个浏览器窗口。

## 2.img 标签的用法
### 1.作用 发出get请求,展示一张图片
### 2.属性 
    alt:规定图像的替代文本
    src:规定显示图像的 URL
    height
    width
### 3.事件 onload/onerroe

    监听图片是否加载成功

### 4.响应式 max-width:100%

### 5._可替换元素_(可能会考)

## 3.table 标签的用法

```
    <table>
        <thead>
            <tr>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody>
        <tfoot>
             <tr>
                <td></td>
            </tr>
        </tfoot>
    </table>
```
    相关的样式:
    table-layout:auto/fixed 自动计算行列距
    border-collapse:collapse 表格合并
    border-spacing:0 控制border之间的距离
## 4其他标签
## form
### 1.作用 发出get或post请求,然后刷新页面
### 2.作用 action/autocomplete/method/target
### 4.事件 onsubmit

    要触发submit必须有type=submit

## input