const path = require('path');

// const cssLoaderWithModules = {
//   loader: "css-loader",
//   options: {
//     modules: true,
//   }
// }

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd",
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', 
          "css-loader", 
          "sass-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  }
}