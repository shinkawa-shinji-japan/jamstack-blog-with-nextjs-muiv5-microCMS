# Next.js と microCMS の Jamstack ブログ

microCMS と Next.js を使い Jamstack なブログを作成するためのフロントエンドのソースコードになります。バックエンドは microCMS でご自身で構築さい。

## 完成サイト

[サンプル - Sample](https://works.paths-are.com/jamstackblog-with-next-muiv5-microcms/)

## 完成イメージ

![image](https://user-images.githubusercontent.com/70325458/131208090-2aff9b74-32f2-4669-9a74-52bd2d727448.png)

## 技術スタック

フロント：Next.js  
UI ライブラリー：Material-UI v5  
バックエンド：microCMS

## インストール

```shell
git clone https://github.com/WSE-Developer3/jamstack-blog-with-nextjs-muiv5-microCMS.git
cd jamstack-blog-with-nextjs-muiv5-microCMS
cp .env.sample .env # envファイルにご自身のmicroCMSのAPIキーとサービスIDをご記入下さい。
npm install
npm run dev
```

## microCMS の構築

下記記事をご参考ください。

## 本番環境へのデプロイ手順

```
npm run export
```

・静的ファイル配信ホスティングサービスをご利用の場合は
out ディレクトリのファイルを本番環境にアップロード
・node.js が入っているサーバーを契約している場合は
各公式サイトを基にデプロイ
