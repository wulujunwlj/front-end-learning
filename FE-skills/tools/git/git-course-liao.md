
## Git 教程       @by [liaoxuefeng](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

### Git 简介
---

Git 是目前世界上最先进的分布式版本控制系统。

#### Git 的诞生
* Linus 在1991年创建开源的 Linux
* 2002年以前，志愿者把源代码文件通过 diff 的方式发给 Linus，由他通过手工方式合并代码
* 2002年。使用商业的版本控制系统 BitKeeper , 由 BitMover 授权 Linux 社区免费使用权
* 2005年。Linus花了两周时间用C写了一个分布式版本控制系统
* 2008年。Github网站上线

#### 集中式 vs 分布式
* 集中式：版本库集中存放在中央服务器，干活时先从中央服务器取得最新版本，然后干活，干完以后再推送给中央服务器
> 问题：必须联网，提交文件受带宽和网络影响
* 分布式：每个人的电脑都是一个完整的版本库
> 分布式版本控制系统通常也有一台充当"中央服务器"的电脑，作用仅仅是用来方便交换大家的修改
 
### 安装 Git
---

最早 Git 实在 Linux 上开发，很长一段时间内，Git只能在 Linux 和 Unix 系统上使用。

* Debian/Ubuntu Linux:sudo apt-get install git/git-core
* Mac OS X:AppStore 安装 Xcode,选择 Preferences 选择 Downloads，选择 Command Line Tools
* Windows:[msysgit](http://msysgit.github.io/)。安装完成后
> git config -global user.name "Your Name"
> git config -global user.email "Your Email"

### 创建版本库(仓库：repository)
---

* mkdir git-demo
* cd git-demo
* pwd
* git init
* 创建 readme.md
* git add readme.md     [添加文件到仓库]
* git commit -m 'init'  [提交文件到仓库]

### 时光穿梭机
---

* git status    [查看仓库当前的状态]
* git diff  [查看 dirrerence]

#### 版本回退
* git log   [显示从最近到最远的提交日志。commit id(版本号)]
* git reset -hard HEAD^     [回退到上一个版本，HEAD，表示当前版本是一个指向当前版本的指针]
* git reflog    [查看命令历史]

#### 工作区和暂存区
* 工作区：电脑上的目录结构
* 版本库(repository)：工作区的隐藏目录 .git 是 Git 的版本库
    * 暂存区(stage/index)：
    * master：Git 自动创建的第一个分支
    * HEAD：指向 master 的一个指针
* 需要提交的文件修改通通放在暂存区[git add]，然后依次性提交暂存区的所有修改[git commit]

#### 管理修改
为什么 Git 比其他版本控制系统设计得优秀：Git 跟踪并管理的是修改，而非文件。

#### 撤销修改
* git checkout -- file    [丢弃工作区的修改，让文件回到最近一次git comit 或 git add 时的状态]
* git reset HEAD file   [把暂存区的修改撤销掉 - unstage，重新放回工作区]

#### 删除文件
* git rm file

### 远程仓库
---

#### 添加远程库
保持本地库和远程库同步的方法
* 在 Github 创建一个代码仓库
* git remote add origin git@github.com:***/**.git
* git push -u origin master [把当前分支推送到远程，-u 参数，使得 Git 不但会把本地的 master 分支内容推送到远程新的 master 分支，还会把本地的 master 分支和远程的 master分支关联起来]
* git push origin master

#### 从远程库克隆
* 创建远程库
* git clone git@github.com:***/**.git
* cd **
* dir

Github 给出的地址不止一个。包括 https、ssh，使用https 除了速度慢以外，最大的麻烦事每次推送都必须输入口令，但是某些公司只开放 http端口。

### 分支管理
---

分支的作用
* 开发功能的独立性(合并之前不会影响主分支功能)
* 分支功能的完整性(可以是一个完整的功能组件)

#### 创建与合并分支
* 主分支(master)   [HEAD 指向 master，master指向提交]
* git checkout -b dev[switch branch to dev，-b表示创建并切换](git branch dev + git checkout dev)
* git branch [列出当前分支]
* git checkout master [切换到分支 master]
* git merge dev [合并指定分支到当前分支]
* git branch -d dev [删除 dev 分支]

#### 解决冲突
当在不同分支上同时修改相同文件并提交时会出现冲突，需要先 git merge，然后手动解决冲突，再提交。

git log -graph -pretty=oneline -abbrev-commit

#### 分支管理策略
* 合并分支时的 fast forward 模式，删除分支后，会丢掉分支信息；如果禁用 fast forward 模式，Git 会在 merge 时生成一个新的 commit，这样，从分支历史上就可以看出分支信息。
* git merge -no-ff -m 'merge with no-ff' dev
* 实际项目中采用的分支策略   
    * ![分支策略](file:///.\images\branch-strategy.png)
    * master 分支是非常稳定的，仅仅用来发布新版本
    * 开发在 dev 分支上，发布新版本时，把 dev 分支合并到 master 上
    * 每个人在 dev 分支上新开分支干活，时不时往 dev 分支合并

#### Bug 分支
stash：把当前工作现场"储藏"起来，等以后回复现场后继续工作。
* git stash 
* git checkout master
* git checkout -b issue-001
* 修改文件
* git checkout master
* git merge -no-ff -m 'merged' issue-001
* git branch -d issue-001
* git checkout dev
* git stash list
* git stash pop [git stash apply + git stash drop]

#### feature 分支
用于添加新功能时的另开分支，功能完毕后再合并并删除该分支。
* git checkout -b feature-vulcan
* git branch -d feature-vulcan
* git branch -D feature-vulcan

### 多人协作
* 查看远程分支:git remote -v
* 推送分支:git push origin branch-name
* 抓取分支：git clone ***
* 创建远程 origin 的 dev 分支到本地：git checkout -b dev origin/dev
* 指定本地 dev 与远程 origin/dev 分支的链接：git branch -set-upstream dev origin/dev
* 多人协作的工作模式
    * 试图用 git push origin branch-name 推送自己的修改
    * 如果推送失败，因为远程分支比本地更新，需要使用 git pull 试图合并
    * 如果合并有冲突，则解决冲突，并在本地合并
    * 如果没有冲突或者已解决冲突，使用 git push origin branch-name

### 标签管理
---
标签是版本库的一个快照，实际上是指向某个 commit 的指针。
创建的标签都只存储在本地，不会自动推送到远程。

#### 创建标签
* git tag -a v1.0 -m 'version1.0' commit-id
* git tag

#### 操作标签
* 删除标签:git tag -d v1.0
* 推送标签到远程：git push origin <tagname>
* 推送所有标签：git push origin -tags
* 删除远程标签：git push origin :refs/tags/v0.9

### 使用 Github
---


### git 命令
---

* git init
* git add
* git commit
* git status
* git diff
* git log [--pretty=oneline]
* git reset -hard HEAD  [HEAD^^^/HEAD~100]
* git checkout -- file
* git reset HEAD file
* git rm
* git remote add 
* git push
* git clone
* git checkout
* git branch 
* git merge
* git stash
* git remote -v
* git tag
* 

