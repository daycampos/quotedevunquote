const webpack = require('webpack');
const path = require('path');
const parentDir = path.join(__dirname, '../');

module.exports = {
    entry:[
        path.join(parentDir, 'index.js')
    ],
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:'babel-loader',
        }]
    },
    output:{
        path:parentDir + '/dist',
        filename:'bundle.js'
    },
    devServer:{
        contentBase:parentDir,
    }
}