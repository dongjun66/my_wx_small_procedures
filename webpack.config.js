const path = require('path');

module.exports = {
  entry: './pages/index/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};