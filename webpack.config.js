const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    
    script: "./src/index.tsx",
    
},
  output: {
    filename: '[name].js',
    publicPath: "/static/js/", 
    //path: path.resolve(__dirname, 'public')//current and absolute path joined together
    path: path.resolve(__dirname, 'static', 'js'),
  },
  module: {
    rules:[
        {
            test: /\.(ts|tsx)$/,//test: /\.ts$/,la till ändring från maker
            use: 'ts-loader',
            exclude: /node_modules/,
            include: [path.resolve(__dirname, 'src')]//absolute. only files from this folder
        },
        {
          test: /\.css$/,
          exclude: /\.tsx?$/,
          use: ['style-loader', 'css-loader'],
        }
    ]

},
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'static'),
    },
    compress: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:5000', // Adjust the URL based on your Flask server's address
    },
  },
};
