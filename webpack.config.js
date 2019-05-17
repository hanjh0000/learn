const path = require ("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
  entry:path.join(__dirname,"/src/index.js"),
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,"dist"),

  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:"vue-loader"

      },
      {
        test:/\.css$/,
        use:[
          'vue-style-loader',
          "css-loader"
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin()
  ],
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: 'localhost',
    port: 8080,
    open:true,
  }
}

