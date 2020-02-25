const tomato = require('@tomato-js/entry');

const classNode = tomato.element.get('.j-class');
const idNode = tomato.element.get('j-id');
const queryObje = tomato.path.parse('?a=123&b=456');
classNode.innerHTML = queryObje.a;
idNode.innerHTML = queryObje.b;