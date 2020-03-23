import _ from 'lodash';
// JSファイル以外は拡張子が必要
// スタイルシートの取り込みは、「import cssファイル」の形式でよい
import './style.css';
import star from './star1.png';

const component = () => {
	const element = document.createElement('div');
	// lodashの機能を反映させる(lodashのオブジェクトは _ に格納されている)
	const array = ['Hello', 'webpack', '!!!!'];
	// これにより、divタグの中身が"Hello webpack"という内容になる
	element.innerHTML = _.join(array, ' ');
	return element;
};

// bodyタグの中に、component()の返り値のdivタグを埋め込む
document.body.appendChild(component());
// bodyタグのclass属性にhaikeiを指定
document.body.classList.add('haikei');

// bodyタグにimageタグ（src属性に画像のURLを指定）を埋め込む
const image = new Image();
image.src = star;
document.body.appendChild(image);
