<a href="https://nextjs-nextauth-app.vercel.app/">
  <h1 align="center">nextjs-nextauth-app</h1>
</a>

<p align="center">
  Next.js + NextAuth.js project starter kit
</p>

<p align="center">
  <a href="https://twitter.com/Msk_init">
    <img src="https://img.shields.io/twitter/follow/:Msk_init" alt="Msk_init Twitter follow" />
  </a>
  <a href="https://github.com/MSK1206/nextjs-nextauth-app">
    <img src="https://img.shields.io/github/stars/MSK1206/nextjs-nextauth-app?label=MSK1206%2Fnextjs-nextauth-app" alt="nextjs-nextauth-app repo star count" />
  </a>
</p>

## 概要

nextjs-nextauth-app は、Next.js を使用した認証付きのウェブアプリケーションのベースとして構築されたプロジェクトです。このプロジェクトでは、NextAuth を使用して簡単に認証を統合できます。

## Features

This project uses several key packages and libraries. Here's a detailed overview of each:

- #### **Next.js（公式リンク： [Next.js](https://nextjs.org/)**： 
> Next.jsは、Webアプリケーションを構築するための人気のReactフレームワークです。サーバーサイド・レンダリング、ルーティング、その他の機能を備えています。

- #### **NextAuth（公式リンク： [NextAuth.js](https://next-auth.js.org/)**： 
> NextAuthは、Next.jsアプリケーションのための認証ライブラリです。認証プロバイダの統合を簡略化し、柔軟な認証システムを提供します。
>
> NextAuthの主な特徴は以下のとおりです：
>
> - **マルチプロバイダ対応**： Google、GitHub、Facebookなど、さまざまな認証プロバイダを統合できます。アプリケーションごとに異なる認証オプションを簡単に設定できます。
>
> - **セッション管理**： NextAuthにはセッション管理が組み込まれており、アプリケーションのユーザーセッションや認証状態を簡単に管理できます。
>
> - **カスタム認証**： NextAuthでは、カスタム認証のフローや動作を定義することができます。アプリケーション固有のニーズに合わせて、ユーザー認証と認可の仕組みをカスタマイズできます。
>
> - **Secure by default**： クロスサイトリクエストフォージェリ（CSRF）やクロスサイトスクリプティング（XSS）などの一般的なセキュリティ問題を防ぐなど、セキュリティのベストプラクティスに従っています。
>
> - **JWT (JSON Web Tokens) サポート**： NextAuth は、セキュアな認証と認可のために JSON Web トークンをサポートしています。
>
> - **認証コールバック**： 認証コールバックを定義して、認証プロセスの動作を制御することができます。たとえば、サインイン成功後のリダイレクト動作をカスタマイズできます。

- #### **@heroicons/react (公式リンク： [Heroicons](https://heroicons.com/))**： 
> Heroiconsは、Webプロジェクトで使用できる、フリーでMITライセンスの高品質なSVGアイコンのセットです。heroicons/react`パッケージを使用すると、Reactアプリケーションでこれらのアイコンを簡単に使用できます。

- #### **classnames（公式リンク： [classnames](https://www.npmjs.com/package/classnames))**： 
> classnames` ライブラリは、クラス名を条件付きで結合するためのシンプルなユーティリティを提供します。Reactコンポーネントのクラスを動的に追加または削除するためによく使用されます。

- #### **tailwindcss (公式リンク： [Tailwind CSS](https://tailwindcss.com/))**： 
> Tailwind CSSはユーティリティファーストのCSSフレームワークで、クラスを組み合わせることでユーザーインターフェイスを素早く構築できます。カスタマイズ性が高く、迅速な開発に最適です。

- #### **daisyui（公式リンク： [DaisyUI](https://daisyui.com/))**： 
> DaisyUIは、Tailwind CSSのためのUIコンポーネントライブラリです。美しくカスタマイズ可能なコンポーネントのセットを追加し、プロジェクトのデザインを強化します。

- #### **prettier（公式リンク： [Prettier](https://prettier.io/))**： 
> Prettierは、一貫したスタイルになるようにコードを自動的に整形する、意見を反映したコード整形ツールです。きれいで一貫性のあるコードベースを維持するためによく使われます。


## File Composition

このプロジェクトは以下の重要なファイルとディレクトリで構成されています。

- `package.json`: プロジェクトの依存関係とスクリプトが設定されたファイル。
- `tailwind.config.ts`: Tailwind CSS の設定ファイル。
- `[...nextauth].ts`: NextAuth の設定ファイル。
- `ProviderWrap.tsx`: ユーザーセッションプロバイダを設定するコンポーネント。
- `layout.tsx`: レイアウトコンポーネントを定義するファイル。
- `Form.tsx`: ユーザー情報を表示するフォームコンポーネント。
- `SignIn.tsx`: サインインページのコンポーネント。
- `page.tsx`: メインホームページのコンポーネント。
- `Protect.tsx`: 認証後にアクセスできるページのコンポーネント。
- `middleware.ts`: 認証関連のミドルウェアと設定を含むファイル。




## インストールと実行

このプロジェクトを実行するには、以下の手順に従ってください。

1. プロジェクトをクローンまたはダウンロードして、プロジェクトディレクトリに移動します。

   ```
   git clone https://github.com/MSK1206/nextjs-nextauth-app 
   ```

2. プロジェクトディレクトリで以下のコマンドを実行して、依存関係をインストールします。

   ```
   npm install
   ```

3. プロジェクトディレクトリで以下のコマンドを使用して、開発サーバーを起動します。

   ```
   npm run dev
   ```

4. ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスして、プロジェクトを確認します。



## ライセンス

MITライセンスのもとで公開されています。詳細については [LICENSE](https://github.com/MSK1206/nextjs-nextauth-app/blob/master/LICENSE) ファイルを参照してください。

---
