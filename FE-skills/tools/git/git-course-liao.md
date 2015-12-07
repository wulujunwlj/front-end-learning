
## Git 教程       @by [liaoxuefeng](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

### Git 简介
Git 是目前世界上最先进的分布式版本控制系统。

### Git 的诞生
* Linus 在1991年创建开源的 Linux
* 2002年以前，志愿者把源代码文件通过 diff 的方式发给 Linus，由他通过手工方式合并代码
* 2002年。使用商业的版本控制系统 BitKeeper , 由 BitMover 授权 Linux 社区免费使用权
* 2005年。Linus花了两周时间用C写了一个分布式版本控制系统
* 2008年。Github网站上线

### 集中式 vs 分布式
* 集中式：版本库集中存放在中央服务器，干活时先从中央服务器取得最新版本，然后干活，干完以后再推送给中央服务器
> 问题：必须联网，提交文件受带宽和网络影响
* 分布式：每个人的电脑都是一个完整的版本库
> 分布式版本控制系统通常也有一台充当"中央服务器"的电脑，作用仅仅是用来方便交换大家的修改
 
### 安装 Git
最早 Git 实在 Linux 上开发，很长一段时间内，Git只能在 Linux 和 Unix 系统上使用。

* Debian/Ubuntu Linux:sudo apt-get install git/git-core
* Mac OS X:AppStore 安装 Xcode,选择 Preferences 选择 Downloads，选择 Command Line Tools
* Windows:[msysgit](http://msysgit.github.io/)。安装完成后
> git config -global user.name "Your Name"
> git config -global user.email "Your Email"

### 创建版本库(仓库：repository)
* mkdir git-demo
* cd git-demo
* pwd
* git init
* 创建 readme.md
* git add readme.md     [添加文件到仓库]
* git commit -m 'init'  [提交文件到仓库]

### 时光穿梭机
* git status    [查看仓库当前的状态]
* git diff  [查看 dirrerence]

### 版本回退
* git log   [显示从最近到最远的提交日志。commit id(版本号)]
* git reset -hard HEAD^     [回退到上一个版本，HEAD，表示当前版本是一个指向当前版本的指针]
* git reflog    [查看命令历史]

### 工作区和暂存区
* 工作区：电脑上的目录结构
* 版本库(repository)：工作区的隐藏目录 .git 是 Git 的版本库
    * 暂存区(stage/index)：
    * master：Git 自动创建的第一个分支
    * HEAD：指向 master 的一个指针
* 需要提交的文件修改通通放在暂存区[git add]，然后依次性提交暂存区的所有修改[git commit]

### 管理修改


### git 命令
* git init
* git add
* git commit
* git status
* git diff
* git log [--pretty=oneline]
* git reset -hard HEAD  [HEAD^^^/HEAD~100]
