### 1.建立本地仓库

    git六项配置,配置好后在使用git
    git config --global user.name 你的英文名
    git config --global user.email 你的邮箱
    git config --global push.default simple
    git config --global core.quotepath false
    git config --global core.editor "code --wait"
    git config --global core.autocrlf input

### 2.初始化
    输入代码git init创建.git文件

### 3.基本的git操作

    基本操作
        git init                        创建.git文件
        git add                         选择哪些变动是要提交的,路径可以是绝对路径和相对路径.和*
        .gitignore                      选择哪些变动是要不需要提交的
        git commit -v                   提交新的版本并写注释
        git reset --hard XXXXXXX        输入六位数字回溯版本,一定要给自己的每一个文件都标记add或者ignore,没有标记的删除会被删除
        git log                         查看版本历史
        git reflog                      产看版本回溯历史
        git start .                     打开当前文件夹
        git status sb                   简单查看git的状态

    分支操作
        git branch X                    创建分支
        git checkout X                  更换当前分支
        git merge X                     合并X和当前分支,如果有冲突就自己删改

### 4.笔记
    比较常用的就是git add .和git commit -v
    .gitignore里面写文件名即可,详细的正则写法可以百度
    git reset --hard XXXXXXX 使用时一定要注意所有文件都要有标记,否则会说版本时会被删除