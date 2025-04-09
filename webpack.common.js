module.exports = {
  entry: {
    main: "./src/index.js",
    // vendor: "./src/vendor.js"
  },
  resolve: {
    extensions: ['.ts', '.js'], // 👈 allows imports without extensions
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [["@babel/env", {
              targets: {
                browsers: ['> 0.2% and not dead'], // for configuring see browserlist docs
              },
              modules: false, // should leave it for tree shaking work (leaves es6 modules)
              useBuiltIns: "usage",
              corejs: "3.41",
            }]]
          }
        }
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  }
};
