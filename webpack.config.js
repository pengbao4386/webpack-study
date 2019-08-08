const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: { //出口配置
        //入口chunk文件名称 hash chunkhash contenthash
        filename: '[name].[contenthash:7].js',
        //非入口chunk文件（比如动态加载的文件）名称
        chunkFilename: '[id].[chunkhash:7].js',
        //输出文件夹
        path: path.resolve(__dirname,'dist')
    },
    //设置环境 development / production
    mode:'production'
};