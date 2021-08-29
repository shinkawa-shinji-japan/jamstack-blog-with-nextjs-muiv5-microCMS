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

  /**
   * ドメイン直下ではなく、下記のパスに配置する
   * ドメイン直下に配置したい場合は、basePathはコメントアウトしてつかって下さい。
   * 例）
   * https:my-domain-name.com/ → ×
   * https:my-domain-name.com/jamstackblog-with-next-muiv5-microcms → 〇
   */
  basePath: "/jamstackblog-with-next-muiv5-microcms",
};
