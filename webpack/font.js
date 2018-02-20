module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]",
                    },
                },
            ]
        }
    }
};