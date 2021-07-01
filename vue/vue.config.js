const path = require("path");

module.exports = {
    outputDir: path.resolve('../laravel/public'),
    assetsDir: './dist',
    indexPath: path.resolve('../laravel/resources/views/index.html'),
    devServer: {
        proxy: 'http://localhost:8000',
    },
}