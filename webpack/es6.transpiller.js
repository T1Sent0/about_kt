module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.js/,
                    exclude: /(node_modules|.git|.idea)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                }
            ]
        }
    }
};