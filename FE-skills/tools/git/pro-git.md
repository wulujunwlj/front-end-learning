
# Pro Git

## 1.起步
### 1.1 关于版本控制
* 版本控制是一种记录若干文件内容变化，以便将来查阅特定版本修订情况的系统
* 版本控制系统：
    - 本地版本控制系统：采用某种简单的数据库来记录文件的历次更新情况
        + rcs
    - 集中化的版本控制系统：(Centralized Version Control System - CVCS)
        + CVS,Subversion,Perforce 等
        + 都有一个单一的集中管理的服务器，保存所有文件的修订版本
        + 协同工作的人们通过客户端连接服务器
    - 分布式版本控制系统：(Distributed Version Control System - DVCS)
        + Git,Mercurial,Bazaar,Darcs 等
        + 客户端不只提取最新版本的文件快照，而是把原始的代码仓库完整的镜像下来
* Git 的历史
    - 2002年，开源项目组开始启用 BitKeeper 来管理和维护代码
    - 2005年，Linus Torvalds开发 Git
    - Git 的目标：
        + 速度
        + 简单的设计
        + 对非线性开发模式的强力支持(允许上千个并行开发的分支)
        + 完全分布式
        + 有能力高效管理类似 Linux 内核一样的超大规模项目(速度和数据量)
* Git 基础要点(P4)
### 1.2
### 1.3
## 2.

## 3.Git 分支
### 3.1 分支简介
* Git 保存的不是文件的变化或者差异，而是一系列不同时刻的文件快照
* Git 的分支，本质上仅仅是指向提交对象的可变指针。
* master 分支跟其他分支没有任何区别，仅仅是 git init 命令默认创建的
* 创建分支:git branch testing
* Git 根据 HEAD 指针知道当前在哪一个分支上。HEAD 指针指向当前所在的本地分支
* git branch 命令仅仅创建一个新的分支，而不会自动切换到新分支中去
* 切换分支:git checkout testing
* 