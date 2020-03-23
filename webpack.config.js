// pathモジュールを読み込む
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
				// 結果をjs(またはjsx)ファイルを記法の変換の対象とする指定
				test: /\.jsx?$/,
				// babelによる、記法の変換の対象ファイルから除外する指定
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				// モジュール（css-loaderとstyle-loader)を適用するファイルを正規表現で指定(cssファイルを定義した)
				// useに指定したモジュールは、後に指定したモジュールから読み込まれる（順番に意味がある css -> style）
				// css-loaderにより、JSファイルにcssファイルをimportしてcssが使えるようになる
				// style-loaderにより、cssファイルのスタイルがhtmlファイルのheadタグのstyleタグに埋め込まれる
				// sass-loaderとnode-sassモジュールを適用する設定（useで指定するモジュールの順番が大切）
				// sass-loaderは、scssだけでなく、cssについて指定しても不具合はないので、scssとcssの指定をまとめることができる
				// min-css-extract-pluginプラグインのloaderプロパティを指定することで、scssファイルまたはcssファイルを生成するように設定する
				test: /\.(sc|c)ss$/,
				use: [MiniCssExtractPlugin.loader, /*'style-loader',*/ 'css-loader', 'sass-loader'],
			},
			{
				// 画像ファイルをJSファイルにインポートできるようになる
				// 正規表現のiは大文字も適用するという意味
				test: /\.(jpe?g|png|gif|svg|ico)$/i,
				loader: 'url-loader',
				// options属性を指定することにより、file-loaderが有効になる
				options: {
					// 個別ファイルを生成するためのバイト数の閾値を設定
					limit: 2048,
					// limitを超えるファイルは、name属性に指定した場所に、個別ファイルとして出力する
					// 個別ファイルとして出力することにより、css等で背景画像などとして参照するときに扱いやすくなる
					name: './images/[name].[ext]',
				},
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
		],
	},
	//ブラウザを起動したときに、最初に開く画面のパスを指定できる（localhostのトップレベルのディレクトリにできる）
	devServer: {
		contentBase: outputPath,
	},
	// プラグインを設定
	plugins: [
		new HtmlWebPackPlugin({
			// 変換するファイル名
			template: './src/index.html',
			// 出力結果のファイル名
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			// 生成するcssファイルの名前の設定
			// デフォルトでは、[name]はmainになる
			// [hash]は、キャッシュの影響でコードの変更が適用されない問題を解決するために、ビルドごとに文字列を変える
			filename: '[name].[hash].css',
		}),
	],
};
