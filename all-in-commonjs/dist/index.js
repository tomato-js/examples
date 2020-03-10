(function () {
    'use strict';

    /**
     * @packageDocumentation
     * @module @tomato-js/array
     */
    /**
     * 判断数组内容是否一致
     *
     * 脚本举例
     * ```
     *   import { allEqual } from '@tomato-js/array'
     *   allEqual([3,3,3]);//true
     * ```
     *
     * @param arr - 需要判断的数组
     * @returns 是否内容一致
     */
    function allEqual(arr) {
        return arr.every(function (val) { return val === arr[0]; });
    }

    /**
     * @packageDocumentation
     * @module @tomato-js/array
     */
    /**
     * 统计数组中某个值出现的次数
     *
     * 脚本举例
     * ```
     *   import { countOccurrences } from '@tomato-js/array'
     *   countOccurrences([3,3,2],3);//2
     *   countOccurrences(['3',3,2],'3');//1
     * ```
     *
     * @param arr - 数组
     * @param val - 参考值
     * @returns 出现次数
     */
    function countOccurrences(arr, val) {
        return arr.reduce(function (a, v) { return (v === val ? a + 1 : a); }, 0);
    }

    /**
     * @packageDocumentation
     * @module @tomato-js/shared
     */
    var toString = Object.prototype.toString;
    function isType(value, type) {
        return toString.call(value) === "[object " + type + "]";
    }
    function isString(str) {
        return isType(str, "String");
    }
    function isNumber(str) {
        return isType(str, "Number");
    }
    function isArray(value) {
        return Array.isArray ? Array.isArray(value) : isType(value, "Array");
    }
    function isObject(value) {
        var type = typeof value;
        return (value !== null && type === "object") || type === "function";
    }
    /**
     * 是否是Null
     *
     * 脚本举例
     * ```
     *   import { isNull } from '@tomato-js/shared'
     *   const node = isNull(null);//true
     * ```
     *
     * @param val - 需要判断的值
     * @returns 是否为null
     */
    function isNull(val) {
        return val === null;
    }
    /**
     * 是否是undefined
     *
     * 脚本举例
     * ```
     *   import { isUndefined } from '@tomato-js/shared'
     *   const node = isNull(undefined);//true
     * ```
     *
     * @param val - 需要判断的值
     * @returns 是否为undefined
     */
    function isUndefined(val) {
        return val === undefined;
    }
    /**
     * 是否为 null 或 undefined 类型
     *
     * 脚本举例
     * ```
     *   import { isNil } from '@tomato-js/shared'
     *   const node = isNil(undefined);//true
     * ```
     *
     * @param val - 需要判断的值
     * @returns 是否为undefined或null
     */
    function isNil(val) {
        return isUndefined(val) || isNull(val);
    }

    /**
     * @packageDocumentation
     * @module @tomato-js/shared
     */
    function forEachArray(elements, func) {
        var rst;
        for (var i = 0, len = elements.length; i < len; i++) {
            rst = func(i, elements[i]);
            if (rst === false) {
                break;
            }
        }
    }
    function forEachObject(elements, func) {
        var rst;
        for (var k in elements) {
            if (elements.hasOwnProperty(k)) {
                rst = func(k, elements[k]);
                if (rst === false) {
                    break;
                }
            }
        }
    }
    /**
     * 遍历对象或数组
     *
     * 脚本举例
     * ```
     *   import { forEach } from '@tomato-js/shared'
     *   const obj = {
     *     a: 1,
     *     b: 2
     *   };
     *   const obj2 = {};
     *   const arr = [1,2,3,4,5];
     *   forEach(obj, (k, v) => (obj2[v] = k));
     *   forEach(obj, (k, v) => console.log(v));
     * ```
     *
     * @param elements - 需要遍历的值
     * @param func - 执行函数
     */
    function forEach(elements, func) {
        if (!elements) {
            return;
        }
        if (isArray(elements)) {
            forEachArray(elements, func);
        }
        else if (isObject(elements)) {
            forEachObject(elements, func);
        }
    }

    /**
     * @packageDocumentation
     * @module @tomato-js/shared
     */
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

    /**
     * @packageDocumentation
     * @module @tomato-js/shared
     */
    var noop = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };

    /**
     * @packageDocumentation
     * @module @tomato-js/shared
     */
    var blankReg = /[\s\r\n]+/gi;
    var asReg = /(.+)\sas\s(.+)/gi;



    var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        forEach: forEach,
        isEmptyObject: isEmptyObject,
        isType: isType,
        isString: isString,
        isNumber: isNumber,
        isArray: isArray,
        isObject: isObject,
        isNull: isNull,
        isUndefined: isUndefined,
        isNil: isNil,
        noop: noop,
        blankReg: blankReg,
        asReg: asReg
    });

    var __read = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread = (undefined && undefined.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    /**
     * 将多维数组展平成一维数组
     *
     * 脚本举例
     * ```
     *   import { deepFlatten } from '@tomato-js/array'
     *   deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
     * ```
     *
     * @param arr - 多维数组
     * @returns 扁平化后的一维数组
     */
    function deepFlatten(arr) {
        return [].concat.apply([], __spread(arr.map(function (v) { return (isArray(v) ? deepFlatten(v) : v); })));
    }

    var __read$1 = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread$1 = (undefined && undefined.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$1(arguments[i]));
        return ar;
    };
    /**
     * @packageDocumentation
     * @module @tomato-js/array
     */
    /**
     * 数组去重
     *
     * 脚本举例
     * ```
     *   import { filterNonUnique } from '@tomato-js/array'
     *   filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
     * ```
     *
     * @param arr - 数组
     * @returns 去重后的数组
     */
    function filterNonUnique(arr) {
        return __spread$1(new Set(arr));
    }



    var index$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        allEqual: allEqual,
        countOccurrences: countOccurrences,
        deepFlatten: deepFlatten,
        filterNonUnique: filterNonUnique
    });

    /**
     * @packageDocumentation
     * @module @tomato-js/element
     */
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
        if (!str) {
            return null;
        }
        if (!isString(str)) {
            return str;
        }
        var node = document.getElementById(str);
        if (node === null) {
            node = document.querySelector(str);
        }
        return node;
    }

    /**
     * @packageDocumentation
     * @module @tomato-js/element
     */
    var directHandler = {
        top: function (origin, target) {
            var firstChild = origin.firstChild;
            origin.insertBefore(target, firstChild);
        },
        bottom: function (origin, target) {
            origin.appendChild(target);
        },
        before: function (origin, target) {
            var parent = origin.parentNode;
            if (parent)
                parent.insertBefore(target, origin);
        },
        after: function (origin, target) {
            var parent = origin.parentNode;
            if (parent)
                parent.insertBefore(target, origin.nextSibling);
        }
    };
    function insert(origin, target, direct) {
        if (direct === void 0) { direct = "bottom"; }
        var originNode = isString(origin) ? get(origin) : origin;
        var targetNode = isString(target) ? get(target) : target;
        directHandler[direct](originNode, targetNode);
    }
    /**
     * 插入节点B到节点A内部的底部
     *
     * 脚本举例
     * ```
     *   import { append } from '@tomato-js/element'
     *   const dom = document.createElement('p');
     *   dom.innerHTML='it is p';
     *   append('abc',dom);
     * ```
     *
     * @param A - 节点A
     * @param B - 节点B
     */
    function append(A, B) {
        insert(A, B);
    }
    /**
     * 插入节点B到节点A内部的顶部
     *
     * 脚本举例
     * ```javascript
     *   import { prepend } from '@tomato-js/element'
     *   const dom = document.createElement('p');
     *   dom.innerHTML='it is p';
     *   append('abc',dom);
     * ```
     *
     * @param A - 节点A
     * @param B - 节点B
     */
    function prepend(A, B) {
        insert(A, B, "top");
    }
    /**
     * 插入节点B到节点A的上面
     *
     * 脚本举例
     * ```javascript
     *   import { insertBefore } from '@tomato-js/element'
     *   const dom = document.createElement('p');
     *   dom.innerHTML='it is p';
     *   append('abc',dom);
     * ```
     *
     * @param A - 节点A
     * @param B - 节点B
     */
    function insertBefore(A, B) {
        insert(A, B, "before");
    }
    /**
     * 插入节点B到节点A的下面
     *
     * 脚本举例
     * ```javascript
     *   import { insertBefore } from '@tomato-js/element'
     *   const dom = document.createElement('p');
     *   dom.innerHTML='it is p';
     *   append('abc',dom);
     * ```
     *
     * @param A - 节点A
     * @param B - 节点B
     */
    function insertAfter(A, B) {
        insert(A, B, "after");
    }

    /**
     * 创建dom节点
     *
     *
     * 脚本举例
     * ```javascript
     *   import { create } from '@tomato-js/element'
     *   // 创建一个div节点，挂到body上
     *   create("div");
     *   // 创建一个p节点，其id为id，挂到id是abc的节点上
     *   create("p","id","abc")
     * ```
     *
     * @param tagName - 创建节点的标签名称
     * @param idName - 创建节点的id
     * @param parent - 挂载的父节点，默认为document.body
     * @returns 创建的dom节点
     */
    function create(tagName, idName, parent) {
        var element = document.createElement(tagName);
        var TagMap = {
            a: { href: "#", hideFocus: !0 },
            style: { type: "text/css" },
            link: { type: "text/css", rel: "stylesheet" },
            iframe: { frameBorder: 0 },
            script: { defer: !0, type: "text/javascript" }
        };
        var config = TagMap[tagName.toLowerCase()];
        var createdElement = Object.assign(element, config);
        if (idName)
            createdElement.id = idName;
        if (!parent) {
            return createdElement;
        }
        var parentNode = get(parent);
        if (parentNode) {
            append(parentNode, createdElement);
        }
        else {
            append(document.body, createdElement);
        }
        return createdElement;
    }

    /**
     * @packageDocumentation
     * @module @tomato-js/element
     */
    /**
     * 增加一段样式到head底部
     *
     *
     * 脚本举例
     * ```
     *   import { addStyle } from '@tomato-js/element'
     *   // 创建一段样式到页面head
     *   addStyle('body{background:red;}');
     *   // 创建一段多行样式到页面head
     *   const cssStr = `body{background:red;}
     *      .class { color:red; }`;
     *   element.addStyle(cssStr);
     *
     * ```
     *
     * @param styleContent - 样式内容
     * @returns 创建的style节点
     */
    function addStyle(styleContent) {
        if (styleContent === void 0) { styleContent = ""; }
        var css = styleContent.replace(blankReg, "").trim();
        if (!css)
            return;
        var node = create("style");
        node.textContent = css;
        append(document.head, node);
        return node;
    }

    /**
     * @packageDocumentation
     * @module @tomato-js/element
     */
    /**
     * 判断页面是否滚动到底部
     *
     *
     * 脚本举例
     * ```
     *   import { bottomVisible } from '@tomato-js/element'
     *   bottomVisible();//true
     * ```
     *
     * @returns 是否滚动到底部
     */
    function bottomVisible() {
        return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
    }



    var index$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        addStyle: addStyle,
        bottomVisible: bottomVisible,
        create: create,
        get: get,
        append: append,
        prepend: prepend,
        insertAfter: insertAfter,
        insertBefore: insertBefore
    });

    /**
     * @packageDocumentation
     * @module @tomato-js/env
     */
    /**
     * 判断是否在浏览器环境
     *
     *
     * 脚本举例
     * ```javascript
     *   import { isBrowser } from '@tomato-js/env'
     *   isBrowser();//true
     * ```
     *
     * @returns 是否存在window上
     */
    var isBrowser = function () { return ![typeof window, typeof document].includes("undefined"); };

    /**
     * @packageDocumentation
     * @module @tomato-js/env
     */
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
    /**
     * 判断是否有存在URLSearchParams
     *
     * @returns 是否存在window上
     */
    function isURLSearchParamsExist() {
        return isExist("URLSearchParams");
    }



    var index$3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        isBrowser: isBrowser,
        isExist: isExist,
        isURLSearchParamsExist: isURLSearchParamsExist
    });

    /**
     * 求平均值
     *
     * 脚本举例
     * ```
     *   import { averageBy } from '@tomato-js/math'
     *   averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n);
     * ```
     *
     * @param nums - 一个个传入的值
     * @returns 平均值
     */
    function averageBy(arr, fn) {
        return arr.map(fn).reduce(function (acc, val) { return acc + val; }, 0) / arr.length;
    }

    /**
     * @packageDocumentation
     * @module @tomato-js/math
     */
    /**
     * 求平均值
     *
     * 脚本举例
     * ```
     *   import { average } from '@tomato-js/math'
     *   average(...[1,2,3]);//2
     *   average(1,2,3);//2
     * ```
     *
     * @param nums - 一个个传入的值
     * @returns 平均值
     */
    function average() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        return nums.reduce(function (acc, val) { return acc + val; }, 0) / nums.length;
    }



    var index$4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        averageBy: averageBy,
        average: average
    });

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    /**
     * 获取对象深层次内容
     *
     * 脚本举例
     * ```
     *   import { deepGet } from '@tomato-js/object'
     *   const obj = {a:{b:{c:'d'}},aa:'bb',e:'f'}
     *   const c = deepGet('a.b.c',obj);//'d'
     * ```
     *
     * @param path - 对象寻找路径如a.b.c
     * @param object - 需要解析的对象
     * @returns 找到的内容
     */
    function deepGet(path, object) {
        var index = path.indexOf(".");
        var k = path.slice(0, index);
        var rest = path.slice(index + 1);
        var firstObj = object[k];
        if (index === -1) {
            if (hasOwnProperty.call(object, path)) {
                return object[path];
            }
        }
        else {
            return deepGet(rest, firstObj);
        }
    }

    /**
     * @packageDocumentation
     * @module @tomato-js/object
     */
    function parseX(object, keys, options) {
        if (keys === void 0) { keys = []; }
        var result = {};
        var handler = options.handler;
        forEach(keys, function (index, key) {
            var aliasKey = key;
            var objectValue;
            var asMatched = key.match(asReg);
            // handle 'a as c'
            if (asMatched) {
                key = RegExp.$1; //a
                aliasKey = RegExp.$2; //c
            }
            objectValue = deepGet(key, object);
            if (objectValue) {
                result[aliasKey] = handler ? handler.call(object, aliasKey, objectValue) : objectValue;
            }
        });
        return result;
    }
    /**
     * 深度获取对象某些值及更换key名，组成新对象，pick的升级版
     *
     * 脚本举例
     * ```
     *   import { pickX } from '@tomato-js/object'
     *   const obj = {a:{b:{c:'d'}},aa:'bb',e:'f'}
     *   const obj1 = pick(obj,['a.b.c as g']);//{g:'d'}
     *   const obj2 = pick(obj,['aa as aaa','e as ee']);//{aaa:'bb',ee:'f'}
     *   const obj3 = pick(obj,['aa as aaa','e as ee'],(k,v)=>k==='ee'?v+1:v);//{aaa:'bb',ee:'f1'}
     * ```
     *
     * @param object - 需要解析的对象
     * @param keys - 需要获取的key
     * @param hanlder - 批量处理函数
     * @returns 组成的新对象
     */
    function pickX(object, keys, handler) {
        if (keys === void 0) { keys = []; }
        if (object === null) {
            return {};
        }
        return parseX(object, keys, {
            handler: handler
        });
    }

    var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
    /**
     * 获取对象某些值，组成新对象
     *
     * 脚本举例
     * ```
     *   import { pick } from '@tomato-js/object'
     *   const obj = {a:{b:{c:'d'}},aa:'bb',e:'f'}
     *   const obj1 = pick(obj,['aa']);//{aa:'bb'}
     *   const obj2 = pick(obj,['aa','e']);//{aa:'bb',e:'f'}
     *   const obj3 = pick(obj,['aa','e'],(k,v)=>k==='e'?v+1:v);//{aa:'bb',e:'f1'}
     * ```
     *
     * @param object - 需要解析的对象
     * @param keys - 需要获取的key
     * @param hanlder - 批量处理函数
     * @returns 组成的新对象
     */
    function pick(object, keys, handler) {
        if (keys === void 0) { keys = []; }
        if (object === null) {
            return {};
        }
        var result = {};
        forEach(keys, function (index, key) {
            if (hasOwnProperty$1.call(object, key)) {
                result[key] = handler ? handler.call(object, key, object[key]) : object[key];
            }
        });
        return result;
    }



    var index$5 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        deepGet: deepGet,
        pickX: pickX,
        pick: pick
    });

    /**
     * @packageDocumentation
     * @module @tomato-js/string
     */
    /**
     * 判断给定的字符串是否是 JSON 字符串
     *
     * 脚本举例
     * ```
     *   import { isJson } from '@tomato-js/string'
     *   isJson('{"name":"brizer","age":20}'); // true
     *   isJson('{"name":"brizer",age:"20"}'); // false
     * ```
     *
     * @param string - 检查的字符串
     * @returns 是否为json格式
     */
    function isJson(string) {
        try {
            JSON.parse(string);
            return true;
        }
        catch (e) {
            return false;
        }
    }

    var __read$2 = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread$2 = (undefined && undefined.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$2(arguments[i]));
        return ar;
    };
    /**
     * @packageDocumentation
     * @module @tomato-js/string
     */
    /**
     * 字符串反转
     *
     * 脚本举例
     * ```
     *   import { reverse } from '@tomato-js/string'
     *   reverse('foobar'); // 'raboof'
     * ```
     *
     * @param string - 需要反转的字符串
     * @returns 反转后的字符串
     */
    function reverse(string) {
        return __spread$2(string).reverse().join("");
    }

    /**
     * @packageDocumentation
     * @module @tomato-js/string
     */
    /**
     * 截取匹配到的字符后面的内容
     *
     * 脚本举例
     * ```
     *   import { substringFromChar } from '@tomato-js/string'
     *   const str = substringFromChar('hello world','l');//'lo world'
     *   const str = substringFromChar('hello world','l',{itself:true});//'llo world'
     * ```
     *
     * @param string - 原来的字符串
     * @param char - 标识字符
     * @param options - 其他参数
     * @param options.itself - 截取的字符串是否包含char本身，默认为false
     * @returns 截取后的字符串
     */
    function substringFromChar(string, char, options) {
        if (options === void 0) { options = {
            itself: false
        }; }
        var itself = options.itself;
        if (string.indexOf(char) === -1)
            return "";
        var indexOfChar = itself ? string.indexOf(char) : string.indexOf(char) + 1;
        return string.substring(indexOfChar);
    }
    /**
     * 截取匹配到的字符前面的内容
     *
     * 脚本举例
     * ```
     *   import { substringToChar } from '@tomato-js/string'
     *   const str = substringToChar('hello world','l');//'he'
     *   const str = substringToChar('hello world','l',{itself:true});//'hel'
     * ```
     *
     * @param string - 原来的字符串
     * @param char - 标识字符
     * @param options - 其他参数
     * @param options.itself - 截取的字符串是否包含char本身，默认为false
     * @returns 截取后的字符串
     */
    function substringToChar(string, char, options) {
        if (options === void 0) { options = {
            itself: false
        }; }
        var itself = options.itself;
        if (string.indexOf(char) === -1)
            return "";
        var indexOfChar = itself ? string.indexOf(char) + 1 : string.indexOf(char);
        return string.substring(0, indexOfChar);
    }



    var index$6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        isJson: isJson,
        reverse: reverse,
        substringFromChar: substringFromChar,
        substringToChar: substringToChar
    });

    /**
     * @packageDocumentation
     * @module @tomato-js/path
     */
    function getQueryString(str) {
        if (str === void 0) { str = window.location.search; }
        return str.includes("?") ? str.substring(1) : str;
    }
    /**
     * 获取url中的search字符串
     *
     * 脚本举例
     * ```
     *   import { getSearch } from '@tomato-js/path';
     *   const search = parse()//默认使用window.location.href;
     *   const search2 = parse("https://www.baidu.com?a=123&e=f")//?a=123&e=f;
     * ```
     *
     * @param url - 待解析的url
     * @returns search字符串
     */
    function getSearch(url) {
        if (url === void 0) { url = window.location.href; }
        return substringFromChar(url, "?", { itself: true });
    }
    function parseByURLSearchParams(queryString, encode) {
        if (encode === void 0) { encode = true; }
        var urlSearchParams = new URLSearchParams(queryString);
        var parsedObj = {};
        parsedObj = parseBySplit(urlSearchParams.toString(), encode);
        return parsedObj;
    }
    function parseBySplit(queryString, encode) {
        if (encode === void 0) { encode = true; }
        var parsedObj = {};
        var queryArr = queryString.split("&");
        queryArr.forEach(function (query) {
            if (query.includes("=")) {
                var tmp = query.split("=");
                if (encode) {
                    parsedObj[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp[1]);
                }
                else {
                    parsedObj[tmp[0]] = tmp[1];
                }
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
     *   const queryObj2 = parse('?a=123&b=456')//{a:'123',b:'456'};
     *   const queryObj3 = parse('a=123&b=456')//{a:'123',b:'456'};
     * ```
     *
     * @param str - 待解析的字符串
     * @param options - 其他解析参数
     * @param options.encode - 是否编码和解码，默认true
     * @returns 解析完成的对象
     */
    function parse(str, options) {
        if (options === void 0) { options = {
            encode: true
        }; }
        var queryString = getQueryString(str);
        var parsedObj;
        var encode = options.encode;
        if (isURLSearchParamsExist()) {
            parsedObj = parseByURLSearchParams(queryString, encode);
        }
        else {
            parsedObj = parseBySplit(queryString, encode);
        }
        if (isEmptyObject(parsedObj))
            return null;
        return parsedObj;
    }

    /**
     * @packageDocumentation
     * @module @tomato-js/path
     */
    /**
     * 解析对象为query字符串
     *
     * 脚本举例
     * ```
     *   import { stringify } from '@tomato-js/path';
     *   const queryStr = stringify({
     *     queryKey: "this is queryA"
     *   });
     *   //queryKey=this%20is%20queryA
     * ```
     *
     * @param queryObj - 待解析的对象
     * @param options - 其他解析参数
     * @param options.encode - 是否编码和解码，默认true
     * @returns 解析完成的query字符串
     */
    function stringify(queryObj, options) {
        if (options === void 0) { options = {
            encode: true
        }; }
        var queryString = "";
        forEach(queryObj, function (queryKey, queryValue) {
            if (options.encode) {
                queryValue = encodeURIComponent(queryValue);
                queryKey = encodeURIComponent(queryKey);
            }
            queryString = queryString ? queryString + "&" + queryKey + "=" + queryValue : queryKey + "=" + queryValue;
        });
        return queryString;
    }

    /**
     * @packageDocumentation
     * @module @tomato-js/path
     */
    /**
     * 将form和to的queryString进行merge合并到to
     *
     * 脚本举例
     * ```
     *   import { merge } from '@tomato-js/path';
     *   merge("https://tomato-js.github.io?a=b&c=d", "https://www.baidu.com?a=123&e=f");
     *   //https://www.baidu.com?a=123&c=d&e=f
     * ```
     *
     * @param from - 解析的url
     * @param to - 待合并的url
     * @returns 合并后的url
     */
    function merge(from, to) {
        var fromSearch = getSearch(from);
        var toSearch = getSearch(to);
        var toOrigin = substringToChar(to, "?") || to;
        var fromQueryObj = parse(fromSearch);
        var toQueryObj = parse(toSearch);
        var finalQueryObj = Object.assign({}, fromQueryObj, toQueryObj);
        var finalSearch = stringify(finalQueryObj);
        return finalSearch ? toOrigin + "?" + finalSearch : toOrigin;
    }



    var index$7 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        merge: merge,
        parse: parse,
        getSearch: getSearch,
        stringify: stringify
    });



    var esm = /*#__PURE__*/Object.freeze({
        __proto__: null,
        array: index$1,
        element: index$2,
        object: index$5,
        env: index$3,
        math: index$4,
        path: index$7,
        shared: index,
        string: index$6
    });

    const classNode = esm.element.get('.j-class');
    const idNode = esm.element.get('j-id');
    const queryObje = esm.path.parse('?a=123&b=456');
    classNode.innerHTML = queryObje.a;
    idNode.innerHTML = queryObje.b;

    const arr = [1,2,3,3,5];
    const randomArr = esm.array.filterNonUnique(arr);
    console.warn(randomArr);

    var src = {

    };

    return src;

}());
