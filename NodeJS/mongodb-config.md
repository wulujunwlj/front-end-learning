## Mongodb 安装配置   

1.下载压缩版 mongodb 文件。from:https://www.mongodb.org/    
2.解压缩文件，放在目录：D:\ProgramFiles\mongodb_2.6.7。并把文件目录配置在系统Path中   
3.D:\ProgramFiles\mongodb_2.6.7 目录下新建 mongo.config 文件，内容为：   

    ##数据存储的位置 
    dbpath=D:\ProgramFiles\mongodb_2.6.7\data
    ##所有的输出位置 
    logpath=D:\ProgramFiles\mongodb_2.6.7\log\mongo.log 
    ##日志读写操作 diaglog=3   
4.D:\ProgramFiles\mongodb_2.6.7 目录下新建 data 目录   
5.运行 MongoDB Server：   

	* 切换到 D:\ProgramFiles\mongodb_2.6.7\bin   
	* shell 命令：mongod.exe --config d:\mongodb\mongo.config   
6.连接到 mongo：   

	* 切换到 D:\ProgramFiles\mongodb_2.6.7\bin  
	* shell 命令：mongo.exe
