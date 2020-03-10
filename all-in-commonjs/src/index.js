const tomato = require('@tomato-js/entry');

const classNode = tomato.element.get('.j-class');
const idNode = tomato.element.get('j-id');
const queryObje = tomato.path.parse('?a=123&b=456');
classNode.innerHTML = queryObje.a;
idNode.innerHTML = queryObje.b;

const arr = [1,2,3,3,5];
const randomArr = tomato.array.filterNonUnique(arr);
console.warn(randomArr)