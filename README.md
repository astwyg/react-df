# react-df
=======

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
1. 'npm install' 
2. 'npm start'
3. open your browser and go to `http://127.0.0.1:3000/webpack-dev-server/client?http://0.0.0.0:3000`

How to use the yuidoc to create documents
------
0. read the documents of yuidoc at `http://yui.github.io/yuidoc/syntax/index.html`
1. install yuidoc: npm install astwyg/yuidoc -g
2. execute command in the root directory: in the root: yuidoc components -e '.js,.jsx'