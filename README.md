# ReactJSStarter
Basic scaffolding steps using webpack


  __npm init
  
- In package.json add under scripts
	__"start" : "lite-server",
	__"build" : "webpack --watch"

 - Install lite-server
 __npm install lite-server --save-dev
 
 - create index.html in src directory with below code
	
```
<html>
<body>
    <h1>Using React</h1>
    <div id="contents">---</div>
</body>
<script src="start.bundle.js"></script>
</html>

- create file bs-config.js under the main project at level of package.json file
	bs-config.js
module.exports = {
    "server": {"baseDir": "./public"}
}
```
__npm install webpack webpack-cli --save-dev
npm install copy-webpack-plugin --save-dev
npm install source-map-loader --save-dev
npm install react react-dom --save

- For jsx to work install below:
**npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

- Also create file babel.config.json with below code
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

- ensure babel-loader is used in webpack.config.js as updated below


- create webpack.config.js at the level of package.json level
```
let webpack = require('webpack');
let path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');

let context = path.join(process.cwd(), 'src');

let plugins = [
        new CopyWebpackPlugin({patterns: [
            { from: 'index.html' },
        ]})
    ];

let entry = {
  'start': './start.js'
};

let output = {
  path: path.resolve(process.cwd(), 'public'),
  filename: '[name].bundle.js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[id].chunk.js'
};                

let resolve = {
  modules: [
    'node_modules',
    path.resolve(process.cwd(), 'src')
  ],
  extensions: ['.js', '.json']
};
  
let rules = [
  {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
  {
    test: /\.html$/,
    use: 'html-loader?attrs=false&caseSensitive&removeAttributeQuotes=false'
  }
]

module.exports = {
  mode: 'development',
  context: context,       
  plugins: plugins,
  resolve: resolve,
  entry: entry,
  output: output,
  devtool: 'source-map',
  module: { rules: rules },
};
```



create start.js under src
```
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render('hi', document.getElementById('contents'));
```
Build
__npm run build

start lite server
__npm start    

	
