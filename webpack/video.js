module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(mov|mp4)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        }
    }
};