import _ from 'lodash';

const component = () => {
	const element = document.createElement('div');
	// lodashの機能を反映させる(lodashのオブジェクトは _ に格納されている)
	const array = ['Hello', 'webpack'];
	// これにより、divタグの中身が"Hello webpack"という内容になる
	element.innerHTML = _.join(array, ' ');
	return element;
};

// bodyタグの中に、component()の返り値のdivタグを埋め込む
document.body.appendChild(component());
