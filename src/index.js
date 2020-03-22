import _ from 'lodash';
// JSファイル以外は拡張子が必要
// スタイルシートの取り込みは、「import cssファイル」の形式でよい
import './style.css';

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
//
document.body.classList.add('haikei');
