# 1. SSHkey验证身份

        运行代码:ssh-keygen -t rsa -b 4096 -C 15334629281@163.com
        运行代码cat ~/.ssh/id-rsa.pub得到公钥,复制到github上即可
# 2.测试是否成功

        输入代码 ssh-T git@github.com

# 3.上传代码
    git remote add origin git@xxxxxxx   上传当前.git
    git push -u origin master          第一次上传时输入,意思是设置上游分支
    git push                            更新仓库
    git pull                            先把远程分支合并到本地对应的分支

# 4.如何上传其他分支
    git push origin x:x
    或
    git checkout x
    git push -u oringin x

# 5.下载代码
    git clone git@github.com:16211127/note.git              指定路径下载代码,如
    git clone git@github.com:1211127/note.git yyy          在当前目录创建yyy并下载,记得cd yyy
    git clone git@github.com:16211127/note.git .            在当前目录下载

# 6.一个.git上传到两个仓库
    git remote add origin git@xxxxxxx
    git push -u oringin master
     git remote add origin2 git@xxxxxxx
    git push -u oringin2 master

# 7.高级操作
    λ code ~/.bashrc 编辑.bashrc文件
    写入    alias gc="git commit -v"

# 8.github直接预览Markdown
    Markdown是一种标记语言,一般后缀为.md

# Markdown操作示范
## 标题2
### 标题3

 ```JavaScript
    var a=1;
```

我的[b站主页](https://www.bilibili.com/)