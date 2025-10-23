# AI Knowledge Hub

クライアント企業専用のAIナレッジ共有システム

## 概要

AI Knowledge Hubは、Difyを利用したクライアント企業専用のナレッジ共有システムです。AIチャットボットを通じて、業務手順、マニュアル、FAQなどの情報に素早くアクセスできます。

## 技術スタック

- **フレームワーク**: Next.js 15.5.4
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS 4
- **AI**: Dify API
- **UI**: React 19.1.0

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください:

```env
DIFY_API_KEY=your_dify_api_key_here
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 使い方

1. トップページから「チャットを開く」ボタンをクリック
2. チャット画面で質問を入力
3. AIが即座に回答を生成

## プロジェクト構成

```
ai-knowledge-hub/
├── src/
│   └── app/
│       ├── api/
│       │   └── chat/
│       │       └── route.ts      # Dify API エンドポイント
│       ├── chat/
│       │   └── page.tsx          # チャット画面
│       ├── globals.css           # グローバルスタイル
│       ├── layout.tsx            # ルートレイアウト
│       └── page.tsx              # トップページ
├── public/                       # 静的ファイル
├── .env.local                    # 環境変数（要設定）
├── package.json
├── tsconfig.json
└── README.md
```

## ビルド

```bash
npm run build
```

## 本番環境での実行

```bash
npm start
```

## 注意事項

- `.env.local` ファイルは Git にコミットしないでください
- Dify API キーは安全に管理してください
- 本番環境では適切なセキュリティ設定を行ってください

## ライセンス

Private - クライアント企業専用
