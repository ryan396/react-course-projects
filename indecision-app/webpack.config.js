const path = require("path");
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            // only when files meet the criteria below! Run babel through ANY JS file.
            test: /\.js$/,
            // excludes anything in the node_modules folder.
            exclude: /node_modules/
        }]
    }
};

