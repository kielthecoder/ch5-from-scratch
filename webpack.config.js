const path = require('path');
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ConcatPlugin = require('webpack-concat-files-plugin');

const CrComLibLibrary = glob.sync('./node_modules/@crestron/ch5-crcomlib/build_bundles/umd/cr-com-lib.js');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My CH5 Project',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new ConcatPlugin({
            bundles: [
                {
                    src: CrComLibLibrary,
                    dest: './dist/cr-com-lib.js'
                }
            ],
            allowOptimization: true
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
}
