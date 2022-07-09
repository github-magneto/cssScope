const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../build')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-transform-runtime']
            }
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: (resourcePath) => 'local',
                auto: (resourcePath) => resourcePath.endsWith('.less'),
                localIdentName: "[path][name]/[local]/[hash:base64:5]",
              },
            }
          },
          {
            loader: 'less-loader'
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },

          // https://webpack.docschina.org/loaders/css-loader/#modules
          // https://github.com/webpack-contrib/css-loader#auto
          {
            loader: 'css-loader',
            options: {
              // modules: true,

              modules: {
                mode: (resourcePath) => 'local',
                auto: (resourcePath) => resourcePath.endsWith('.css'),
                localIdentName: "[path][name]/[local]/[hash:base64:5]",

                // localIdentContext: path.resolve(__dirname, "src"),
                // localIdentHashSalt: "my-custom-hash",
                // namedExport: true,
                // exportLocalsConvention: "camelCase",
                // exportOnlyLocals: false,
                // exportGlobals: true,
              },
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ['file-loader']
      },
    ]
  }
}