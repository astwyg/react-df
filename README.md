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