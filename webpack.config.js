const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js', 
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'dist'), 
        clean: true, 
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env'], 
                    },
                },
            },
            {
                test: /\.html$/, 
                use: [
                    {
                        loader: 'html-loader', 
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader', 
                ],
            },
            {
                test: /\.css$/, // Добавлено правило для CSS
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', 
            inject: true, 
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), 
        },
        hot: true, 
        open: true, 
        watchFiles: ['src/**/*'],
    },
    resolve: {
        extensions: ['.js'], 
    },
};
