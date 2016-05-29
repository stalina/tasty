module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
             {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    externals: {
        'child_process': 'child_process'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }, 
    output: {
        filename: 'app.js',
      }
}