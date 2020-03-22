import _ from 'lodash';
// import { NiJou, NAME } from './utilities';
// import * as utilities from './utilities';
// import { NiJou, NAME as NAME_HAM } from './utilities';
// export defaultで指定したメソッドや変数は、オブジェクトでない形で直接取得できる
import NiJou, { NAME } from './utilities';

console.log(NiJou(3));
console.log(NAME);
// console.log(NAME_HAM);
// console.log(utilities.NiJou(4));
// console.log(utilities.NAME);

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
