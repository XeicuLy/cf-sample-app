# プロジェクト基本情報

このプロジェクトはフロントエンドはTanStack Start, バックエンドはHonoを使用しているmonorepo構成のアプリケーションです。
それぞれをCloudflare Workers上で動作させています。

# 共通コマンド

- `pnpm lint:fix`: プロジェクトのコードスタイルを自動修正
- `pnpm type-check`: TypeScriptの型チェックを実行

# 開発スタイル

- TypeScriptを使用
- 関数型プログラミングを推奨
- 初学者にも理解しやすいコードを心がける
- コメントを適切に追加し、コードの意図を明確にする

# コーディング規約

- any型の使用は禁止
- 関数はアロー関数を優先
- exportはnamed exportを使用
- async/awaitを使用(Promiseチェーンは避ける)

# ワークフロー

- 変更完了後は必ず`pnpm lint:fix`と`pnpm type-check`を実行し、コードスタイルと型チェックを確認すること
