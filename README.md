# Fictitious Celebrity Website

架空の芸能人の Web サイト

- Demo: [https://demo-fictitious-celebrity-website.vercel.app](https://demo-fictitious-celebrity-website.vercel.app)

<br/>

<!-- prettier-ignore -->
| 画面イメージ |
| --------- |
| <img width="500" alt="top-page" src="https://github.com/strwalk/demo-fictitious-celebrity-website/assets/61673527/bf329fe8-579d-4d7f-969a-5ed88d89d194"> |

## Getting Started

1. GitHub リポジトリのクローン

   ```sh
   git clone git@github.com:strwalk/demo-fictitious-celebrity-website.git
   ```

2. プロジェクト内への移動

   ```sh
   cd demo-fictitious-celebrity-website
   ```

3. 依存関係のインストール

   ```sh
   yarn install
   ```

4. Hygraph の設定

- [Hygraph](https://hygraph.com/)にログイン／サインアップし、新規プロジェクトを作成
- 作成したプロジェクトを選択
- Models の作成

  - Scheme > 「+Add」ボタンをクリックし、下記の設定で各種作成

    | Model 名 | Display name | API ID  | Plural API ID |
    | -------- | ------------ | ------- | ------------- |
    | Blog     | Blog         | Blog    | Blogs         |
    | News     | News         | News    | NewsList      |
    | Profile  | Profile      | Profile | Profiles      |

- Fields の作成

  - Scheme > Models > 該当の Model を選択 > Add Fields から各種作成

    | Model 名 | Fields           | Display name | API ID      | Make field required にチェック | Allow multiple values にチェック |
    | -------- | ---------------- | ------------ | ----------- | ------------------------------ | ------------------------------ |
    | Blog     | Single Line Text | Title        | title       | あり                           |                                |
    |          | Asset picker     | Thumbnail    | thumbnail   |                                |                                |
    |          | Rich text        | Contents     | contents    | あり                           |                                |
    | News     | Single Line Text | Title        | title       | あり                           |                                |
    |          | Multi line text  | Contents     | contents    |                                |                                |
    | Profile  | Single Line Text | information  | information | あり                           | あり                           |
    |          | Single Line Text | Histories    | histories   | あり                           | あり                           |

- Assets の作成
  - Assets > Asset > 「+ Add entry」をクリック
  - 任意の画像をアップロード
- Contents の作成
  - Blog
    - Contents > Blog + 「+ Add entry」をクリック
    - Title、Thumbnail、Contents を任意の内容で入力
    - 「Save」ボタンをクリック
    - 任意の回数繰り返す
  - News、Profile でも、同様の操作を行う
- Permanent Auth Tokens の作成

  - Project Settings > Settings > Access > API Access > Permanent Auth Tokens > 「+ Add token」をクリック
  - 任意の名前で Token name を設定
  - Content API > 「+ Add permission」をクリック
  - 下記の設定で各種作成

    | Model   | Rules |
    | ------- | ----- |
    | Blog    | Read  |
    | News    | Read  |
    | Profile | Read  |
    | Asset   | Read  |

5. `.env`ファイルの設定

- プロジェクト直下に`.env.local`を作成

  ```sh
  touch .env.local
  ```

- `.env`に下記を追加

  ```sh
  HYGRAPH_ENDPOINT=XXXXX
  PERMANENT_AUTH_TOKEN=XXXXX
  ASSET_HOSTNAME=XXXXX
  ```

  - `HYGRAPH_ENDPOINT`の値は、Hygraph の管理画面から、プロジェクト選択 > Project settings > Settings > Access > API Access > Endpoints > Content API で取得可能
  - `PERMANENT_AUTH_TOKEN`の値は、Hygraph の管理画面から、プロジェクト選択 > Project settings > Settings > Access > API Access > Permanent Auth Tokens > EXISTING TOKENS > Value をクリックで取得可能
  - `ASSET_HOSTNAME`の値は、Hygraph を使用する場合は、`media.graphassets.com`を指定
    - 外部ドメインの画像を使用するための設定

6. プロジェクトの起動

   ```sh
   yarn dev
   ```

7. ブラウザで確認

- [http://localhost:3000](http://localhost:3000) を開く

## Built With

- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [React](https://react.dev/) - The library for web and native user interfaces
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types
- [Node.js](https://nodejs.org/en) - Node.js® is an open-source, cross-platform JavaScript runtime environment
- [tailwindcss](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML
- [Next UI](https://nextui.org/) - Beautiful, fast and modern React UI library
- [Hygraph](https://hygraph.com/) - Hygraph is the next generation GraphQL-Native Federated Content Platform. Integrate all your services with our unique content federation approach and deliver to any destination of choice using our content APIs
- [Vercel](https://vercel.com/) - Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web

## Author

strwalk - https://github.com/strwalk
