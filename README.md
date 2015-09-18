# react-df
=======

特点
------
极少依赖第三方组件, 不依赖"rc-XXX", 可定制能力强.

What is this
------
df is short for develop framework. we want to provide a series of tools helping develop and release project using React.
Also, tools are sample configed.

What is include
------
1. using webpack to pack js files and run debug server.
2. using yuidoc to create documents.
3. using npm to download and manage packages.

How to start
------
1. 'npm install webpack -g'
2. 'npm install' 
3. 'npm start'
4.  open your browser and go to `http://127.0.0.1:3000/webpack-dev-server/client?http://0.0.0.0:3000`
5. if you need packed js file , run `webpack`, the js file in `/dist/bundle.js`

How to use the yuidoc to create documents
------
0. please read the document < YUIDOC-README.md > 
1. install yuidoc: npm install astwyg/yuidoc -g
2. execute command in the root directory: in the root: yuidoc components -e '.js,.jsx'

Notice
------
the components are under develop, so you may see many dirty codes in them.

Known bugs
------
1. in packing, there are double warnings: 
```WARNING in ./~/jquery/dist/jquery.js
There is another module with an equal name when case is ignored.
This can lead to unexpected behavior when compiling on a filesystem with other c
ase-semantic.
Rename module if multiple modules are expected or use equal casing if one module
 is expected.

WARNING in ./~/jQuery/dist/jquery.js
There is another module with an equal name when case is ignored.
This can lead to unexpected behavior when compiling on a filesystem with other c
ase-semantic.
Rename module if multiple modules are expected or use equal casing if one module
 is expected.
 ```
 we still can not figure them.
 ```

Reference
--------
1. react-hot-loader documents: http://gaearon.github.io/react-hot-loader/getstarted/
2. react-hot-loader demo: https://github.com/gaearon/react-hot-boilerplate/
3. package a separate css file: http://webpack.github.io/docs/stylesheets.html#separate-css-bundle

一些文件的说明
----------
*由于目前开发中使用webpack在内存中进行打包和调试, 最终发布使用gulp, 将此工程作为依赖引入发布工程的node_modules目录下. 这是暂时的解决方案*
index.js: 目录放置在node_modules下时, 暴露`components/common.js使用`
index.html: webpack打包时使用的基本html文件.