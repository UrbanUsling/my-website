const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/home.tsx',
  output: {
    filename: 'bundle.js',
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
        }
    ]

},
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'static'), // Specify your public directory
      },
    compress: true,
    port: 8080, // adjust the port number as needed
    proxy: {
        '/': 'http://localhost:5000', // Adjust the URL based on your Flask server's address
        '/confirmation': 'http://localhost:5000', // Adjust the URL based on your Flask server's address
    },

  },
};
