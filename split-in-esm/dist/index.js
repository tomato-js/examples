function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var get_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获取dom节点
 *
 *
 * 结构举例
 * ```html
 *   <div id="abc">123</div>
 *   <div class="j-abc">123</div>
 * ```
 *
 * 脚本举例
 * ```javascript
 *   import { get } from '@tomato-js/element'
 *   const node = get('abc');
 *   const node2 = get('.j-abc');
 * ```
 *
 * @param str - id或者是提供给query的字符串
 * @returns 获取到的dom节点
 */
function get(str) {
    var node = document.getElementById(str);
    if (node === null) {
        node = document.querySelector(str);
    }
    return node;
}
exports.default = get;
});

unwrapExports(get_1);

var lib = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.get = get_1.default;
});

var element = unwrapExports(lib);
var lib_1 = lib.get;

var judge = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 判断是否有该全局变量
 *
 *
 * 脚本举例
 * ```javascript
 *   import { isExist } from '@tomato-js/env'
 *   const isGlobalExist = isExist('Cache');//true
 * ```
 *
 * @param apiName - api的名称
 * @returns 是否存在window上
 */
function isExist(apiName) {
    if (window[apiName] !== undefined) {
        return true;
    }
    else {
        return false;
    }
}
exports.isExist = isExist;
/**
 * 判断是否有存在URLSearchParams
 *
 * @returns 是否存在window上
 */
function isURLSearchParamsExist() {
    return isExist("URLSearchParams");
}
exports.isURLSearchParamsExist = isURLSearchParamsExist;
});

unwrapExports(judge);
var judge_1 = judge.isExist;
var judge_2 = judge.isURLSearchParamsExist;

var lib$1 = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(judge);
});

unwrapExports(lib$1);

var isEmpty = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 是否为空对象
 *
 * 脚本举例
 * ```
 *   import { isEmptyObject } from '@tomato-js/shared'
 *   const node = isEmptyObject({});//true
 * ```
 *
 * @param object - 需要判断的对象
 * @returns 是否为没有属性的空对象如{}
 */
function isEmptyObject(object) {
    return !Object.keys(object).length;
}
exports.isEmptyObject = isEmptyObject;
});

unwrapExports(isEmpty);
var isEmpty_1 = isEmpty.isEmptyObject;

var lib$2 = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(isEmpty);
});

unwrapExports(lib$2);

var parse_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


function getQueryString(str) {
    if (str === void 0) { str = window.location.search; }
    return str.substring(1);
}
function parseByURLSearchParams(queryString) {
    var urlSearchParams = new URLSearchParams(queryString);
    var parsedObj = {};
    parsedObj = parseBySplit(urlSearchParams.toString());
    return parsedObj;
}
function parseBySplit(queryString) {
    var parsedObj = {};
    var queryArr = queryString.split("&");
    queryArr.forEach(function (query) {
        if (query.includes("=")) {
            var tmp = query.split("=");
            parsedObj[tmp[0]] = tmp[1];
        }
    });
    return parsedObj;
}
/**
 * 解析search字符串
 *
 * 脚本举例
 * ```
 *   import { parse } from '@tomato-js/path';
 *   const queryObj = parse()//默认使用window.location.search;
 *   const queryObj2 = parse('?a=123&b=456)//{a:'123',b:'456'};
 *   const queryObj3 = parse('a=123&b=456)//{a:'123',b:'456'};
 * ```
 *
 * @param str - 待解析的字符串
 * @returns 解析完成的对象
 */
function parse(str) {
    var queryString = str.includes("?") ? getQueryString(str) : str;
    var parsedObj;
    if (lib$1.isURLSearchParamsExist()) {
        parsedObj = parseByURLSearchParams(queryString);
    }
    else {
        parsedObj = parseBySplit(queryString);
    }
    if (lib$2.isEmptyObject(parsedObj))
        return null;
    return parsedObj;
}
exports.default = parse;
});

unwrapExports(parse_1);

var lib$3 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.parse = parse_1.default;
});

unwrapExports(lib$3);
var lib_1$1 = lib$3.parse;

const classNode = element.get('.j-class');
const idNode = element.get('j-id');
const queryObje = lib_1$1('?a=123&b=456');
classNode.innerHTML = queryObje.a;
idNode.innerHTML = queryObje.b;
