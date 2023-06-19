# 一些轮子
inquirir.prompt 负责交互 chalk显示彩色 直接conosel

# 新建文件夹 改写package.json的script以及bin
script标签的本质是利用babel complie就是运行babel命令编译暴露的模块 watch就是babel编译的时候加了一个额外的参数罢了
# 在bin cmd文件里写!/usr/bin/env node 然后require入口文件 main.js
# 创建babel 
然后 安装bable env babel core 并在文件里加上preset preset是编译的预定插件和规则 常用的是@babel/preset-envjian

# 全局命令
npm link 会把pkg里写的bin 连接到全局

# 拉模板
利用类 generator
构造函数接受名字和位置
下在git仓库可以用dowlngitrepo 注意这个不支持promise
不用promise也没啥 非要promise可以用promisefy 或者自己包一下
首先拉模板仓库的列表 axoisget一下
然后让用户选择 这里还是用的inquirier prompt
然和基于选择的模板列表的item去拉tag列表
原理一样的
最后拉到目标

# 检查node
 process.versions.node

 # feature
 tx eslint webpack 自己写loader 新建module命令 懒加载