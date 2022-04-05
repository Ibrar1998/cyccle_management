const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/App.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
          
        ]
        
    },
    resolve: {
        alias: {
          "@material-ui/styles": require.resolve("@material-ui/styles")
        }
      },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
    