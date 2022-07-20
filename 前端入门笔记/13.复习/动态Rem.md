手机专用:动态Rem

css单位:px、pt(X)、em(一个字的宽度,可以简化为一个font-size)、ex(X)
rem: 根元素(html,改body的大小是没用的)的font-size
(网页的默认font-size就是16px,手机则跟屏幕宽度有关,chrome里还有可以设置的最小字体大小,比如最小12px,写成6px也是12px)
vh:viewport height(视口高度)
vw:viewport whight(视口宽度)



百分比布局的问题:高度没法和宽度做关联,rem主要就是解决了这个问题


用js设置html的fontsize等于页面宽度,就使得rem等于屏幕宽度了
```
<script>
    var pagewidth = window.innerWidth
    document.write('<style>html{font-size:'+'pagewidth'px;'}</style>')
</script>
```

ps:不能动态响应,感觉就纯手机用的
另外还要调整body的字体为16px,所以字体大小其实没变(当然也可以按照rem调整,这样字体可以跟着变小)

如果你想让100rem=pagewidth可能会出错,因为chrome有最小的fontsize,可以用10rem=pagewidth

borderbox的边框是1px,怎么和rem统一?
没办法,只能用scss了

px自动变成rem:在sass里用函数将px转化为rem并且翻译为css

你不会用less/scss/sass/webpack的根源
1.不会用命令行
2.不会英语
3.不会看文档