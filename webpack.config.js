// pathモジュールを読み込む
const path = require('path');

//resolveは絶対パスに変換するメソッド
// （第一引数は現在のディレクトリ名が格納された変数__dirnameをおき、第二引数に指定したディレクトリのパスを探索した結果を返り値とする）
const outputPath = path.resolve(__dirname, 'dist');
// webpackのモジュールを外部で使えるようにするための設定（exportすればよい）
module.exports = {
	// entryは、webpackのエントリーポイント（モジュールバンドルの対象）の指定する
	entry: './src/index.js',
	// outputは、バンドルの出力結果の情報を指定する
	// filename属性はバンドルの出力結果が格納されるファイル名を指定する。path属性は、バンドル結果の出力先の指定する
	output: {
		filename: 'main.js',
		path: outputPath,
	},
};
