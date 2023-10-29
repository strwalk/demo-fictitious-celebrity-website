# Fictitious Celebrity Website

架空の芸能人の Web サイト（デモページ）
<br/>

| 画面イメージ  |
|  ---------  |
| <img width="600" alt="top-page" src="https://github.com/strwalk/demo-fictitious-celebrity-website/assets/61673527/aafb6aec-52b8-445e-b2d3-24a58705c12d"> |

## Getting Started

1. GitHub リポジトリのクローン

   ```sh
   # HTTPSの場合
   git clone https://github.com/strwalk/demo-fictitious-celebrity-website.git

   # SSHの場合
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

- Hygraph にログイン／サインアップし、新規プロジェクトを作成
- 作成したプロジェクトを選択

<details>
<summary>Models の作成</summary>

  - Scheme > 「+Add」ボタンをクリックし、下記の設定で各種作成
  - Blog
    - Display name: `Blog`
    - API ID: `Blog`
    - Plural API ID: `Blogs`
  - News
    - Display name: `News`
    - API ID: `News`
    - Plural API ID: `NewsList`
  - Profile
    - Display name: `Profile`
    - API ID: `Profile`
    - Plural API ID: `Profiles`
</details>
<details>
<summary>Fields の作成</summary>

  - 下記の設定で各種作成
  - Blog
    - Scheme > Blog を選択
    - Title
      - Add Fields > Single Line Text を選択
        - SETTINGS を開く
          - Display name: `Title`
          - API ID: `title`
        - VALIDATIONS を開く
          - Make field required にチェックを入れる
    - Thumbnail（操作は上記と同様。以下、設定内容のみ記載）
      - Asset picker
      - Display name: `Thumbnail`
      - API ID: `thumbnail`
    - Contents
      - Rich text
      - Display name: `Contents`
      - API ID: `contents`
      - Make field required にチェック
  - News
    - Scheme > News を選択
    - Title
      - Single Line Text
      - Display name: `Title`
      - API ID: `title`
      - Make field required にチェック
    - Contents
      - Multi line text
      - Display name: `Contents`
      - API ID: `contents`
  - Profile
    - information
      - Single line text
      - Display name: `information`
      - API ID: `information`
      - Allow multiple values にチェック
      - Make field required にチェック
    - Histories
      - Single line text
      - Display name: `Histories`
      - API ID: `histories`
      - Allow multiple values にチェック
      - Make field required にチェック

</details>
<details>
<summary>Assets の作成</summary>

  - Assets > Asset > 「+ Add entry」をクリック
  - 任意の画像をアップロード
</details>
<details>
<summary>Contents の作成</summary>

  - Blog
    - Contents > Blog + 「+ Add entry」をクリック
    - Title、Thumbnail、Contents を任意の内容で入力
    - 「Save」ボタンをクリック
    - 任意の回数繰り返す
  - News、Profile でも、同様の操作を行う
</details>
<details>
<summary>Permanent Auth Tokens の作成</summary>

  - Project Settings > Settings > Access > API Access > Permanent Auth Tokens > 「+ Add token」をクリック
  - 任意の名前で Token name を設定
  - Content API > 「+ Add permission」をクリック
    - Model: Asset、Rules: Read を設定
    - Model: Blog、Rules: Read を設定
    - Model: News、Rules: Read を設定
    - Model: Profile、Rules: Read を設定
</details>

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
  - `PERMANENT_AUTH_TOKEN`の値は、Project settings > Settings > Access > API Access > Permanent Auth Tokens > EXISTING TOKENS > Value をクリックで取得可能
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
