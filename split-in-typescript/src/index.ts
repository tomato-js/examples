import { get } from  '@tomato-js/element';
import { parse } from  '@tomato-js/path';

const classNode = get('.j-class');
const idNode = get('j-id');
const queryObje = parse('?a=123&b=456');
classNode.innerHTML = queryObje.a;
idNode.innerHTML = queryObje.b;