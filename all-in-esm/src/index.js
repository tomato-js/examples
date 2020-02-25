import { element, path } from '@tomato-js/entry';

const classNode = element.get('.j-class');
const idNode = element.get('j-id');
const queryObje = path.parse('?a=123&b=456');
classNode.innerHTML = queryObje.a;
idNode.innerHTML = queryObje.b;