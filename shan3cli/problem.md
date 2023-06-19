1. commonjs es6
commonjs 是node用的 require语法 module.exports={}
es6 是import export的语法
es6支持动态导入和只导出一部分的成员-》解构

commonjs无法使用一些利用es6导出的模块 所以要裹一层
可以通过判断传递对象有没有__esmodule属性知道他是不是es6模块

要使用的话就掉用default属性 而不是直接call


2. 为什么读写文件同步？
        //readFIle 是异步 这里为什么要同步读取 因为commonjs是同步的
        //即他会阻塞代码 AMD不是同步 es6异步加载 同步执行
        //为什么不异步 因为异步收益很小 模块数量有限并且io很少

3. 怎么改写pak安装依赖
4. ts的配置
5. eslint的配置
6. angular.js的配置
7. babel配置
8. router
9. sourcemapURL