# 配置用户名和密码

从一台新的电脑开始操作
git clone把整个git项目拷贝下来
一般会碰到代码拉不下来的操作，这是由于的你用户名和密码没有配置，执行这两个指令
git config --global user.name xxx 
git config --global user.email xxx@qq.com
然后就开始拉代码

# pull 拉代码

git pull
git pull相当于git fetch和git merge。其意思是先从远程下载git项目里的文件，然后将文件与本地的分支进行merge
拉了代码之后因为现在的代码是master，一般会建立自己的分支。

## 建立分支

```git
git branch [分支名称]（创建新的分支）
```

## 切换分支

```
然后执行git checkout [分支名称] （切换到不同分支），切换到你自己的分支进行代码的编写
```

全部搞完之后。

## 再次执行pull 

第一步先去执行一次git pull，避免你们之间的代码冲突
第二步git add [文件名] (添加新的文件)

第三步git commit -m [关于本次提交的相关说明] (提交)

第四步执行 git push [远程仓库名] [分支名]



第四步如果你想撤销提交git checkout --[文件名] 这样就把状态回到暂存区，再重复上面的代码执行	

一些不常用的指令



git init (初始化一个仓库)
git status (查看文件状态)
git diff   (如果文件改变，比较两个文件内容)
git remote -v 查看远程仓储名称
（分支）  
git branch [分支名称]（创建新的分支）
git checkout [分支名称] （切换到不同分支）
git checkout -b [分支名称] （创建并切换到不同的分支）
git branch (查看当前所在的分支)
git merge [分支名称] （合并指定分支到当前分支）
git branch -d [分支名称]  (删除分支)



# git pull 和 git fetch 的区别 

 ● git fetch 只是将远程仓库的变化下载下来，并没有和本地分支合并。 ● git pull 会将远程仓库的变化下载下来，并和当前分支合并。









