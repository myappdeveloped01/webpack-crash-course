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
	module: {
		rules: [
			{
				// モジュール（css-loaderとstyle-loader)を適用するファイルを正規表現で指定(cssファイルを定義した)
				// useに指定したモジュールは、後に指定したモジュールから読み込まれる（順番に意味がある css -> style）
				// css-loaderにより、JSファイルにcssファイルをimportしてcssが使えるようになる
				// style-loaderにより、cssファイルのスタイルがhtmlファイルのheadタグのstyleタグに埋め込まれる
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				// 画像ファイルをJSファイルにインポートできるようになる
				// 正規表現のiは大文字も適用するという意味
				test: /\.(jpe?g|png|gif|svg|ico)$/i,
				loader: 'url-loader',
				// options属性を指定することにより、file-loaderが有効になる
				options: {
					// バイト数の上限を設定
					limit: 2048,
					// limitを超えるファイルは、name属性に指定した場所に、個別ファイルとして出力する
					// 個別ファイルとして出力することにより、css等で背景画像などとして参照するときに扱いやすくなる
					name: './images/[name].[ext]',
				},
			},
		],
	},
	//ブラウザを起動したときに、最初に開く画面のパスを指定できる（localhostのトップレベルのディレクトリにできる）
	devServer: {
		contentBase: outputPath,
	},
};
