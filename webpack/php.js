module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(php)$/,
                    loader: [
                        'html-minify',
                        'php-loader',
                    ]
                }
            ]
        }
    }
};