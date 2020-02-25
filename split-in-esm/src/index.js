import element from "@tomato-js/element";
import { parse } from "@tomato-js/path";

const classNode = element.get(".j-class");
const idNode = element.get("j-id");
const queryObje = parse("?a=123&b=456");
classNode.innerHTML = queryObje.a;
idNode.innerHTML = queryObje.b;
