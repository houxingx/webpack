const {resolve}=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')
const ExtractTextPlugin=require("extract-text-webpack-plugin");

module.exports={
//  入口
  entry:'./src/js/app.js',
//  输出
  output:{
    path:resolve(__dirname,'build'),
    filename:'./js/built.js'
  },
//  loader
  module:{
    rules:[   //配置规则
      {
        test:/\.less$/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:["css-loader","less-loader"]
        })
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[
          {
          loader:'url-loader',
            options:{
            limit:8192,
              outputPath:'images',
              publicPath:'../images'
            }
        }
        ]
      }
    ]
  },
//  插件
  plugin:[
    new ExtractTextPlugin("./css/style.css"),
  ]
}