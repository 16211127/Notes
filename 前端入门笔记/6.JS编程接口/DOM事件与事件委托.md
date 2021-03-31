# Dom事件与事件委托
## 1.
捕获不可以取消,冒泡可以
e.stopPropagation()可中断冒泡
通俗来说,有人打我,我自己解决,别告诉我老子
一般用于封装某些独立的组件

有些事件不可捕获冒泡
MDN搜索scroll event  看到Bubbles 和 Cancalable

如何阻止滚动
电脑端:
x.addEventListener('wheel',(e) => {
    e.preventDefault();
})//阻止鼠标滚轮
::-webkit-scrollbar{width:0 !important }
手机端:
x.addEventListener('touchstart',(e) => {
    e.preventDefault();
})

自定义事件
* 浏览器自带一百多种事件,列表在MDN上
* 开发者可以自定义事件:
  ```
  button1.addEventListener('click',()=>{
      const event = new CustomEvent('frank',{
          detail:{name:'frank',age:18}
      })
      button1.dispatchEvent(event);
  })

  div1.addEventListener('frank',(e)=>{
      console.log('事件触发');
      console.lgo(e.detail);
  })
  ```

  事件委托
  封装事件委托