module.exports = {
  /**
   * webpackカスタマイズ
   * ・mdファイルを読み込み可能にする
   */
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md/,
      loader: "raw-loader",
      exclude: /(node_modules)/,
    });
    return config;
  },

  /**
   * trailingSlashをtrueにすることで、静的ファイルでの出力が可能になる
   * 例）./sample → ./sample/
   */
  trailingSlash: true,
  basePath: "/jamstackblog-with-next-muiv5-microcms",
};
