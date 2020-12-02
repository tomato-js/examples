/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@tomato-js/element/dist/esm/addStyle.js":
/*!**************************************************************!*\
  !*** ./node_modules/@tomato-js/element/dist/esm/addStyle.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ addStyle
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/@tomato-js/element/dist/esm/create.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert */ "./node_modules/@tomato-js/element/dist/esm/insert.js");
/* harmony import */ var _tomato_js_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tomato-js/shared */ "./node_modules/@tomato-js/shared/dist/esm/index.js");
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
function addStyle(styleContent = "") {
    const css = styleContent.replace(_tomato_js_shared__WEBPACK_IMPORTED_MODULE_2__.blankReg, " ").trim();
    if (!css)
        return;
    const node = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)("style");
    node.textContent = css;
    (0,_insert__WEBPACK_IMPORTED_MODULE_1__.append)(document.head, node);
    return node;
}


/***/ }),

/***/ "./node_modules/@tomato-js/element/dist/esm/bottom-visible.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tomato-js/element/dist/esm/bottom-visible.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ bottomVisible
/* harmony export */ });
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


/***/ }),

/***/ "./node_modules/@tomato-js/element/dist/esm/create.js":
/*!************************************************************!*\
  !*** ./node_modules/@tomato-js/element/dist/esm/create.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ create
/* harmony export */ });
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get */ "./node_modules/@tomato-js/element/dist/esm/get.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert */ "./node_modules/@tomato-js/element/dist/esm/insert.js");


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
    const element = document.createElement(tagName);
    const TagMap = {
        a: { href: "#", hideFocus: !0 },
        style: { type: "text/css" },
        link: { type: "text/css", rel: "stylesheet" },
        iframe: { frameBorder: 0 },
        script: { defer: !0, type: "text/javascript" }
    };
    const config = TagMap[tagName.toLowerCase()];
    const createdElement = Object.assign(element, config);
    if (idName)
        createdElement.id = idName;
    if (!parent) {
        return createdElement;
    }
    const parentNode = (0,_get__WEBPACK_IMPORTED_MODULE_0__.default)(parent);
    if (parentNode) {
        (0,_insert__WEBPACK_IMPORTED_MODULE_1__.append)(parentNode, createdElement);
    }
    else {
        (0,_insert__WEBPACK_IMPORTED_MODULE_1__.append)(document.body, createdElement);
    }
    return createdElement;
}


/***/ }),

/***/ "./node_modules/@tomato-js/element/dist/esm/get.js":
/*!*********************************************************!*\
  !*** ./node_modules/@tomato-js/element/dist/esm/get.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ get
/* harmony export */ });
/* harmony import */ var _tomato_js_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tomato-js/shared */ "./node_modules/@tomato-js/shared/dist/esm/index.js");
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
    if (!(0,_tomato_js_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(str)) {
        return str;
    }
    let node = document.getElementById(str);
    if (node === null) {
        node = document.querySelector(str);
    }
    return node;
}


/***/ }),

/***/ "./node_modules/@tomato-js/element/dist/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@tomato-js/element/dist/esm/index.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export addStyle [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/element/dist/esm/addStyle.js .default */
/*! export append [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/element/dist/esm/insert.js .append */
/*! export bottomVisible [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/element/dist/esm/bottom-visible.js .default */
/*! export create [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/element/dist/esm/create.js .default */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/element/dist/esm/get.js .default */
/*! export insertAfter [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/element/dist/esm/insert.js .insertAfter */
/*! export insertBefore [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/element/dist/esm/insert.js .insertBefore */
/*! export prepend [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/element/dist/esm/insert.js .prepend */
/*! export scrollToTop [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/element/dist/esm/scroll-to-top.js .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addStyle": () => /* reexport safe */ _addStyle__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "bottomVisible": () => /* reexport safe */ _bottom_visible__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "create": () => /* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "get": () => /* reexport safe */ _get__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "append": () => /* reexport safe */ _insert__WEBPACK_IMPORTED_MODULE_4__.append,
/* harmony export */   "prepend": () => /* reexport safe */ _insert__WEBPACK_IMPORTED_MODULE_4__.prepend,
/* harmony export */   "insertAfter": () => /* reexport safe */ _insert__WEBPACK_IMPORTED_MODULE_4__.insertAfter,
/* harmony export */   "insertBefore": () => /* reexport safe */ _insert__WEBPACK_IMPORTED_MODULE_4__.insertBefore,
/* harmony export */   "scrollToTop": () => /* reexport safe */ _scroll_to_top__WEBPACK_IMPORTED_MODULE_5__.default
/* harmony export */ });
/* harmony import */ var _addStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addStyle */ "./node_modules/@tomato-js/element/dist/esm/addStyle.js");
/* harmony import */ var _bottom_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottom-visible */ "./node_modules/@tomato-js/element/dist/esm/bottom-visible.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create */ "./node_modules/@tomato-js/element/dist/esm/create.js");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get */ "./node_modules/@tomato-js/element/dist/esm/get.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insert */ "./node_modules/@tomato-js/element/dist/esm/insert.js");
/* harmony import */ var _scroll_to_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll-to-top */ "./node_modules/@tomato-js/element/dist/esm/scroll-to-top.js");








/***/ }),

/***/ "./node_modules/@tomato-js/element/dist/esm/insert.js":
/*!************************************************************!*\
  !*** ./node_modules/@tomato-js/element/dist/esm/insert.js ***!
  \************************************************************/
/*! namespace exports */
/*! export append [provided] [no usage info] [missing usage info prevents renaming] */
/*! export insertAfter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export insertBefore [provided] [no usage info] [missing usage info prevents renaming] */
/*! export prepend [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "append": () => /* binding */ append,
/* harmony export */   "prepend": () => /* binding */ prepend,
/* harmony export */   "insertBefore": () => /* binding */ insertBefore,
/* harmony export */   "insertAfter": () => /* binding */ insertAfter
/* harmony export */ });
/* harmony import */ var _tomato_js_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tomato-js/shared */ "./node_modules/@tomato-js/shared/dist/esm/index.js");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get */ "./node_modules/@tomato-js/element/dist/esm/get.js");
/**
 * @packageDocumentation
 * @module @tomato-js/element
 */


const directHandler = {
    top: function (origin, target) {
        const firstChild = origin.firstChild;
        origin.insertBefore(target, firstChild);
    },
    bottom: function (origin, target) {
        origin.appendChild(target);
    },
    before: function (origin, target) {
        const parent = origin.parentNode;
        if (parent)
            parent.insertBefore(target, origin);
    },
    after: function (origin, target) {
        const parent = origin.parentNode;
        if (parent)
            parent.insertBefore(target, origin.nextSibling);
    }
};
function insert(origin, target, direct = "bottom") {
    const originNode = (0,_tomato_js_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(origin) ? (0,_get__WEBPACK_IMPORTED_MODULE_1__.default)(origin) : origin;
    const targetNode = (0,_tomato_js_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(target) ? (0,_get__WEBPACK_IMPORTED_MODULE_1__.default)(target) : target;
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


/***/ }),

/***/ "./node_modules/@tomato-js/element/dist/esm/scroll-to-top.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@tomato-js/element/dist/esm/scroll-to-top.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ scrollToTop
/* harmony export */ });
/**
 * @packageDocumentation
 * @module @tomato-js/element
 */
/**
 * 平滑的滚动到页面的顶部
 *
 *
 * 脚本举例
 * ```
 *   import { scrollToTop } from '@tomato-js/element'
 *   scrollToTop();
 * ```
 *
 * @returns 是否滚动到底部
 */
function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}


/***/ }),

/***/ "./node_modules/@tomato-js/events/dist/esm/Events.js":
/*!***********************************************************!*\
  !*** ./node_modules/@tomato-js/events/dist/esm/Events.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export Events [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Events": () => /* binding */ Events
/* harmony export */ });
/* harmony import */ var _tomato_js_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tomato-js/shared */ "./node_modules/@tomato-js/shared/dist/esm/index.js");
/**
 * @packageDocumentation
 * @module @tomato-js/events
 */

/**
 * Events事件通信类
 *
 * 新增于v0.0.18
 *
 * 脚本举例
 * ```
 *   import { Events } from '@tomato-js/events';
 *   const e = new Events();
 *   e.on('foo',data=>data);
 *   e.once('foo',data=>data);//只监听一次
 *   e.emit('foo','bar')
 *   e.clear('foo')//清除事件
 * ```
 */
class Events {
    constructor() {
        this.events = new Map();
        this.eventsCount = 0;
    }
    /**
     * 注册事件
     *
     * 新增于v0.0.18
     *
     * 脚本举例
     * ```
     *   import { Events } from '@tomato-js/events'
     *   const e = new Events();
     *   function foo() {}
     *   function bar() {}
     *   function baz() {}
     *   e.on('foo', foo);
     *   e.on('bar', bar);
     *   e.on('bar', baz);
     * ```
     *
     * @param event - 事件名称
     * @param fn - 事件回调函数
     * @returns 无
     */
    on(event, fn, context = this) {
        return this.addEventListener(event, fn, context, false);
    }
    /**
     * 注册事件，只响应一次
     *
     * 新增于v0.0.18
     *
     * 脚本举例
     * ```
     *   import { Events } from '@tomato-js/events'
     *   const e = new Events();
     *   function foo() {}
     *   function bar() {}
     *   function baz() {}
     *   e.once('foo', foo);
     *   e.once('bar', bar);
     *   e.once('bar', baz);
     * ```
     *
     * @param event - 事件名称
     * @param fn - 事件回调函数
     * @returns 无
     */
    once(event, fn, context = this) {
        return this.addEventListener(event, fn, context, true);
    }
    addEventListener(event, fn, context, once) {
        if (!(0,_tomato_js_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(fn)) {
            throw new TypeError("The listener must be a function");
        }
        let listeners = this.events.get(event) || [];
        listeners.push({
            fn,
            context,
            once
        });
        this.eventsCount++;
        this.events.set(event, listeners);
    }
    removeListener(event, fn) {
        if (!this.events.has(event))
            return false;
        const alreadyListeners = this.events.get(event) || [];
        let newListeners = [];
        if ((0,_tomato_js_shared__WEBPACK_IMPORTED_MODULE_0__.isNil)(fn)) {
            this.events.delete(event);
            this.eventsCount = this.eventsCount - alreadyListeners.length;
        }
        else {
            newListeners = alreadyListeners.filter((listener) => {
                return listener.fn !== fn;
            });
            if (newListeners.length === 0) {
                this.events.delete(event);
                this.eventsCount = this.eventsCount - alreadyListeners.length;
            }
            else {
                this.events.set(event, newListeners);
                this.eventsCount = this.eventsCount - (alreadyListeners.length - newListeners.length);
            }
        }
        return true;
    }
    /**
     * 触发事件
     *
     * 新增于v0.0.18
     *
     * 脚本举例
     * ```
     *   import { Events } from '@tomato-js/events'
     *   const e = new Events();
     *   function foo() {}
     *   function bar() {}
     *   function baz() {}
     *   e.on('foo', foo);
     *   e.on('bar', bar);
     *   e.on('bar', baz);
     *   e.emit('bar');
     * ```
     *
     * @param event - 事件名称
     * @param args - 透传剩余参数
     * @returns 无
     */
    emit(event, ...args) {
        if (!this.events.has(event))
            return false;
        const listeners = this.events.get(event);
        listeners?.map(listener => {
            if (listener?.fn) {
                if (listener.once) {
                    this.removeListener(event, listener.fn);
                }
                listener.fn.call(listener.context, ...args);
            }
        });
    }
    /**
     * 获取事件函数列表
     *
     * 新增于v0.0.18
     *
     * 脚本举例
     * ```
     *   import { Events } from '@tomato-js/events'
     *   const e = new Events();
     *   function foo() {}
     *   function bar() {}
     *   function baz() {}
     *   e.on('foo', foo);
     *   e.on('bar', bar);
     *   e.on('bar', baz);
     *   e.listeners('bar')
     *   //[bar,baz]
     * ```
     *
     * @param event - 事件名称
     * @returns 执行函数列表
     */
    listeners(event) {
        const listeners = this.events.get(event) || [];
        return (0,_tomato_js_shared__WEBPACK_IMPORTED_MODULE_0__.map)(listeners, (index, listener) => listener.fn);
    }
    /**
     * 清除事件
     *
     * 新增于v0.0.18
     *
     * 脚本举例
     * ```
     *   import { Events } from '@tomato-js/events'
     *   const e = new Events();
     *   function foo() {}
     *   function bar() {}
     *   function baz() {}
     *   e.on('foo', foo);
     *   e.on('bar', bar);
     *   e.on('bar', baz);
     *   e.clear('foo');//清除一个key上所有事件回调
     *   e.clear('bar',bar);//清除一个key上指定事件回调
     *   e.clear();//清除所有key所有事件回调
     * ```
     *
     * @param event - 事件名称
     * @param fn - 事件回调函数
     * @returns 无
     */
    clear(event, fn) {
        if (event) {
            this.removeListener(event, fn);
            return true;
        }
        this.clearAll();
        return true;
    }
    /**
     * 清除所有事件
     *
     * 新增于v0.0.18
     *
     * 脚本举例
     * ```
     *   import { Events } from '@tomato-js/events'
     *   const e = new Events();
     *   function foo() {}
     *   function bar() {}
     *   function baz() {}
     *   e.on('foo', foo);
     *   e.on('bar', bar);
     *   e.on('bar', baz);
     *   e.clearAll();//清除所有key所有事件回调
     * ```
     *
     * @param event - 事件名称
     * @param fn - 事件回调函数
     * @returns 无
     */
    clearAll() {
        this.events.clear();
    }
    /**
     * 获取事件回调总数
     *
     * 新增于v0.0.18
     *
     * 脚本举例
     * ```
     *   import { Events } from '@tomato-js/events'
     *   const e = new Events();
     *   function foo() {}
     *   function bar() {}
     *   function baz() {}
     *   e.on('foo', foo);
     *   e.on('bar', bar);
     *   e.on('bar', baz);
     *   e.size()
     *   //3
     * ```
     *
     * @returns 事件回调总数
     */
    size() {
        return this.eventsCount;
    }
}


/***/ }),

/***/ "./node_modules/@tomato-js/events/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tomato-js/events/dist/esm/index.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export Events [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/events/dist/esm/Events.js .Events */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Events": () => /* reexport safe */ _Events__WEBPACK_IMPORTED_MODULE_0__.Events
/* harmony export */ });
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events */ "./node_modules/@tomato-js/events/dist/esm/Events.js");



/***/ }),

/***/ "./node_modules/@tomato-js/preload/dist/esm/Preload.js":
/*!*************************************************************!*\
  !*** ./node_modules/@tomato-js/preload/dist/esm/Preload.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export Preload [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preload": () => /* binding */ Preload
/* harmony export */ });
/* harmony import */ var _tomato_js_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tomato-js/events */ "./node_modules/@tomato-js/events/dist/esm/index.js");
/* harmony import */ var _tomato_js_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tomato-js/shared */ "./node_modules/@tomato-js/shared/dist/esm/index.js");
/* harmony import */ var _loaders_imgLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loaders/imgLoader */ "./node_modules/@tomato-js/preload/dist/esm/loaders/imgLoader.js");
/* harmony import */ var _tomato_js_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tomato-js/string */ "./node_modules/@tomato-js/string/dist/esm/index.js");
/**
 * @packageDocumentation
 * @module @tomato-js/preload
 */




const LOADERS_STRATEGY = {
    png: _loaders_imgLoader__WEBPACK_IMPORTED_MODULE_2__.ImageLoader,
    jpg: _loaders_imgLoader__WEBPACK_IMPORTED_MODULE_2__.ImageLoader,
    jpeg: _loaders_imgLoader__WEBPACK_IMPORTED_MODULE_2__.ImageLoader,
    webp: _loaders_imgLoader__WEBPACK_IMPORTED_MODULE_2__.ImageLoader,
    gif: _loaders_imgLoader__WEBPACK_IMPORTED_MODULE_2__.ImageLoader
};
/**
 * 预加载类，目前只支持image类型
 *
 * 新增于v0.0.24
 *
 * 脚本举例
 * ```
 *   import { Preload } from '@tomato-js/preload';
 *   const p = new Preload();
 *   p.on('complete',()=>console.log('finished'));
 *   p.add('1.png')
 *   p.add('2.jpg')
 *   p.add('3.webp')
 *   p.load()//开始加载
 *   //加载完成后finished
 * ```
 */
class Preload extends _tomato_js_events__WEBPACK_IMPORTED_MODULE_0__.Events {
    constructor(options) {
        super();
        this.loaders = {};
        this.urls = [];
        this.loading = false;
        this.loadIdx = 0;
        this.status = {};
    }
    getLoader(url) {
        const extension = (0,_tomato_js_string__WEBPACK_IMPORTED_MODULE_3__.getExtension)(url);
        if ((0,_tomato_js_shared__WEBPACK_IMPORTED_MODULE_1__.isNil)(extension))
            return;
        const loader = LOADERS_STRATEGY[extension.toLowerCase()];
        return loader;
    }
    initLoader(url, loader) {
        if (!this.loaders[url]) {
            this.loaders[url] = new loader();
            this.urls.push(url);
        }
    }
    continueLoadQueue() {
        if (this.loadIdx < this.urls.length) {
            const url = this.urls[this.loadIdx];
            const loader = this.loaders[url];
            this.status[url] = false;
            this.loadIdx++;
            loader.once("error", this.onLoadError.bind(this, url));
            loader.once("complete", this.onLoadComplete.bind(this, url));
            loader.load(url);
        }
        else if (this.checkComplete()) {
            this.emit("complete");
        }
    }
    checkComplete() {
        let loaded = true;
        for (let url of this.urls) {
            if (!this.status[url])
                loaded = false;
        }
        return loaded;
    }
    onLoadError(url, error) {
        console.warn("Couldn't load " + url + " received the error: " + error);
        this.status[url] = true;
        this.continueLoadQueue();
    }
    onLoadComplete(url) {
        this.status[url] = true;
        this.continueLoadQueue();
    }
    /**
     * 将资源加入加载列表
     *
     * 新增于v0.0.24
     *
     * 脚本举例
     * ```
     *   import { Preload } from '@tomato-js/preload';
     *   const p = new Preload();
     *   p.on('complete',()=>console.log('finished'));
     *   p.add('1.png')
     *   p.add('2.jpg')
     *   p.add('3.webp')
     *   p.load()//开始加载
     *   //加载完成后finished
     * ```
     */
    add(url) {
        if ((0,_tomato_js_shared__WEBPACK_IMPORTED_MODULE_1__.isNil)(url))
            return;
        const loader = this.getLoader(url);
        if ((0,_tomato_js_shared__WEBPACK_IMPORTED_MODULE_1__.isNil)(loader))
            return;
        this.initLoader(url, loader);
    }
    /**
     * 将图片资源加入加载列表
     *
     * 新增于v0.0.24
     *
     * 脚本举例
     * ```
     *   import { Preload } from '@tomato-js/preload';
     *   const p = new Preload();
     *   p.on('complete',()=>console.log('finished'));
     *   p.addImage('1.png')
     *   p.addImage('2.jpg')
     *   p.addImage('3.webp')
     *   p.load()//开始加载
     *   //加载完成后finished
     * ```
     */
    addImage(url) {
        if ((0,_tomato_js_shared__WEBPACK_IMPORTED_MODULE_1__.isNil)(url))
            return;
        this.initLoader(url, _loaders_imgLoader__WEBPACK_IMPORTED_MODULE_2__.ImageLoader);
    }
    /**
     * 开始加载
     *
     * 新增于v0.0.24
     *
     * 脚本举例
     * ```
     *   import { Preload } from '@tomato-js/preload';
     *   const p = new Preload();
     *   p.on('complete',()=>console.log('finished'));
     *   p.add('1.png')
     *   p.add('2.jpg')
     *   p.add('3.webp')
     *   p.load()//开始加载
     *   //加载完成后finished
     * ```
     */
    load() {
        if (this.loading)
            return;
        for (const url of this.urls) {
            this.continueLoadQueue();
        }
    }
}


/***/ }),

/***/ "./node_modules/@tomato-js/preload/dist/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@tomato-js/preload/dist/esm/index.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export Preload [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/preload/dist/esm/Preload.js .Preload */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preload": () => /* reexport safe */ _Preload__WEBPACK_IMPORTED_MODULE_0__.Preload
/* harmony export */ });
/* harmony import */ var _Preload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preload */ "./node_modules/@tomato-js/preload/dist/esm/Preload.js");



/***/ }),

/***/ "./node_modules/@tomato-js/preload/dist/esm/loaders/baseLoader.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tomato-js/preload/dist/esm/loaders/baseLoader.js ***!
  \************************************************************************/
/*! namespace exports */
/*! export BaseLoader [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseLoader": () => /* binding */ BaseLoader
/* harmony export */ });
/* harmony import */ var _tomato_js_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tomato-js/events */ "./node_modules/@tomato-js/events/dist/esm/index.js");
/**
 * @packageDocumentation
 * @module @tomato-js/preload
 */

/**
 * Loader基类
 *
 * 新增于v0.0.24
 */
class BaseLoader extends _tomato_js_events__WEBPACK_IMPORTED_MODULE_0__.Events {
    constructor(loadType) {
        super();
        this.content = null;
    }
    dispatchComplete() {
        this.emit("complete", this.content);
    }
    dispatchError(msg) {
        this.emit("error", msg);
    }
}


/***/ }),

/***/ "./node_modules/@tomato-js/preload/dist/esm/loaders/imgLoader.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tomato-js/preload/dist/esm/loaders/imgLoader.js ***!
  \***********************************************************************/
/*! namespace exports */
/*! export ImageLoader [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageLoader": () => /* binding */ ImageLoader
/* harmony export */ });
/* harmony import */ var _baseLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLoader */ "./node_modules/@tomato-js/preload/dist/esm/loaders/baseLoader.js");
/**
 * @packageDocumentation
 * @module @tomato-js/preload
 */

/**
 * ImageLoader类
 *
 * 新增于v0.0.24
 */
class ImageLoader extends _baseLoader__WEBPACK_IMPORTED_MODULE_0__.BaseLoader {
    constructor() {
        super("image");
        this.imageLoaded = false;
    }
    dispatchComplete() {
        if (this.imageLoaded) {
            super.dispatchComplete();
        }
    }
    createAndLoadImage(url) {
        this.content = new Image();
        this.content.onload = this.onImageLoadComplete.bind(this);
        this.content.onerror = this.onImageLoadFail.bind(this);
        this.content.src = url;
    }
    onImageLoadComplete() {
        this.imageLoaded = true;
        this.dispatchComplete();
    }
    onImageLoadFail() {
        this.dispatchError("Image failed to load");
    }
    load(url) {
        this.createAndLoadImage(url);
    }
}


/***/ }),

/***/ "./node_modules/@tomato-js/shared/dist/esm/for-each.js":
/*!*************************************************************!*\
  !*** ./node_modules/@tomato-js/shared/dist/esm/for-each.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export forEach [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forEach": () => /* binding */ forEach
/* harmony export */ });
/* harmony import */ var _is_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-type */ "./node_modules/@tomato-js/shared/dist/esm/is-type.js");
/**
 * @packageDocumentation
 * @module @tomato-js/shared
 */

function forEachArray(elements, func) {
    let rst;
    for (let i = 0, len = elements.length; i < len; i++) {
        rst = func(i, elements[i]);
        if (rst === false) {
            break;
        }
    }
}
function forEachObject(elements, func) {
    let rst;
    for (const k in elements) {
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
    if ((0,_is_type__WEBPACK_IMPORTED_MODULE_0__.isArray)(elements)) {
        forEachArray(elements, func);
    }
    else if ((0,_is_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(elements)) {
        forEachObject(elements, func);
    }
}


/***/ }),

/***/ "./node_modules/@tomato-js/shared/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tomato-js/shared/dist/esm/index.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export asReg [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/regexp.js .asReg */
/*! export blankReg [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/regexp.js .blankReg */
/*! export chineseReg [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/regexp.js .chineseReg */
/*! export englishReg [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/regexp.js .englishReg */
/*! export forEach [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/for-each.js .forEach */
/*! export integerReg [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/regexp.js .integerReg */
/*! export isArray [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-type.js .isArray */
/*! export isDef [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-type.js .isDef */
/*! export isEmpty [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-empty.js .isEmpty */
/*! export isEmptyArray [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-empty.js .isEmptyArray */
/*! export isEmptyObject [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-empty.js .isEmptyObject */
/*! export isFalsy [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-type.js .isFalsy */
/*! export isFunction [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-type.js .isFunction */
/*! export isNil [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-type.js .isNil */
/*! export isNull [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-type.js .isNull */
/*! export isNumber [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-type.js .isNumber */
/*! export isNumberLike [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-type.js .isNumberLike */
/*! export isObject [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-type.js .isObject */
/*! export isString [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-type.js .isString */
/*! export isType [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-type.js .isType */
/*! export isUndefined [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/is-type.js .isUndefined */
/*! export map [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/map.js .map */
/*! export negativeNumReg [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/regexp.js .negativeNumReg */
/*! export noop [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/noop.js .noop */
/*! export not [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/not.js .not */
/*! export positiveNumReg [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/shared/dist/esm/regexp.js .positiveNumReg */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forEach": () => /* reexport safe */ _for_each__WEBPACK_IMPORTED_MODULE_0__.forEach,
/* harmony export */   "isEmpty": () => /* reexport safe */ _is_empty__WEBPACK_IMPORTED_MODULE_1__.isEmpty,
/* harmony export */   "isEmptyArray": () => /* reexport safe */ _is_empty__WEBPACK_IMPORTED_MODULE_1__.isEmptyArray,
/* harmony export */   "isEmptyObject": () => /* reexport safe */ _is_empty__WEBPACK_IMPORTED_MODULE_1__.isEmptyObject,
/* harmony export */   "isArray": () => /* reexport safe */ _is_type__WEBPACK_IMPORTED_MODULE_2__.isArray,
/* harmony export */   "isDef": () => /* reexport safe */ _is_type__WEBPACK_IMPORTED_MODULE_2__.isDef,
/* harmony export */   "isFalsy": () => /* reexport safe */ _is_type__WEBPACK_IMPORTED_MODULE_2__.isFalsy,
/* harmony export */   "isFunction": () => /* reexport safe */ _is_type__WEBPACK_IMPORTED_MODULE_2__.isFunction,
/* harmony export */   "isNil": () => /* reexport safe */ _is_type__WEBPACK_IMPORTED_MODULE_2__.isNil,
/* harmony export */   "isNull": () => /* reexport safe */ _is_type__WEBPACK_IMPORTED_MODULE_2__.isNull,
/* harmony export */   "isNumber": () => /* reexport safe */ _is_type__WEBPACK_IMPORTED_MODULE_2__.isNumber,
/* harmony export */   "isNumberLike": () => /* reexport safe */ _is_type__WEBPACK_IMPORTED_MODULE_2__.isNumberLike,
/* harmony export */   "isObject": () => /* reexport safe */ _is_type__WEBPACK_IMPORTED_MODULE_2__.isObject,
/* harmony export */   "isString": () => /* reexport safe */ _is_type__WEBPACK_IMPORTED_MODULE_2__.isString,
/* harmony export */   "isType": () => /* reexport safe */ _is_type__WEBPACK_IMPORTED_MODULE_2__.isType,
/* harmony export */   "isUndefined": () => /* reexport safe */ _is_type__WEBPACK_IMPORTED_MODULE_2__.isUndefined,
/* harmony export */   "map": () => /* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_3__.map,
/* harmony export */   "noop": () => /* reexport safe */ _noop__WEBPACK_IMPORTED_MODULE_4__.noop,
/* harmony export */   "not": () => /* reexport safe */ _not__WEBPACK_IMPORTED_MODULE_5__.not,
/* harmony export */   "asReg": () => /* reexport safe */ _regexp__WEBPACK_IMPORTED_MODULE_6__.asReg,
/* harmony export */   "blankReg": () => /* reexport safe */ _regexp__WEBPACK_IMPORTED_MODULE_6__.blankReg,
/* harmony export */   "chineseReg": () => /* reexport safe */ _regexp__WEBPACK_IMPORTED_MODULE_6__.chineseReg,
/* harmony export */   "englishReg": () => /* reexport safe */ _regexp__WEBPACK_IMPORTED_MODULE_6__.englishReg,
/* harmony export */   "integerReg": () => /* reexport safe */ _regexp__WEBPACK_IMPORTED_MODULE_6__.integerReg,
/* harmony export */   "negativeNumReg": () => /* reexport safe */ _regexp__WEBPACK_IMPORTED_MODULE_6__.negativeNumReg,
/* harmony export */   "positiveNumReg": () => /* reexport safe */ _regexp__WEBPACK_IMPORTED_MODULE_6__.positiveNumReg
/* harmony export */ });
/* harmony import */ var _for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./for-each */ "./node_modules/@tomato-js/shared/dist/esm/for-each.js");
/* harmony import */ var _is_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-empty */ "./node_modules/@tomato-js/shared/dist/esm/is-empty.js");
/* harmony import */ var _is_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-type */ "./node_modules/@tomato-js/shared/dist/esm/is-type.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./node_modules/@tomato-js/shared/dist/esm/map.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noop */ "./node_modules/@tomato-js/shared/dist/esm/noop.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not */ "./node_modules/@tomato-js/shared/dist/esm/not.js");
/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./regexp */ "./node_modules/@tomato-js/shared/dist/esm/regexp.js");









/***/ }),

/***/ "./node_modules/@tomato-js/shared/dist/esm/is-empty.js":
/*!*************************************************************!*\
  !*** ./node_modules/@tomato-js/shared/dist/esm/is-empty.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export isEmpty [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isEmptyArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isEmptyObject [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEmptyObject": () => /* binding */ isEmptyObject,
/* harmony export */   "isEmptyArray": () => /* binding */ isEmptyArray,
/* harmony export */   "isEmpty": () => /* binding */ isEmpty
/* harmony export */ });
/* harmony import */ var _is_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-type */ "./node_modules/@tomato-js/shared/dist/esm/is-type.js");
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
 * 是否为空数组
 *
 * 新增于v0.0.22
 *
 * 脚本举例
 * ```
 *   import { isEmptyArray } from '@tomato-js/shared';
 *   const node = isEmptyArray([]);//true
 *   const node = isEmptyArray([1]);//false
 * ```
 *
 * @param arr - 需要判断的数组
 * @returns 是否为没有属性的数组比如[]
 */
function isEmptyArray(arr) {
    return (0,_is_type__WEBPACK_IMPORTED_MODULE_0__.isArray)(arr) && arr.length === 0;
}
/**
 * 是否为空对象或空数组
 *
 * 新增于v0.0.22
 *
 * 脚本举例
 * ```
 *   import { isEmpty } from '@tomato-js/shared'
 *   const node = isEmptyArray([]);//true
 *   const node = isEmptyArray([1]);//false
 * ```
 *
 * @param collection - 需要判断的集合
 * @param containNil - 是否需要算上null或undefined，默认为true
 * @returns 是否为没有属性的空对象如{}，数组如[]，undefined，null
 */
function isEmpty(collection, containNil = true) {
    if (containNil && (0,_is_type__WEBPACK_IMPORTED_MODULE_0__.isNil)(collection)) {
        return true;
    }
    if ((0,_is_type__WEBPACK_IMPORTED_MODULE_0__.isArray)(collection)) {
        return isEmptyArray(collection);
    }
    if ((0,_is_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(collection)) {
        return isEmptyObject(collection);
    }
    return false;
}


/***/ }),

/***/ "./node_modules/@tomato-js/shared/dist/esm/is-type.js":
/*!************************************************************!*\
  !*** ./node_modules/@tomato-js/shared/dist/esm/is-type.js ***!
  \************************************************************/
/*! namespace exports */
/*! export isArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isDef [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isFalsy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isFunction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isNil [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isNull [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isNumberLike [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isObject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isString [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isType [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isUndefined [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isType": () => /* binding */ isType,
/* harmony export */   "isString": () => /* binding */ isString,
/* harmony export */   "isNumber": () => /* binding */ isNumber,
/* harmony export */   "isArray": () => /* binding */ isArray,
/* harmony export */   "isObject": () => /* binding */ isObject,
/* harmony export */   "isFunction": () => /* binding */ isFunction,
/* harmony export */   "isNull": () => /* binding */ isNull,
/* harmony export */   "isUndefined": () => /* binding */ isUndefined,
/* harmony export */   "isNil": () => /* binding */ isNil,
/* harmony export */   "isDef": () => /* binding */ isDef,
/* harmony export */   "isNumberLike": () => /* binding */ isNumberLike,
/* harmony export */   "isFalsy": () => /* binding */ isFalsy
/* harmony export */ });
const toString = Object.prototype.toString;
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
    const type = typeof value;
    return (value !== null && type === "object") || type === "function";
}
function isFunction(value) {
    return isType(value, "Function") || typeof value === "function";
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
 *   const node = isUndefined(undefined);//true
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
 * 是否已定义
 *
 * 新增于v0.0.18
 *
 * 脚本举例
 * ```
 *   import { isDef } from '@tomato-js/shared'
 *   const node = isDef(undefined);//false
 * ```
 *
 * @param val - 需要判断的值
 * @returns 是否为已定义的值
 */
function isDef(val) {
    return !isUndefined(val) && !isNull(val);
}
/**
 * 是否为 数字或字符串数字类型
 *
 * 脚本举例
 * ```
 *   import { isNumberLike } from '@tomato-js/shared'
 *   isNumberLike(‘3’);//true
 *   isNumberLike(3);//true
 * ```
 *
 * @param val - 需要判断的值
 * @returns 是否为数字或字符串数字类型
 */
function isNumberLike(val) {
    return !isNaN(parseFloat(val)) && isFinite(val) && Number(val) == val;
}
/**
 * 是否为falsy类型
 *
 * 脚本举例
 * ```
 *   import { isFalsy } from '@tomato-js/shared'
 *   isFalsy(1);//false
 *   isFalsy('');//true
 * ```
 *
 * @param val - 需要判断的值
 * @returns 是否为数字或字符串数字类型
 */
function isFalsy(val) {
    return !val;
}


/***/ }),

/***/ "./node_modules/@tomato-js/shared/dist/esm/map.js":
/*!********************************************************!*\
  !*** ./node_modules/@tomato-js/shared/dist/esm/map.js ***!
  \********************************************************/
/*! namespace exports */
/*! export map [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "map": () => /* binding */ map
/* harmony export */ });
/* harmony import */ var _is_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-type */ "./node_modules/@tomato-js/shared/dist/esm/is-type.js");
/* harmony import */ var _for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for-each */ "./node_modules/@tomato-js/shared/dist/esm/for-each.js");
/**
 * @packageDocumentation
 * @module @tomato-js/shared
 */


function mapArray(elements, func) {
    const arr = [];
    (0,_for_each__WEBPACK_IMPORTED_MODULE_1__.forEach)(elements, (key, value) => {
        arr.push(func(key, value));
    });
    return arr;
}
function mapObject(elements, func) {
    const obj = {};
    (0,_for_each__WEBPACK_IMPORTED_MODULE_1__.forEach)(elements, (key, value) => {
        obj[key] = func(key, value);
    });
    return obj;
}
/**
 * 遍历对象或数组，返回新对象或数组
 *
 * 脚本举例
 * ```
 *   import { map } from '@tomato-js/shared'
 *   const obj = {
 *     a: 1,
 *     b: 2
 *   };
 *   const obj2 = {};
 *   const arr = [1,2,3,4,5];
 *   map(obj, (k, v) => (obj2[v] = k));
 *   map(arr, (k, v) => v=v+1);//[2,3,4,5,6]
 * ```
 *
 * @param elements - 需要遍历的值
 * @param func - 执行函数
 */
function map(elements, func) {
    if (!elements) {
        return;
    }
    if ((0,_is_type__WEBPACK_IMPORTED_MODULE_0__.isArray)(elements)) {
        return mapArray(elements, func);
    }
    else if ((0,_is_type__WEBPACK_IMPORTED_MODULE_0__.isObject)(elements)) {
        return mapObject(elements, func);
    }
}


/***/ }),

/***/ "./node_modules/@tomato-js/shared/dist/esm/noop.js":
/*!*********************************************************!*\
  !*** ./node_modules/@tomato-js/shared/dist/esm/noop.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export noop [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": () => /* binding */ noop
/* harmony export */ });
/**
 * @packageDocumentation
 * @module @tomato-js/shared
 */
const noop = (...args) => { };


/***/ }),

/***/ "./node_modules/@tomato-js/shared/dist/esm/not.js":
/*!********************************************************!*\
  !*** ./node_modules/@tomato-js/shared/dist/esm/not.js ***!
  \********************************************************/
/*! namespace exports */
/*! export not [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "not": () => /* binding */ not
/* harmony export */ });
/**
 * @packageDocumentation
 * @module @tomato-js/shared
 */
/**
 * 取反
 *
 * 脚本举例
 * ```
 *   import { not } from '@tomato-js/shared'
 *   not(true)//false;
 *   not(false)//true;
 *   not(0)//true;
 *   not(1)//false;
 * ```
 *
 * @param a - 需要取反的值
 * @returns 取反后的值
 */
function not(a) {
    return !a;
}


/***/ }),

/***/ "./node_modules/@tomato-js/shared/dist/esm/regexp.js":
/*!***********************************************************!*\
  !*** ./node_modules/@tomato-js/shared/dist/esm/regexp.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export asReg [provided] [no usage info] [missing usage info prevents renaming] */
/*! export blankReg [provided] [no usage info] [missing usage info prevents renaming] */
/*! export chineseReg [provided] [no usage info] [missing usage info prevents renaming] */
/*! export englishReg [provided] [no usage info] [missing usage info prevents renaming] */
/*! export integerReg [provided] [no usage info] [missing usage info prevents renaming] */
/*! export negativeNumReg [provided] [no usage info] [missing usage info prevents renaming] */
/*! export positiveNumReg [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blankReg": () => /* binding */ blankReg,
/* harmony export */   "asReg": () => /* binding */ asReg,
/* harmony export */   "integerReg": () => /* binding */ integerReg,
/* harmony export */   "positiveNumReg": () => /* binding */ positiveNumReg,
/* harmony export */   "negativeNumReg": () => /* binding */ negativeNumReg,
/* harmony export */   "chineseReg": () => /* binding */ chineseReg,
/* harmony export */   "englishReg": () => /* binding */ englishReg
/* harmony export */ });
/**
 * @packageDocumentation
 * @module @tomato-js/shared
 */
const blankReg = /[\s\r\n]+/gi;
const asReg = /(.+)\sas\s(.+)/gi;
/**
 * 整数
 */
const integerReg = /^(-|\+)?\d+$/;
/**
 * 正整数
 */
const positiveNumReg = /^[1-9]d*$/;
/**
 * 负整数
 */
const negativeNumReg = /^-[1-9]d*$/;
/**
 * 中文汉字
 */
const chineseReg = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/;
/**
 * 英文字母
 */
const englishReg = /^[a-zA-Z]+$/;


/***/ }),

/***/ "./node_modules/@tomato-js/string/dist/esm/camel-case.js":
/*!***************************************************************!*\
  !*** ./node_modules/@tomato-js/string/dist/esm/camel-case.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export camelCase [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelCase": () => /* binding */ camelCase
/* harmony export */ });
/**
 * @packageDocumentation
 * @module @tomato-js/string
 */
/**
 * 字符转为驼峰命名
 *
 * 新增于v0.0.15
 *
 * 脚本举例
 * ```
 *   import { camelCase } from '@tomato-js/string'
 *   camelCase('foo-bar'); // fooBar
 *   camelCase('foo.bar'); // fooBar
 *   camelCase('FooBar'); // fooBar
 *   camelCase('--foo  bar__'); // fooBar
 * ```
 *
 * @param number - 需要转换的阿拉伯数字
 * @returns 转换后的中文字符串
 */
function camelCase(input) {
    input = input
        //首先去除前后干扰字符和空字符串
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
        //给所有除ASCII码以为字符用$占位
        .replace(/[^A-Za-z0-9]+/g, "$")
        //给已有的所有大写前增加$占位
        .replace(/([a-z])([A-Z])/g, (m, a, b) => a + "$" + b)
        .toLowerCase()
        //将占位的后一字符大写
        .replace(/(\$)(\w)/g, (m, a, b) => b.toUpperCase());
    return input;
}


/***/ }),

/***/ "./node_modules/@tomato-js/string/dist/esm/chinese.js":
/*!************************************************************!*\
  !*** ./node_modules/@tomato-js/string/dist/esm/chinese.js ***!
  \************************************************************/
/*! namespace exports */
/*! export float2Chinese [provided] [no usage info] [missing usage info prevents renaming] */
/*! export int2Chinese [provided] [no usage info] [missing usage info prevents renaming] */
/*! export number2Chinese [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "number2Chinese": () => /* binding */ number2Chinese,
/* harmony export */   "int2Chinese": () => /* binding */ int2Chinese,
/* harmony export */   "float2Chinese": () => /* binding */ float2Chinese
/* harmony export */ });
/**
 * @packageDocumentation
 * @module @tomato-js/string
 */
const digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const units = ["", "十", "百", "千", "万", "十", "百", "千", "亿", "十", "百", "千", "兆", "十", "百", "千", "京", "十", "百", "千", "垓"];
const minus = "负";
const point = "点";
/**
 * 阿拉伯数字转中文字符串
 *
 * 脚本举例
 * ```
 *   import { number2Chinese } from '@tomato-js/string'
 *   number2Chinese(110025.06); // 十一万零二十五点零六
 * ```
 *
 * @param number - 需要转换的阿拉伯数字
 * @returns 转换后的中文字符串
 */
function number2Chinese(number) {
    return int2Chinese(number) + float2Chinese(number);
}
/**
 * @ignore
 */
function int2Chinese(number) {
    const zero = digits[0];
    let str = "";
    let n = Math.floor(Math.abs(number));
    //整数部分小于1
    if (n < 1) {
        if (number < 0)
            return `${minus}${zero}`;
        return digits[0];
    }
    const shadowUnits = [...units];
    //从末尾开始一一处理数字转中文
    while (n > 0) {
        let u = shadowUnits.shift();
        let d = n % 10;
        str = `${digits[d]}${u}${str}`;
        n = Math.floor(n / 10);
    }
    //针对各边界值进行处理
    const small = units[1] + units[2] + units[3];
    const big = units[4] + units[8] + units[12] + units[16] + units[20];
    //处理零十零百零千
    str = str.replace(new RegExp("(" + zero + ")[" + small + "]", "g"), "$1");
    //处理 亿零万 这种
    str = str.replace(new RegExp("([" + big + "])[^" + small + "]+([" + big + "])", "g"), "$1" + zero);
    //处理 十零万 这种
    str = str.replace(new RegExp("([" + small + "])" + zero + "+([" + big + "])", "g"), "$1$2" + zero);
    //处理重复的零，零零
    str = str.replace(new RegExp("(" + digits[0] + ")+", "g"), "$1");
    //处理一十为十
    str = str.replace(new RegExp("^" + digits[1] + units[1]), units[1]);
    //处理已零结尾的情况
    str = str.replace(new RegExp(zero + "+$"), "");
    if (number < 0) {
        return `${minus}${str}`;
    }
    return str;
}
/**
 * @ignore
 */
function float2Chinese(number) {
    let str = "";
    if (number % 1 == 0)
        return "";
    //将小数部分提取为整数
    let f = parseInt(Math.abs(number)
        .toString()
        .replace(/\d+./i, "1"));
    //再从末尾逐个处理即可
    while (f > 0) {
        let d = f % 10;
        str = `${digits[d]}${str}`;
        f = Math.floor(f / 10);
    }
    return point + str.replace(new RegExp("^" + digits[1], "i"), "");
}


/***/ }),

/***/ "./node_modules/@tomato-js/string/dist/esm/get-extension.js":
/*!******************************************************************!*\
  !*** ./node_modules/@tomato-js/string/dist/esm/get-extension.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export getExtension [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getExtension": () => /* binding */ getExtension
/* harmony export */ });
/**
 * @packageDocumentation
 * @module @tomato-js/string
 */
/**
 * 获取文件后缀名
 *
 * 新增于v0.0.24
 *
 * 脚本举例
 * ```
 *   import { getExtension } from '@tomato-js/string'
 *   getExtension('myimg/1.png');
 *   //png
 * ```
 */
function getExtension(fileName) {
    const extension = fileName.split(".").pop();
    if (!extension)
        return;
    if (extension.includes("?")) {
        return extension.split("?").shift();
    }
    return extension;
}


/***/ }),

/***/ "./node_modules/@tomato-js/string/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tomato-js/string/dist/esm/index.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export camelCase [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/string/dist/esm/camel-case.js .camelCase */
/*! export float2Chinese [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/string/dist/esm/chinese.js .float2Chinese */
/*! export getExtension [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/string/dist/esm/get-extension.js .getExtension */
/*! export int2Chinese [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/string/dist/esm/chinese.js .int2Chinese */
/*! export isJson [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/string/dist/esm/is-json.js .isJson */
/*! export kebabCase [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/string/dist/esm/kebab-case.js .kebabCase */
/*! export number2Chinese [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/string/dist/esm/chinese.js .number2Chinese */
/*! export random [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/string/dist/esm/random.js .random */
/*! export reverse [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/string/dist/esm/reverse.js .reverse */
/*! export substringFromChar [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/string/dist/esm/substr.js .substringFromChar */
/*! export substringToChar [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/string/dist/esm/substr.js .substringToChar */
/*! export trimAll [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/@tomato-js/string/dist/esm/trim-all.js .trimAll */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelCase": () => /* reexport safe */ _camel_case__WEBPACK_IMPORTED_MODULE_0__.camelCase,
/* harmony export */   "isJson": () => /* reexport safe */ _is_json__WEBPACK_IMPORTED_MODULE_1__.isJson,
/* harmony export */   "kebabCase": () => /* reexport safe */ _kebab_case__WEBPACK_IMPORTED_MODULE_2__.kebabCase,
/* harmony export */   "int2Chinese": () => /* reexport safe */ _chinese__WEBPACK_IMPORTED_MODULE_3__.int2Chinese,
/* harmony export */   "float2Chinese": () => /* reexport safe */ _chinese__WEBPACK_IMPORTED_MODULE_3__.float2Chinese,
/* harmony export */   "number2Chinese": () => /* reexport safe */ _chinese__WEBPACK_IMPORTED_MODULE_3__.number2Chinese,
/* harmony export */   "random": () => /* reexport safe */ _random__WEBPACK_IMPORTED_MODULE_4__.random,
/* harmony export */   "reverse": () => /* reexport safe */ _reverse__WEBPACK_IMPORTED_MODULE_5__.reverse,
/* harmony export */   "substringFromChar": () => /* reexport safe */ _substr__WEBPACK_IMPORTED_MODULE_6__.substringFromChar,
/* harmony export */   "substringToChar": () => /* reexport safe */ _substr__WEBPACK_IMPORTED_MODULE_6__.substringToChar,
/* harmony export */   "trimAll": () => /* reexport safe */ _trim_all__WEBPACK_IMPORTED_MODULE_7__.trimAll,
/* harmony export */   "getExtension": () => /* reexport safe */ _get_extension__WEBPACK_IMPORTED_MODULE_8__.getExtension
/* harmony export */ });
/* harmony import */ var _camel_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camel-case */ "./node_modules/@tomato-js/string/dist/esm/camel-case.js");
/* harmony import */ var _is_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-json */ "./node_modules/@tomato-js/string/dist/esm/is-json.js");
/* harmony import */ var _kebab_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kebab-case */ "./node_modules/@tomato-js/string/dist/esm/kebab-case.js");
/* harmony import */ var _chinese__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chinese */ "./node_modules/@tomato-js/string/dist/esm/chinese.js");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./random */ "./node_modules/@tomato-js/string/dist/esm/random.js");
/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reverse */ "./node_modules/@tomato-js/string/dist/esm/reverse.js");
/* harmony import */ var _substr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./substr */ "./node_modules/@tomato-js/string/dist/esm/substr.js");
/* harmony import */ var _trim_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trim-all */ "./node_modules/@tomato-js/string/dist/esm/trim-all.js");
/* harmony import */ var _get_extension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./get-extension */ "./node_modules/@tomato-js/string/dist/esm/get-extension.js");











/***/ }),

/***/ "./node_modules/@tomato-js/string/dist/esm/is-json.js":
/*!************************************************************!*\
  !*** ./node_modules/@tomato-js/string/dist/esm/is-json.js ***!
  \************************************************************/
/*! namespace exports */
/*! export isJson [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isJson": () => /* binding */ isJson
/* harmony export */ });
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


/***/ }),

/***/ "./node_modules/@tomato-js/string/dist/esm/kebab-case.js":
/*!***************************************************************!*\
  !*** ./node_modules/@tomato-js/string/dist/esm/kebab-case.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export kebabCase [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kebabCase": () => /* binding */ kebabCase
/* harmony export */ });
/**
 * @packageDocumentation
 * @module @tomato-js/string
 */
/**
 * 字符转为短横线命名
 *
 * 新增于v0.0.15
 *
 * 脚本举例
 * ```
 *   import { kebabCase } from '@tomato-js/string'
 *   kebabCase('fooBar'); // foo-bar
 *   kebabCase('foo.bar'); // foo-bar
 *   kebabCase('FooBar'); // foo-bar
 *   kebabCase('--foo  bar__'); // foo-bar
 * ```
 *
 * @param number - 需要转换的阿拉伯数字
 * @returns 转换后的中文字符串
 */
function kebabCase(input) {
    input = input
        //首先去除前后干扰字符和空字符串
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
        //给所有除ASCII码以为字符用$占位
        .replace(/[^A-Za-z0-9]+/g, "$")
        //给已有的所有大写前增加$占位
        .replace(/([a-z])([A-Z])/g, (m, a, b) => a + "$" + b)
        .toLowerCase()
        //将占位的$换成-
        .replace(/\$/g, "-");
    return input;
}


/***/ }),

/***/ "./node_modules/@tomato-js/string/dist/esm/random.js":
/*!***********************************************************!*\
  !*** ./node_modules/@tomato-js/string/dist/esm/random.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export random [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "random": () => /* binding */ random
/* harmony export */ });
/**
 * @packageDocumentation
 * @module @tomato-js/string
 */
/**
 * 随机字符串
 *
 * 新增于v0.0.12
 *
 * 脚本举例
 * ```
 *   import { random } from '@tomato-js/string'
 *   random(3); // '2xK'
 * ```
 *
 * @param length - 字符串长度
 * @returns 随机字符串
 */
function random(length) {
    const characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomChar = () => characterSet[Math.floor(Math.random() * characterSet.length)];
    let text = "";
    let idx = 0;
    while (idx < length) {
        text = text + randomChar();
        idx += 1;
    }
    return text;
}


/***/ }),

/***/ "./node_modules/@tomato-js/string/dist/esm/reverse.js":
/*!************************************************************!*\
  !*** ./node_modules/@tomato-js/string/dist/esm/reverse.js ***!
  \************************************************************/
/*! namespace exports */
/*! export reverse [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reverse": () => /* binding */ reverse
/* harmony export */ });
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
    return [...string].reverse().join("");
}


/***/ }),

/***/ "./node_modules/@tomato-js/string/dist/esm/substr.js":
/*!***********************************************************!*\
  !*** ./node_modules/@tomato-js/string/dist/esm/substr.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export substringFromChar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export substringToChar [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "substringFromChar": () => /* binding */ substringFromChar,
/* harmony export */   "substringToChar": () => /* binding */ substringToChar
/* harmony export */ });
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
function substringFromChar(string, char, options = {
    itself: false
}) {
    const { itself } = options;
    if (string.indexOf(char) === -1)
        return "";
    const indexOfChar = itself ? string.indexOf(char) : string.indexOf(char) + 1;
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
function substringToChar(string, char, options = {
    itself: false
}) {
    const { itself } = options;
    if (string.indexOf(char) === -1)
        return "";
    const indexOfChar = itself ? string.indexOf(char) + 1 : string.indexOf(char);
    return string.substring(0, indexOfChar);
}


/***/ }),

/***/ "./node_modules/@tomato-js/string/dist/esm/trim-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/@tomato-js/string/dist/esm/trim-all.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export trimAll [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trimAll": () => /* binding */ trimAll
/* harmony export */ });
/**
 * @packageDocumentation
 * @module @tomato-js/string
 */
/**
 * 去除字符串中所有空白
 *
 * 新增于v0.0.19
 *
 * 脚本举例
 * ```
 *   import { trimAll } from '@tomato-js/string'
 *   trimAll(' my name is brizer    ');
 *   //mynameisbrizer
 * ```
 */
function trimAll(str) {
    return str.replace(/\s+/g, "");
}


/***/ }),

/***/ "./src/image.js":
/*!**********************!*\
  !*** ./src/image.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tomato_js_preload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tomato-js/preload */ "./node_modules/@tomato-js/preload/dist/esm/index.js");
/* harmony import */ var _tomato_js_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tomato-js/element */ "./node_modules/@tomato-js/element/dist/esm/index.js");




const preload = new _tomato_js_preload__WEBPACK_IMPORTED_MODULE_0__.Preload();
preload.on('complete',()=>{
    console.log('complete load')
})
preload.add('https://edu-image.nosdn.127.net/7d844574f71e424fb6adf9d2cf3c2fd6.jpg');
preload.add('https://edu-image.nosdn.127.net/005c9cd1568d46dda0a84ae812e61d0a.jpg');
preload.add('https://edu-image.nosdn.127.net/eb77031cb5804ad8ad05f2b3e17a5c74.jpg');
preload.add('undefined.jpg');
preload.load();

setTimeout(()=>{
    const img = (0,_tomato_js_element__WEBPACK_IMPORTED_MODULE_1__.create)("img",'img1',document.body);
    const img2 = (0,_tomato_js_element__WEBPACK_IMPORTED_MODULE_1__.create)("img",'img2',document.body);
    const img3 = (0,_tomato_js_element__WEBPACK_IMPORTED_MODULE_1__.create)("img",'img3',document.body);
    img.src = 'https://edu-image.nosdn.127.net/7d844574f71e424fb6adf9d2cf3c2fd6.jpg';
    img2.src = 'https://edu-image.nosdn.127.net/005c9cd1568d46dda0a84ae812e61d0a.jpg';
    img3.src = 'https://edu-image.nosdn.127.net/eb77031cb5804ad8ad05f2b3e17a5c74.jpg';
},5000)

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/image.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVsb2FkLy4vbm9kZV9tb2R1bGVzL0B0b21hdG8tanMvZWxlbWVudC9kaXN0L2VzbS9hZGRTdHlsZS5qcyIsIndlYnBhY2s6Ly9wcmVsb2FkLy4vbm9kZV9tb2R1bGVzL0B0b21hdG8tanMvZWxlbWVudC9kaXN0L2VzbS9ib3R0b20tdmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9wcmVsb2FkLy4vbm9kZV9tb2R1bGVzL0B0b21hdG8tanMvZWxlbWVudC9kaXN0L2VzbS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcHJlbG9hZC8uL25vZGVfbW9kdWxlcy9AdG9tYXRvLWpzL2VsZW1lbnQvZGlzdC9lc20vZ2V0LmpzIiwid2VicGFjazovL3ByZWxvYWQvLi9ub2RlX21vZHVsZXMvQHRvbWF0by1qcy9lbGVtZW50L2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3ByZWxvYWQvLi9ub2RlX21vZHVsZXMvQHRvbWF0by1qcy9lbGVtZW50L2Rpc3QvZXNtL2luc2VydC5qcyIsIndlYnBhY2s6Ly9wcmVsb2FkLy4vbm9kZV9tb2R1bGVzL0B0b21hdG8tanMvZWxlbWVudC9kaXN0L2VzbS9zY3JvbGwtdG8tdG9wLmpzIiwid2VicGFjazovL3ByZWxvYWQvLi9ub2RlX21vZHVsZXMvQHRvbWF0by1qcy9ldmVudHMvZGlzdC9lc20vRXZlbnRzLmpzIiwid2VicGFjazovL3ByZWxvYWQvLi9ub2RlX21vZHVsZXMvQHRvbWF0by1qcy9ldmVudHMvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJlbG9hZC8uL25vZGVfbW9kdWxlcy9AdG9tYXRvLWpzL3ByZWxvYWQvZGlzdC9lc20vUHJlbG9hZC5qcyIsIndlYnBhY2s6Ly9wcmVsb2FkLy4vbm9kZV9tb2R1bGVzL0B0b21hdG8tanMvcHJlbG9hZC9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmVsb2FkLy4vbm9kZV9tb2R1bGVzL0B0b21hdG8tanMvcHJlbG9hZC9kaXN0L2VzbS9sb2FkZXJzL2Jhc2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcHJlbG9hZC8uL25vZGVfbW9kdWxlcy9AdG9tYXRvLWpzL3ByZWxvYWQvZGlzdC9lc20vbG9hZGVycy9pbWdMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcHJlbG9hZC8uL25vZGVfbW9kdWxlcy9AdG9tYXRvLWpzL3NoYXJlZC9kaXN0L2VzbS9mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly9wcmVsb2FkLy4vbm9kZV9tb2R1bGVzL0B0b21hdG8tanMvc2hhcmVkL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3ByZWxvYWQvLi9ub2RlX21vZHVsZXMvQHRvbWF0by1qcy9zaGFyZWQvZGlzdC9lc20vaXMtZW1wdHkuanMiLCJ3ZWJwYWNrOi8vcHJlbG9hZC8uL25vZGVfbW9kdWxlcy9AdG9tYXRvLWpzL3NoYXJlZC9kaXN0L2VzbS9pcy10eXBlLmpzIiwid2VicGFjazovL3ByZWxvYWQvLi9ub2RlX21vZHVsZXMvQHRvbWF0by1qcy9zaGFyZWQvZGlzdC9lc20vbWFwLmpzIiwid2VicGFjazovL3ByZWxvYWQvLi9ub2RlX21vZHVsZXMvQHRvbWF0by1qcy9zaGFyZWQvZGlzdC9lc20vbm9vcC5qcyIsIndlYnBhY2s6Ly9wcmVsb2FkLy4vbm9kZV9tb2R1bGVzL0B0b21hdG8tanMvc2hhcmVkL2Rpc3QvZXNtL25vdC5qcyIsIndlYnBhY2s6Ly9wcmVsb2FkLy4vbm9kZV9tb2R1bGVzL0B0b21hdG8tanMvc2hhcmVkL2Rpc3QvZXNtL3JlZ2V4cC5qcyIsIndlYnBhY2s6Ly9wcmVsb2FkLy4vbm9kZV9tb2R1bGVzL0B0b21hdG8tanMvc3RyaW5nL2Rpc3QvZXNtL2NhbWVsLWNhc2UuanMiLCJ3ZWJwYWNrOi8vcHJlbG9hZC8uL25vZGVfbW9kdWxlcy9AdG9tYXRvLWpzL3N0cmluZy9kaXN0L2VzbS9jaGluZXNlLmpzIiwid2VicGFjazovL3ByZWxvYWQvLi9ub2RlX21vZHVsZXMvQHRvbWF0by1qcy9zdHJpbmcvZGlzdC9lc20vZ2V0LWV4dGVuc2lvbi5qcyIsIndlYnBhY2s6Ly9wcmVsb2FkLy4vbm9kZV9tb2R1bGVzL0B0b21hdG8tanMvc3RyaW5nL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3ByZWxvYWQvLi9ub2RlX21vZHVsZXMvQHRvbWF0by1qcy9zdHJpbmcvZGlzdC9lc20vaXMtanNvbi5qcyIsIndlYnBhY2s6Ly9wcmVsb2FkLy4vbm9kZV9tb2R1bGVzL0B0b21hdG8tanMvc3RyaW5nL2Rpc3QvZXNtL2tlYmFiLWNhc2UuanMiLCJ3ZWJwYWNrOi8vcHJlbG9hZC8uL25vZGVfbW9kdWxlcy9AdG9tYXRvLWpzL3N0cmluZy9kaXN0L2VzbS9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vcHJlbG9hZC8uL25vZGVfbW9kdWxlcy9AdG9tYXRvLWpzL3N0cmluZy9kaXN0L2VzbS9yZXZlcnNlLmpzIiwid2VicGFjazovL3ByZWxvYWQvLi9ub2RlX21vZHVsZXMvQHRvbWF0by1qcy9zdHJpbmcvZGlzdC9lc20vc3Vic3RyLmpzIiwid2VicGFjazovL3ByZWxvYWQvLi9ub2RlX21vZHVsZXMvQHRvbWF0by1qcy9zdHJpbmcvZGlzdC9lc20vdHJpbS1hbGwuanMiLCJ3ZWJwYWNrOi8vcHJlbG9hZC8uL3NyYy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9wcmVsb2FkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ByZWxvYWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ByZWxvYWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcmVsb2FkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJlbG9hZC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDOEI7QUFDSTtBQUNXO0FBQzdDO0FBQ0E7QUFD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Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQzJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNkRBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNB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dCI6WyIvKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBAdG9tYXRvLWpzL2VsZW1lbnRcbiAqL1xuaW1wb3J0IGNyZWF0ZSBmcm9tIFwiLi9jcmVhdGVcIjtcbmltcG9ydCB7IGFwcGVuZCB9IGZyb20gXCIuL2luc2VydFwiO1xuaW1wb3J0IHsgYmxhbmtSZWcgfSBmcm9tIFwiQHRvbWF0by1qcy9zaGFyZWRcIjtcbi8qKlxuICog5aKe5Yqg5LiA5q615qC35byP5YiwaGVhZOW6lemDqFxuICpcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYFxuICogICBpbXBvcnQgeyBhZGRTdHlsZSB9IGZyb20gJ0B0b21hdG8tanMvZWxlbWVudCdcbiAqICAgLy8g5Yib5bu65LiA5q615qC35byP5Yiw6aG16Z2iaGVhZFxuICogICBhZGRTdHlsZSgnYm9keXtiYWNrZ3JvdW5kOnJlZDt9Jyk7XG4gKiAgIC8vIOWIm+W7uuS4gOauteWkmuihjOagt+W8j+WIsOmhtemdomhlYWRcbiAqICAgY29uc3QgY3NzU3RyID0gYGJvZHl7YmFja2dyb3VuZDpyZWQ7fVxuICogICAgICAuY2xhc3MgeyBjb2xvcjpyZWQ7IH1gO1xuICogICBlbGVtZW50LmFkZFN0eWxlKGNzc1N0cik7XG4gKlxuICogYGBgXG4gKlxuICogQHBhcmFtIHN0eWxlQ29udGVudCAtIOagt+W8j+WGheWuuVxuICogQHJldHVybnMg5Yib5bu655qEc3R5bGXoioLngrlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGUoc3R5bGVDb250ZW50ID0gXCJcIikge1xuICAgIGNvbnN0IGNzcyA9IHN0eWxlQ29udGVudC5yZXBsYWNlKGJsYW5rUmVnLCBcIiBcIikudHJpbSgpO1xuICAgIGlmICghY3NzKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3Qgbm9kZSA9IGNyZWF0ZShcInN0eWxlXCIpO1xuICAgIG5vZGUudGV4dENvbnRlbnQgPSBjc3M7XG4gICAgYXBwZW5kKGRvY3VtZW50LmhlYWQsIG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xufVxuIiwiLyoqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqIEBtb2R1bGUgQHRvbWF0by1qcy9lbGVtZW50XG4gKi9cbi8qKlxuICog5Yik5pat6aG16Z2i5piv5ZCm5rua5Yqo5Yiw5bqV6YOoXG4gKlxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgXG4gKiAgIGltcG9ydCB7IGJvdHRvbVZpc2libGUgfSBmcm9tICdAdG9tYXRvLWpzL2VsZW1lbnQnXG4gKiAgIGJvdHRvbVZpc2libGUoKTsvL3RydWVcbiAqIGBgYFxuICpcbiAqIEByZXR1cm5zIOaYr+WQpua7muWKqOWIsOW6lemDqFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib3R0b21WaXNpYmxlKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgPj0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG59XG4iLCJpbXBvcnQgZ2V0IGZyb20gXCIuL2dldFwiO1xuaW1wb3J0IHsgYXBwZW5kIH0gZnJvbSBcIi4vaW5zZXJ0XCI7XG4vKipcbiAqIOWIm+W7umRvbeiKgueCuVxuICpcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYGphdmFzY3JpcHRcbiAqICAgaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnQHRvbWF0by1qcy9lbGVtZW50J1xuICogICAvLyDliJvlu7rkuIDkuKpkaXboioLngrnvvIzmjILliLBib2R55LiKXG4gKiAgIGNyZWF0ZShcImRpdlwiKTtcbiAqICAgLy8g5Yib5bu65LiA5LiqcOiKgueCue+8jOWFtmlk5Li6aWTvvIzmjILliLBpZOaYr2FiY+eahOiKgueCueS4ilxuICogICBjcmVhdGUoXCJwXCIsXCJpZFwiLFwiYWJjXCIpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdGFnTmFtZSAtIOWIm+W7uuiKgueCueeahOagh+etvuWQjeensFxuICogQHBhcmFtIGlkTmFtZSAtIOWIm+W7uuiKgueCueeahGlkXG4gKiBAcGFyYW0gcGFyZW50IC0g5oyC6L2955qE54i26IqC54K577yM6buY6K6k5Li6ZG9jdW1lbnQuYm9keVxuICogQHJldHVybnMg5Yib5bu655qEZG9t6IqC54K5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZSh0YWdOYW1lLCBpZE5hbWUsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIGNvbnN0IFRhZ01hcCA9IHtcbiAgICAgICAgYTogeyBocmVmOiBcIiNcIiwgaGlkZUZvY3VzOiAhMCB9LFxuICAgICAgICBzdHlsZTogeyB0eXBlOiBcInRleHQvY3NzXCIgfSxcbiAgICAgICAgbGluazogeyB0eXBlOiBcInRleHQvY3NzXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSxcbiAgICAgICAgaWZyYW1lOiB7IGZyYW1lQm9yZGVyOiAwIH0sXG4gICAgICAgIHNjcmlwdDogeyBkZWZlcjogITAsIHR5cGU6IFwidGV4dC9qYXZhc2NyaXB0XCIgfVxuICAgIH07XG4gICAgY29uc3QgY29uZmlnID0gVGFnTWFwW3RhZ05hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgY29uc3QgY3JlYXRlZEVsZW1lbnQgPSBPYmplY3QuYXNzaWduKGVsZW1lbnQsIGNvbmZpZyk7XG4gICAgaWYgKGlkTmFtZSlcbiAgICAgICAgY3JlYXRlZEVsZW1lbnQuaWQgPSBpZE5hbWU7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZWRFbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnROb2RlID0gZ2V0KHBhcmVudCk7XG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgYXBwZW5kKHBhcmVudE5vZGUsIGNyZWF0ZWRFbGVtZW50KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFwcGVuZChkb2N1bWVudC5ib2R5LCBjcmVhdGVkRWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVkRWxlbWVudDtcbn1cbiIsIi8qKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKiBAbW9kdWxlIEB0b21hdG8tanMvZWxlbWVudFxuICovXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCJAdG9tYXRvLWpzL3NoYXJlZFwiO1xuLyoqXG4gKiDojrflj5Zkb23oioLngrlcbiAqXG4gKlxuICog57uT5p6E5Li+5L6LXG4gKiBgYGBodG1sXG4gKiAgIDxkaXYgaWQ9XCJhYmNcIj4xMjM8L2Rpdj5cbiAqICAgPGRpdiBjbGFzcz1cImotYWJjXCI+MTIzPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYGphdmFzY3JpcHRcbiAqICAgaW1wb3J0IHsgZ2V0IH0gZnJvbSAnQHRvbWF0by1qcy9lbGVtZW50J1xuICogICBjb25zdCBub2RlID0gZ2V0KCdhYmMnKTtcbiAqICAgY29uc3Qgbm9kZTIgPSBnZXQoJy5qLWFiYycpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHN0ciAtIGlk5oiW6ICF5piv5o+Q5L6b57uZcXVlcnnnmoTlrZfnrKbkuLJcbiAqIEByZXR1cm5zIOiOt+WPluWIsOeahGRvbeiKgueCuVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXQoc3RyKSB7XG4gICAgaWYgKCFzdHIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghaXNTdHJpbmcoc3RyKSkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0cik7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGFkZFN0eWxlIH0gZnJvbSBcIi4vYWRkU3R5bGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYm90dG9tVmlzaWJsZSB9IGZyb20gXCIuL2JvdHRvbS12aXNpYmxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZSB9IGZyb20gXCIuL2NyZWF0ZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXQgfSBmcm9tIFwiLi9nZXRcIjtcbmV4cG9ydCB7IGFwcGVuZCwgcHJlcGVuZCwgaW5zZXJ0QWZ0ZXIsIGluc2VydEJlZm9yZSB9IGZyb20gXCIuL2luc2VydFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY3JvbGxUb1RvcCB9IGZyb20gXCIuL3Njcm9sbC10by10b3BcIjtcbiIsIi8qKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKiBAbW9kdWxlIEB0b21hdG8tanMvZWxlbWVudFxuICovXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCJAdG9tYXRvLWpzL3NoYXJlZFwiO1xuaW1wb3J0IGdldCBmcm9tIFwiLi9nZXRcIjtcbmNvbnN0IGRpcmVjdEhhbmRsZXIgPSB7XG4gICAgdG9wOiBmdW5jdGlvbiAob3JpZ2luLCB0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RDaGlsZCA9IG9yaWdpbi5maXJzdENoaWxkO1xuICAgICAgICBvcmlnaW4uaW5zZXJ0QmVmb3JlKHRhcmdldCwgZmlyc3RDaGlsZCk7XG4gICAgfSxcbiAgICBib3R0b206IGZ1bmN0aW9uIChvcmlnaW4sIHRhcmdldCkge1xuICAgICAgICBvcmlnaW4uYXBwZW5kQ2hpbGQodGFyZ2V0KTtcbiAgICB9LFxuICAgIGJlZm9yZTogZnVuY3Rpb24gKG9yaWdpbiwgdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG9yaWdpbi5wYXJlbnROb2RlO1xuICAgICAgICBpZiAocGFyZW50KVxuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIG9yaWdpbik7XG4gICAgfSxcbiAgICBhZnRlcjogZnVuY3Rpb24gKG9yaWdpbiwgdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG9yaWdpbi5wYXJlbnROb2RlO1xuICAgICAgICBpZiAocGFyZW50KVxuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIG9yaWdpbi5uZXh0U2libGluZyk7XG4gICAgfVxufTtcbmZ1bmN0aW9uIGluc2VydChvcmlnaW4sIHRhcmdldCwgZGlyZWN0ID0gXCJib3R0b21cIikge1xuICAgIGNvbnN0IG9yaWdpbk5vZGUgPSBpc1N0cmluZyhvcmlnaW4pID8gZ2V0KG9yaWdpbikgOiBvcmlnaW47XG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGlzU3RyaW5nKHRhcmdldCkgPyBnZXQodGFyZ2V0KSA6IHRhcmdldDtcbiAgICBkaXJlY3RIYW5kbGVyW2RpcmVjdF0ob3JpZ2luTm9kZSwgdGFyZ2V0Tm9kZSk7XG59XG4vKipcbiAqIOaPkuWFpeiKgueCuULliLDoioLngrlB5YaF6YOo55qE5bqV6YOoXG4gKlxuICog6ISa5pys5Li+5L6LXG4gKiBgYGBcbiAqICAgaW1wb3J0IHsgYXBwZW5kIH0gZnJvbSAnQHRvbWF0by1qcy9lbGVtZW50J1xuICogICBjb25zdCBkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gKiAgIGRvbS5pbm5lckhUTUw9J2l0IGlzIHAnO1xuICogICBhcHBlbmQoJ2FiYycsZG9tKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBBIC0g6IqC54K5QVxuICogQHBhcmFtIEIgLSDoioLngrlCXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmQoQSwgQikge1xuICAgIGluc2VydChBLCBCKTtcbn1cbi8qKlxuICog5o+S5YWl6IqC54K5QuWIsOiKgueCuUHlhoXpg6jnmoTpobbpg6hcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYGphdmFzY3JpcHRcbiAqICAgaW1wb3J0IHsgcHJlcGVuZCB9IGZyb20gJ0B0b21hdG8tanMvZWxlbWVudCdcbiAqICAgY29uc3QgZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICogICBkb20uaW5uZXJIVE1MPSdpdCBpcyBwJztcbiAqICAgYXBwZW5kKCdhYmMnLGRvbSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gQSAtIOiKgueCuUFcbiAqIEBwYXJhbSBCIC0g6IqC54K5QlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZChBLCBCKSB7XG4gICAgaW5zZXJ0KEEsIEIsIFwidG9wXCIpO1xufVxuLyoqXG4gKiDmj5LlhaXoioLngrlC5Yiw6IqC54K5QeeahOS4iumdolxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgamF2YXNjcmlwdFxuICogICBpbXBvcnQgeyBpbnNlcnRCZWZvcmUgfSBmcm9tICdAdG9tYXRvLWpzL2VsZW1lbnQnXG4gKiAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAqICAgZG9tLmlubmVySFRNTD0naXQgaXMgcCc7XG4gKiAgIGFwcGVuZCgnYWJjJyxkb20pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIEEgLSDoioLngrlBXG4gKiBAcGFyYW0gQiAtIOiKgueCuUJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEJlZm9yZShBLCBCKSB7XG4gICAgaW5zZXJ0KEEsIEIsIFwiYmVmb3JlXCIpO1xufVxuLyoqXG4gKiDmj5LlhaXoioLngrlC5Yiw6IqC54K5QeeahOS4i+mdolxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgamF2YXNjcmlwdFxuICogICBpbXBvcnQgeyBpbnNlcnRCZWZvcmUgfSBmcm9tICdAdG9tYXRvLWpzL2VsZW1lbnQnXG4gKiAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAqICAgZG9tLmlubmVySFRNTD0naXQgaXMgcCc7XG4gKiAgIGFwcGVuZCgnYWJjJyxkb20pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIEEgLSDoioLngrlBXG4gKiBAcGFyYW0gQiAtIOiKgueCuUJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKEEsIEIpIHtcbiAgICBpbnNlcnQoQSwgQiwgXCJhZnRlclwiKTtcbn1cbiIsIi8qKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKiBAbW9kdWxlIEB0b21hdG8tanMvZWxlbWVudFxuICovXG4vKipcbiAqIOW5s+a7keeahOa7muWKqOWIsOmhtemdoueahOmhtumDqFxuICpcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYFxuICogICBpbXBvcnQgeyBzY3JvbGxUb1RvcCB9IGZyb20gJ0B0b21hdG8tanMvZWxlbWVudCdcbiAqICAgc2Nyb2xsVG9Ub3AoKTtcbiAqIGBgYFxuICpcbiAqIEByZXR1cm5zIOaYr+WQpua7muWKqOWIsOW6lemDqFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zdCBjID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICBpZiAoYyA+IDApIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGxUb1RvcCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBjIC0gYyAvIDgpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKiBAbW9kdWxlIEB0b21hdG8tanMvZXZlbnRzXG4gKi9cbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzTmlsLCBtYXAgfSBmcm9tIFwiQHRvbWF0by1qcy9zaGFyZWRcIjtcbi8qKlxuICogRXZlbnRz5LqL5Lu26YCa5L+h57G7XG4gKlxuICog5paw5aKe5LqOdjAuMC4xOFxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgXG4gKiAgIGltcG9ydCB7IEV2ZW50cyB9IGZyb20gJ0B0b21hdG8tanMvZXZlbnRzJztcbiAqICAgY29uc3QgZSA9IG5ldyBFdmVudHMoKTtcbiAqICAgZS5vbignZm9vJyxkYXRhPT5kYXRhKTtcbiAqICAgZS5vbmNlKCdmb28nLGRhdGE9PmRhdGEpOy8v5Y+q55uR5ZCs5LiA5qyhXG4gKiAgIGUuZW1pdCgnZm9vJywnYmFyJylcbiAqICAgZS5jbGVhcignZm9vJykvL+a4hemZpOS6i+S7tlxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5ldmVudHNDb3VudCA9IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOazqOWGjOS6i+S7tlxuICAgICAqXG4gICAgICog5paw5aKe5LqOdjAuMC4xOFxuICAgICAqXG4gICAgICog6ISa5pys5Li+5L6LXG4gICAgICogYGBgXG4gICAgICogICBpbXBvcnQgeyBFdmVudHMgfSBmcm9tICdAdG9tYXRvLWpzL2V2ZW50cydcbiAgICAgKiAgIGNvbnN0IGUgPSBuZXcgRXZlbnRzKCk7XG4gICAgICogICBmdW5jdGlvbiBmb28oKSB7fVxuICAgICAqICAgZnVuY3Rpb24gYmFyKCkge31cbiAgICAgKiAgIGZ1bmN0aW9uIGJheigpIHt9XG4gICAgICogICBlLm9uKCdmb28nLCBmb28pO1xuICAgICAqICAgZS5vbignYmFyJywgYmFyKTtcbiAgICAgKiAgIGUub24oJ2JhcicsIGJheik7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgLSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0gZm4gLSDkuovku7blm57osIPlh73mlbBcbiAgICAgKiBAcmV0dXJucyDml6BcbiAgICAgKi9cbiAgICBvbihldmVudCwgZm4sIGNvbnRleHQgPSB0aGlzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBjb250ZXh0LCBmYWxzZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOazqOWGjOS6i+S7tu+8jOWPquWTjeW6lOS4gOasoVxuICAgICAqXG4gICAgICog5paw5aKe5LqOdjAuMC4xOFxuICAgICAqXG4gICAgICog6ISa5pys5Li+5L6LXG4gICAgICogYGBgXG4gICAgICogICBpbXBvcnQgeyBFdmVudHMgfSBmcm9tICdAdG9tYXRvLWpzL2V2ZW50cydcbiAgICAgKiAgIGNvbnN0IGUgPSBuZXcgRXZlbnRzKCk7XG4gICAgICogICBmdW5jdGlvbiBmb28oKSB7fVxuICAgICAqICAgZnVuY3Rpb24gYmFyKCkge31cbiAgICAgKiAgIGZ1bmN0aW9uIGJheigpIHt9XG4gICAgICogICBlLm9uY2UoJ2ZvbycsIGZvbyk7XG4gICAgICogICBlLm9uY2UoJ2JhcicsIGJhcik7XG4gICAgICogICBlLm9uY2UoJ2JhcicsIGJheik7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgLSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0gZm4gLSDkuovku7blm57osIPlh73mlbBcbiAgICAgKiBAcmV0dXJucyDml6BcbiAgICAgKi9cbiAgICBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCA9IHRoaXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sIGNvbnRleHQsIHRydWUpO1xuICAgIH1cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5ldmVudHMuZ2V0KGV2ZW50KSB8fCBbXTtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgZm4sXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgb25jZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudHNDb3VudCsrO1xuICAgICAgICB0aGlzLmV2ZW50cy5zZXQoZXZlbnQsIGxpc3RlbmVycyk7XG4gICAgfVxuICAgIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbikge1xuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzLmhhcyhldmVudCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGFscmVhZHlMaXN0ZW5lcnMgPSB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpIHx8IFtdO1xuICAgICAgICBsZXQgbmV3TGlzdGVuZXJzID0gW107XG4gICAgICAgIGlmIChpc05pbChmbikpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmRlbGV0ZShldmVudCk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c0NvdW50ID0gdGhpcy5ldmVudHNDb3VudCAtIGFscmVhZHlMaXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3TGlzdGVuZXJzID0gYWxyZWFkeUxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmZuICE9PSBmbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG5ld0xpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5kZWxldGUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzQ291bnQgPSB0aGlzLmV2ZW50c0NvdW50IC0gYWxyZWFkeUxpc3RlbmVycy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5zZXQoZXZlbnQsIG5ld0xpc3RlbmVycyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHNDb3VudCA9IHRoaXMuZXZlbnRzQ291bnQgLSAoYWxyZWFkeUxpc3RlbmVycy5sZW5ndGggLSBuZXdMaXN0ZW5lcnMubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6Kem5Y+R5LqL5Lu2XG4gICAgICpcbiAgICAgKiDmlrDlop7kuo52MC4wLjE4XG4gICAgICpcbiAgICAgKiDohJrmnKzkuL7kvotcbiAgICAgKiBgYGBcbiAgICAgKiAgIGltcG9ydCB7IEV2ZW50cyB9IGZyb20gJ0B0b21hdG8tanMvZXZlbnRzJ1xuICAgICAqICAgY29uc3QgZSA9IG5ldyBFdmVudHMoKTtcbiAgICAgKiAgIGZ1bmN0aW9uIGZvbygpIHt9XG4gICAgICogICBmdW5jdGlvbiBiYXIoKSB7fVxuICAgICAqICAgZnVuY3Rpb24gYmF6KCkge31cbiAgICAgKiAgIGUub24oJ2ZvbycsIGZvbyk7XG4gICAgICogICBlLm9uKCdiYXInLCBiYXIpO1xuICAgICAqICAgZS5vbignYmFyJywgYmF6KTtcbiAgICAgKiAgIGUuZW1pdCgnYmFyJyk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgLSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0gYXJncyAtIOmAj+S8oOWJqeS9meWPguaVsFxuICAgICAqIEByZXR1cm5zIOaXoFxuICAgICAqL1xuICAgIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50cy5oYXMoZXZlbnQpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpO1xuICAgICAgICBsaXN0ZW5lcnM/Lm1hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXI/LmZuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyLm9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIuZm4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5mbi5jYWxsKGxpc3RlbmVyLmNvbnRleHQsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5LqL5Lu25Ye95pWw5YiX6KGoXG4gICAgICpcbiAgICAgKiDmlrDlop7kuo52MC4wLjE4XG4gICAgICpcbiAgICAgKiDohJrmnKzkuL7kvotcbiAgICAgKiBgYGBcbiAgICAgKiAgIGltcG9ydCB7IEV2ZW50cyB9IGZyb20gJ0B0b21hdG8tanMvZXZlbnRzJ1xuICAgICAqICAgY29uc3QgZSA9IG5ldyBFdmVudHMoKTtcbiAgICAgKiAgIGZ1bmN0aW9uIGZvbygpIHt9XG4gICAgICogICBmdW5jdGlvbiBiYXIoKSB7fVxuICAgICAqICAgZnVuY3Rpb24gYmF6KCkge31cbiAgICAgKiAgIGUub24oJ2ZvbycsIGZvbyk7XG4gICAgICogICBlLm9uKCdiYXInLCBiYXIpO1xuICAgICAqICAgZS5vbignYmFyJywgYmF6KTtcbiAgICAgKiAgIGUubGlzdGVuZXJzKCdiYXInKVxuICAgICAqICAgLy9bYmFyLGJhel1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCAtIOS6i+S7tuWQjeensFxuICAgICAqIEByZXR1cm5zIOaJp+ihjOWHveaVsOWIl+ihqFxuICAgICAqL1xuICAgIGxpc3RlbmVycyhldmVudCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpIHx8IFtdO1xuICAgICAgICByZXR1cm4gbWFwKGxpc3RlbmVycywgKGluZGV4LCBsaXN0ZW5lcikgPT4gbGlzdGVuZXIuZm4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmuIXpmaTkuovku7ZcbiAgICAgKlxuICAgICAqIOaWsOWinuS6jnYwLjAuMThcbiAgICAgKlxuICAgICAqIOiEmuacrOS4vuS+i1xuICAgICAqIGBgYFxuICAgICAqICAgaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnQHRvbWF0by1qcy9ldmVudHMnXG4gICAgICogICBjb25zdCBlID0gbmV3IEV2ZW50cygpO1xuICAgICAqICAgZnVuY3Rpb24gZm9vKCkge31cbiAgICAgKiAgIGZ1bmN0aW9uIGJhcigpIHt9XG4gICAgICogICBmdW5jdGlvbiBiYXooKSB7fVxuICAgICAqICAgZS5vbignZm9vJywgZm9vKTtcbiAgICAgKiAgIGUub24oJ2JhcicsIGJhcik7XG4gICAgICogICBlLm9uKCdiYXInLCBiYXopO1xuICAgICAqICAgZS5jbGVhcignZm9vJyk7Ly/muIXpmaTkuIDkuKprZXnkuIrmiYDmnInkuovku7blm57osINcbiAgICAgKiAgIGUuY2xlYXIoJ2JhcicsYmFyKTsvL+a4hemZpOS4gOS4qmtleeS4iuaMh+WumuS6i+S7tuWbnuiwg1xuICAgICAqICAgZS5jbGVhcigpOy8v5riF6Zmk5omA5pyJa2V55omA5pyJ5LqL5Lu25Zue6LCDXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgLSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0gZm4gLSDkuovku7blm57osIPlh73mlbBcbiAgICAgKiBAcmV0dXJucyDml6BcbiAgICAgKi9cbiAgICBjbGVhcihldmVudCwgZm4pIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyQWxsKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmuIXpmaTmiYDmnInkuovku7ZcbiAgICAgKlxuICAgICAqIOaWsOWinuS6jnYwLjAuMThcbiAgICAgKlxuICAgICAqIOiEmuacrOS4vuS+i1xuICAgICAqIGBgYFxuICAgICAqICAgaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnQHRvbWF0by1qcy9ldmVudHMnXG4gICAgICogICBjb25zdCBlID0gbmV3IEV2ZW50cygpO1xuICAgICAqICAgZnVuY3Rpb24gZm9vKCkge31cbiAgICAgKiAgIGZ1bmN0aW9uIGJhcigpIHt9XG4gICAgICogICBmdW5jdGlvbiBiYXooKSB7fVxuICAgICAqICAgZS5vbignZm9vJywgZm9vKTtcbiAgICAgKiAgIGUub24oJ2JhcicsIGJhcik7XG4gICAgICogICBlLm9uKCdiYXInLCBiYXopO1xuICAgICAqICAgZS5jbGVhckFsbCgpOy8v5riF6Zmk5omA5pyJa2V55omA5pyJ5LqL5Lu25Zue6LCDXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgLSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0gZm4gLSDkuovku7blm57osIPlh73mlbBcbiAgICAgKiBAcmV0dXJucyDml6BcbiAgICAgKi9cbiAgICBjbGVhckFsbCgpIHtcbiAgICAgICAgdGhpcy5ldmVudHMuY2xlYXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5LqL5Lu25Zue6LCD5oC75pWwXG4gICAgICpcbiAgICAgKiDmlrDlop7kuo52MC4wLjE4XG4gICAgICpcbiAgICAgKiDohJrmnKzkuL7kvotcbiAgICAgKiBgYGBcbiAgICAgKiAgIGltcG9ydCB7IEV2ZW50cyB9IGZyb20gJ0B0b21hdG8tanMvZXZlbnRzJ1xuICAgICAqICAgY29uc3QgZSA9IG5ldyBFdmVudHMoKTtcbiAgICAgKiAgIGZ1bmN0aW9uIGZvbygpIHt9XG4gICAgICogICBmdW5jdGlvbiBiYXIoKSB7fVxuICAgICAqICAgZnVuY3Rpb24gYmF6KCkge31cbiAgICAgKiAgIGUub24oJ2ZvbycsIGZvbyk7XG4gICAgICogICBlLm9uKCdiYXInLCBiYXIpO1xuICAgICAqICAgZS5vbignYmFyJywgYmF6KTtcbiAgICAgKiAgIGUuc2l6ZSgpXG4gICAgICogICAvLzNcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIOS6i+S7tuWbnuiwg+aAu+aVsFxuICAgICAqL1xuICAgIHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50c0NvdW50O1xuICAgIH1cbn1cbiIsImV4cG9ydCB7IEV2ZW50cyB9IGZyb20gXCIuL0V2ZW50c1wiO1xuIiwiLyoqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqIEBtb2R1bGUgQHRvbWF0by1qcy9wcmVsb2FkXG4gKi9cbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gXCJAdG9tYXRvLWpzL2V2ZW50c1wiO1xuaW1wb3J0IHsgaXNOaWwgfSBmcm9tIFwiQHRvbWF0by1qcy9zaGFyZWRcIjtcbmltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSBcIi4vbG9hZGVycy9pbWdMb2FkZXJcIjtcbmltcG9ydCB7IGdldEV4dGVuc2lvbiB9IGZyb20gXCJAdG9tYXRvLWpzL3N0cmluZ1wiO1xuY29uc3QgTE9BREVSU19TVFJBVEVHWSA9IHtcbiAgICBwbmc6IEltYWdlTG9hZGVyLFxuICAgIGpwZzogSW1hZ2VMb2FkZXIsXG4gICAganBlZzogSW1hZ2VMb2FkZXIsXG4gICAgd2VicDogSW1hZ2VMb2FkZXIsXG4gICAgZ2lmOiBJbWFnZUxvYWRlclxufTtcbi8qKlxuICog6aKE5Yqg6L2957G777yM55uu5YmN5Y+q5pSv5oyBaW1hZ2XnsbvlnotcbiAqXG4gKiDmlrDlop7kuo52MC4wLjI0XG4gKlxuICog6ISa5pys5Li+5L6LXG4gKiBgYGBcbiAqICAgaW1wb3J0IHsgUHJlbG9hZCB9IGZyb20gJ0B0b21hdG8tanMvcHJlbG9hZCc7XG4gKiAgIGNvbnN0IHAgPSBuZXcgUHJlbG9hZCgpO1xuICogICBwLm9uKCdjb21wbGV0ZScsKCk9PmNvbnNvbGUubG9nKCdmaW5pc2hlZCcpKTtcbiAqICAgcC5hZGQoJzEucG5nJylcbiAqICAgcC5hZGQoJzIuanBnJylcbiAqICAgcC5hZGQoJzMud2VicCcpXG4gKiAgIHAubG9hZCgpLy/lvIDlp4vliqDovb1cbiAqICAgLy/liqDovb3lrozmiJDlkI5maW5pc2hlZFxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmVsb2FkIGV4dGVuZHMgRXZlbnRzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9hZGVycyA9IHt9O1xuICAgICAgICB0aGlzLnVybHMgPSBbXTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZElkeCA9IDA7XG4gICAgICAgIHRoaXMuc3RhdHVzID0ge307XG4gICAgfVxuICAgIGdldExvYWRlcih1cmwpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZ2V0RXh0ZW5zaW9uKHVybCk7XG4gICAgICAgIGlmIChpc05pbChleHRlbnNpb24pKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBsb2FkZXIgPSBMT0FERVJTX1NUUkFURUdZW2V4dGVuc2lvbi50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgcmV0dXJuIGxvYWRlcjtcbiAgICB9XG4gICAgaW5pdExvYWRlcih1cmwsIGxvYWRlcikge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGVyc1t1cmxdKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlcnNbdXJsXSA9IG5ldyBsb2FkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXJscy5wdXNoKHVybCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29udGludWVMb2FkUXVldWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRJZHggPCB0aGlzLnVybHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnVybHNbdGhpcy5sb2FkSWR4XTtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlciA9IHRoaXMubG9hZGVyc1t1cmxdO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNbdXJsXSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sb2FkSWR4Kys7XG4gICAgICAgICAgICBsb2FkZXIub25jZShcImVycm9yXCIsIHRoaXMub25Mb2FkRXJyb3IuYmluZCh0aGlzLCB1cmwpKTtcbiAgICAgICAgICAgIGxvYWRlci5vbmNlKFwiY29tcGxldGVcIiwgdGhpcy5vbkxvYWRDb21wbGV0ZS5iaW5kKHRoaXMsIHVybCkpO1xuICAgICAgICAgICAgbG9hZGVyLmxvYWQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNoZWNrQ29tcGxldGUoKSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tDb21wbGV0ZSgpIHtcbiAgICAgICAgbGV0IGxvYWRlZCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IHVybCBvZiB0aGlzLnVybHMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0dXNbdXJsXSlcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9hZGVkO1xuICAgIH1cbiAgICBvbkxvYWRFcnJvcih1cmwsIGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkNvdWxkbid0IGxvYWQgXCIgKyB1cmwgKyBcIiByZWNlaXZlZCB0aGUgZXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICB0aGlzLnN0YXR1c1t1cmxdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250aW51ZUxvYWRRdWV1ZSgpO1xuICAgIH1cbiAgICBvbkxvYWRDb21wbGV0ZSh1cmwpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNbdXJsXSA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGludWVMb2FkUXVldWUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5bCG6LWE5rqQ5Yqg5YWl5Yqg6L295YiX6KGoXG4gICAgICpcbiAgICAgKiDmlrDlop7kuo52MC4wLjI0XG4gICAgICpcbiAgICAgKiDohJrmnKzkuL7kvotcbiAgICAgKiBgYGBcbiAgICAgKiAgIGltcG9ydCB7IFByZWxvYWQgfSBmcm9tICdAdG9tYXRvLWpzL3ByZWxvYWQnO1xuICAgICAqICAgY29uc3QgcCA9IG5ldyBQcmVsb2FkKCk7XG4gICAgICogICBwLm9uKCdjb21wbGV0ZScsKCk9PmNvbnNvbGUubG9nKCdmaW5pc2hlZCcpKTtcbiAgICAgKiAgIHAuYWRkKCcxLnBuZycpXG4gICAgICogICBwLmFkZCgnMi5qcGcnKVxuICAgICAqICAgcC5hZGQoJzMud2VicCcpXG4gICAgICogICBwLmxvYWQoKS8v5byA5aeL5Yqg6L29XG4gICAgICogICAvL+WKoOi9veWujOaIkOWQjmZpbmlzaGVkXG4gICAgICogYGBgXG4gICAgICovXG4gICAgYWRkKHVybCkge1xuICAgICAgICBpZiAoaXNOaWwodXJsKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gdGhpcy5nZXRMb2FkZXIodXJsKTtcbiAgICAgICAgaWYgKGlzTmlsKGxvYWRlcikpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuaW5pdExvYWRlcih1cmwsIGxvYWRlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWwhuWbvueJh+i1hOa6kOWKoOWFpeWKoOi9veWIl+ihqFxuICAgICAqXG4gICAgICog5paw5aKe5LqOdjAuMC4yNFxuICAgICAqXG4gICAgICog6ISa5pys5Li+5L6LXG4gICAgICogYGBgXG4gICAgICogICBpbXBvcnQgeyBQcmVsb2FkIH0gZnJvbSAnQHRvbWF0by1qcy9wcmVsb2FkJztcbiAgICAgKiAgIGNvbnN0IHAgPSBuZXcgUHJlbG9hZCgpO1xuICAgICAqICAgcC5vbignY29tcGxldGUnLCgpPT5jb25zb2xlLmxvZygnZmluaXNoZWQnKSk7XG4gICAgICogICBwLmFkZEltYWdlKCcxLnBuZycpXG4gICAgICogICBwLmFkZEltYWdlKCcyLmpwZycpXG4gICAgICogICBwLmFkZEltYWdlKCczLndlYnAnKVxuICAgICAqICAgcC5sb2FkKCkvL+W8gOWni+WKoOi9vVxuICAgICAqICAgLy/liqDovb3lrozmiJDlkI5maW5pc2hlZFxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGFkZEltYWdlKHVybCkge1xuICAgICAgICBpZiAoaXNOaWwodXJsKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5pbml0TG9hZGVyKHVybCwgSW1hZ2VMb2FkZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlvIDlp4vliqDovb1cbiAgICAgKlxuICAgICAqIOaWsOWinuS6jnYwLjAuMjRcbiAgICAgKlxuICAgICAqIOiEmuacrOS4vuS+i1xuICAgICAqIGBgYFxuICAgICAqICAgaW1wb3J0IHsgUHJlbG9hZCB9IGZyb20gJ0B0b21hdG8tanMvcHJlbG9hZCc7XG4gICAgICogICBjb25zdCBwID0gbmV3IFByZWxvYWQoKTtcbiAgICAgKiAgIHAub24oJ2NvbXBsZXRlJywoKT0+Y29uc29sZS5sb2coJ2ZpbmlzaGVkJykpO1xuICAgICAqICAgcC5hZGQoJzEucG5nJylcbiAgICAgKiAgIHAuYWRkKCcyLmpwZycpXG4gICAgICogICBwLmFkZCgnMy53ZWJwJylcbiAgICAgKiAgIHAubG9hZCgpLy/lvIDlp4vliqDovb1cbiAgICAgKiAgIC8v5Yqg6L295a6M5oiQ5ZCOZmluaXNoZWRcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBsb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmb3IgKGNvbnN0IHVybCBvZiB0aGlzLnVybHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGludWVMb2FkUXVldWUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCB7IFByZWxvYWQgfSBmcm9tIFwiLi9QcmVsb2FkXCI7XG4iLCIvKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBAdG9tYXRvLWpzL3ByZWxvYWRcbiAqL1xuaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSBcIkB0b21hdG8tanMvZXZlbnRzXCI7XG4vKipcbiAqIExvYWRlcuWfuuexu1xuICpcbiAqIOaWsOWinuS6jnYwLjAuMjRcbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VMb2FkZXIgZXh0ZW5kcyBFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKGxvYWRUeXBlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IG51bGw7XG4gICAgfVxuICAgIGRpc3BhdGNoQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuZW1pdChcImNvbXBsZXRlXCIsIHRoaXMuY29udGVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXJyb3IobXNnKSB7XG4gICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG1zZyk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqIEBtb2R1bGUgQHRvbWF0by1qcy9wcmVsb2FkXG4gKi9cbmltcG9ydCB7IEJhc2VMb2FkZXIgfSBmcm9tIFwiLi9iYXNlTG9hZGVyXCI7XG4vKipcbiAqIEltYWdlTG9hZGVy57G7XG4gKlxuICog5paw5aKe5LqOdjAuMC4yNFxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIgZXh0ZW5kcyBCYXNlTG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJpbWFnZVwiKTtcbiAgICAgICAgdGhpcy5pbWFnZUxvYWRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBkaXNwYXRjaENvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZUxvYWRlZCkge1xuICAgICAgICAgICAgc3VwZXIuZGlzcGF0Y2hDb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUFuZExvYWRJbWFnZSh1cmwpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuY29udGVudC5vbmxvYWQgPSB0aGlzLm9uSW1hZ2VMb2FkQ29tcGxldGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb250ZW50Lm9uZXJyb3IgPSB0aGlzLm9uSW1hZ2VMb2FkRmFpbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuc3JjID0gdXJsO1xuICAgIH1cbiAgICBvbkltYWdlTG9hZENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmltYWdlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaENvbXBsZXRlKCk7XG4gICAgfVxuICAgIG9uSW1hZ2VMb2FkRmFpbCgpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEVycm9yKFwiSW1hZ2UgZmFpbGVkIHRvIGxvYWRcIik7XG4gICAgfVxuICAgIGxvYWQodXJsKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQW5kTG9hZEltYWdlKHVybCk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqIEBtb2R1bGUgQHRvbWF0by1qcy9zaGFyZWRcbiAqL1xuaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QgfSBmcm9tIFwiLi9pcy10eXBlXCI7XG5mdW5jdGlvbiBmb3JFYWNoQXJyYXkoZWxlbWVudHMsIGZ1bmMpIHtcbiAgICBsZXQgcnN0O1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICByc3QgPSBmdW5jKGksIGVsZW1lbnRzW2ldKTtcbiAgICAgICAgaWYgKHJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZm9yRWFjaE9iamVjdChlbGVtZW50cywgZnVuYykge1xuICAgIGxldCByc3Q7XG4gICAgZm9yIChjb25zdCBrIGluIGVsZW1lbnRzKSB7XG4gICAgICAgIGlmIChlbGVtZW50cy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgcnN0ID0gZnVuYyhrLCBlbGVtZW50c1trXSk7XG4gICAgICAgICAgICBpZiAocnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiDpgY3ljoblr7nosaHmiJbmlbDnu4RcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYFxuICogICBpbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnQHRvbWF0by1qcy9zaGFyZWQnXG4gKiAgIGNvbnN0IG9iaiA9IHtcbiAqICAgICBhOiAxLFxuICogICAgIGI6IDJcbiAqICAgfTtcbiAqICAgY29uc3Qgb2JqMiA9IHt9O1xuICogICBjb25zdCBhcnIgPSBbMSwyLDMsNCw1XTtcbiAqICAgZm9yRWFjaChvYmosIChrLCB2KSA9PiAob2JqMlt2XSA9IGspKTtcbiAqICAgZm9yRWFjaChvYmosIChrLCB2KSA9PiBjb25zb2xlLmxvZyh2KSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gZWxlbWVudHMgLSDpnIDopoHpgY3ljobnmoTlgLxcbiAqIEBwYXJhbSBmdW5jIC0g5omn6KGM5Ye95pWwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGVsZW1lbnRzLCBmdW5jKSB7XG4gICAgaWYgKCFlbGVtZW50cykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc0FycmF5KGVsZW1lbnRzKSkge1xuICAgICAgICBmb3JFYWNoQXJyYXkoZWxlbWVudHMsIGZ1bmMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChlbGVtZW50cykpIHtcbiAgICAgICAgZm9yRWFjaE9iamVjdChlbGVtZW50cywgZnVuYyk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vZm9yLWVhY2hcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2lzLWVtcHR5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9pcy10eXBlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tYXBcIjtcbmV4cG9ydCAqIGZyb20gXCIuL25vb3BcIjtcbmV4cG9ydCAqIGZyb20gXCIuL25vdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcmVnZXhwXCI7XG4iLCIvKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBAdG9tYXRvLWpzL3NoYXJlZFxuICovXG5pbXBvcnQgeyBpc0FycmF5LCBpc05pbCwgaXNPYmplY3QgfSBmcm9tIFwiLi9pcy10eXBlXCI7XG4vKipcbiAqIOaYr+WQpuS4uuepuuWvueixoVxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgXG4gKiAgIGltcG9ydCB7IGlzRW1wdHlPYmplY3QgfSBmcm9tICdAdG9tYXRvLWpzL3NoYXJlZCdcbiAqICAgY29uc3Qgbm9kZSA9IGlzRW1wdHlPYmplY3Qoe30pOy8vdHJ1ZVxuICogYGBgXG4gKlxuICogQHBhcmFtIG9iamVjdCAtIOmcgOimgeWIpOaWreeahOWvueixoVxuICogQHJldHVybnMg5piv5ZCm5Li65rKh5pyJ5bGe5oCn55qE56m65a+56LGh5aaCe31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlPYmplY3Qob2JqZWN0KSB7XG4gICAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aDtcbn1cbi8qKlxuICog5piv5ZCm5Li656m65pWw57uEXG4gKlxuICog5paw5aKe5LqOdjAuMC4yMlxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgXG4gKiAgIGltcG9ydCB7IGlzRW1wdHlBcnJheSB9IGZyb20gJ0B0b21hdG8tanMvc2hhcmVkJztcbiAqICAgY29uc3Qgbm9kZSA9IGlzRW1wdHlBcnJheShbXSk7Ly90cnVlXG4gKiAgIGNvbnN0IG5vZGUgPSBpc0VtcHR5QXJyYXkoWzFdKTsvL2ZhbHNlXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gYXJyIC0g6ZyA6KaB5Yik5pat55qE5pWw57uEXG4gKiBAcmV0dXJucyDmmK/lkKbkuLrmsqHmnInlsZ7mgKfnmoTmlbDnu4Tmr5TlpoJbXVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eUFycmF5KGFycikge1xuICAgIHJldHVybiBpc0FycmF5KGFycikgJiYgYXJyLmxlbmd0aCA9PT0gMDtcbn1cbi8qKlxuICog5piv5ZCm5Li656m65a+56LGh5oiW56m65pWw57uEXG4gKlxuICog5paw5aKe5LqOdjAuMC4yMlxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgXG4gKiAgIGltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAdG9tYXRvLWpzL3NoYXJlZCdcbiAqICAgY29uc3Qgbm9kZSA9IGlzRW1wdHlBcnJheShbXSk7Ly90cnVlXG4gKiAgIGNvbnN0IG5vZGUgPSBpc0VtcHR5QXJyYXkoWzFdKTsvL2ZhbHNlXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29sbGVjdGlvbiAtIOmcgOimgeWIpOaWreeahOmbhuWQiFxuICogQHBhcmFtIGNvbnRhaW5OaWwgLSDmmK/lkKbpnIDopoHnrpfkuIpudWxs5oiWdW5kZWZpbmVk77yM6buY6K6k5Li6dHJ1ZVxuICogQHJldHVybnMg5piv5ZCm5Li65rKh5pyJ5bGe5oCn55qE56m65a+56LGh5aaCe33vvIzmlbDnu4TlpoJbXe+8jHVuZGVmaW5lZO+8jG51bGxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkoY29sbGVjdGlvbiwgY29udGFpbk5pbCA9IHRydWUpIHtcbiAgICBpZiAoY29udGFpbk5pbCAmJiBpc05pbChjb2xsZWN0aW9uKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXkoY29sbGVjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIGlzRW1wdHlBcnJheShjb2xsZWN0aW9uKTtcbiAgICB9XG4gICAgaWYgKGlzT2JqZWN0KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiBpc0VtcHR5T2JqZWN0KGNvbGxlY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCJjb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5leHBvcnQgZnVuY3Rpb24gaXNUeXBlKHZhbHVlLCB0eXBlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgXCIgKyB0eXBlICsgXCJdXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIGlzVHlwZShzdHIsIFwiU3RyaW5nXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHN0cikge1xuICAgIHJldHVybiBpc1R5cGUoc3RyLCBcIk51bWJlclwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkgPyBBcnJheS5pc0FycmF5KHZhbHVlKSA6IGlzVHlwZSh2YWx1ZSwgXCJBcnJheVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgcmV0dXJuICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlID09PSBcIm9iamVjdFwiKSB8fCB0eXBlID09PSBcImZ1bmN0aW9uXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBpc1R5cGUodmFsdWUsIFwiRnVuY3Rpb25cIikgfHwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG59XG4vKipcbiAqIOaYr+WQpuaYr051bGxcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYFxuICogICBpbXBvcnQgeyBpc051bGwgfSBmcm9tICdAdG9tYXRvLWpzL3NoYXJlZCdcbiAqICAgY29uc3Qgbm9kZSA9IGlzTnVsbChudWxsKTsvL3RydWVcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB2YWwgLSDpnIDopoHliKTmlq3nmoTlgLxcbiAqIEByZXR1cm5zIOaYr+WQpuS4um51bGxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCh2YWwpIHtcbiAgICByZXR1cm4gdmFsID09PSBudWxsO1xufVxuLyoqXG4gKiDmmK/lkKbmmK91bmRlZmluZWRcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYFxuICogICBpbXBvcnQgeyBpc1VuZGVmaW5lZCB9IGZyb20gJ0B0b21hdG8tanMvc2hhcmVkJ1xuICogICBjb25zdCBub2RlID0gaXNVbmRlZmluZWQodW5kZWZpbmVkKTsvL3RydWVcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB2YWwgLSDpnIDopoHliKTmlq3nmoTlgLxcbiAqIEByZXR1cm5zIOaYr+WQpuS4unVuZGVmaW5lZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gICAgcmV0dXJuIHZhbCA9PT0gdW5kZWZpbmVkO1xufVxuLyoqXG4gKiDmmK/lkKbkuLogbnVsbCDmiJYgdW5kZWZpbmVkIOexu+Wei1xuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgXG4gKiAgIGltcG9ydCB7IGlzTmlsIH0gZnJvbSAnQHRvbWF0by1qcy9zaGFyZWQnXG4gKiAgIGNvbnN0IG5vZGUgPSBpc05pbCh1bmRlZmluZWQpOy8vdHJ1ZVxuICogYGBgXG4gKlxuICogQHBhcmFtIHZhbCAtIOmcgOimgeWIpOaWreeahOWAvFxuICogQHJldHVybnMg5piv5ZCm5Li6dW5kZWZpbmVk5oiWbnVsbFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOaWwodmFsKSB7XG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKHZhbCkgfHwgaXNOdWxsKHZhbCk7XG59XG4vKipcbiAqIOaYr+WQpuW3suWumuS5iVxuICpcbiAqIOaWsOWinuS6jnYwLjAuMThcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYFxuICogICBpbXBvcnQgeyBpc0RlZiB9IGZyb20gJ0B0b21hdG8tanMvc2hhcmVkJ1xuICogICBjb25zdCBub2RlID0gaXNEZWYodW5kZWZpbmVkKTsvL2ZhbHNlXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdmFsIC0g6ZyA6KaB5Yik5pat55qE5YC8XG4gKiBAcmV0dXJucyDmmK/lkKbkuLrlt7LlrprkuYnnmoTlgLxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGVmKHZhbCkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQodmFsKSAmJiAhaXNOdWxsKHZhbCk7XG59XG4vKipcbiAqIOaYr+WQpuS4uiDmlbDlrZfmiJblrZfnrKbkuLLmlbDlrZfnsbvlnotcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYFxuICogICBpbXBvcnQgeyBpc051bWJlckxpa2UgfSBmcm9tICdAdG9tYXRvLWpzL3NoYXJlZCdcbiAqICAgaXNOdW1iZXJMaWtlKOKAmDPigJkpOy8vdHJ1ZVxuICogICBpc051bWJlckxpa2UoMyk7Ly90cnVlXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdmFsIC0g6ZyA6KaB5Yik5pat55qE5YC8XG4gKiBAcmV0dXJucyDmmK/lkKbkuLrmlbDlrZfmiJblrZfnrKbkuLLmlbDlrZfnsbvlnotcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyTGlrZSh2YWwpIHtcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsKSkgJiYgaXNGaW5pdGUodmFsKSAmJiBOdW1iZXIodmFsKSA9PSB2YWw7XG59XG4vKipcbiAqIOaYr+WQpuS4umZhbHN557G75Z6LXG4gKlxuICog6ISa5pys5Li+5L6LXG4gKiBgYGBcbiAqICAgaW1wb3J0IHsgaXNGYWxzeSB9IGZyb20gJ0B0b21hdG8tanMvc2hhcmVkJ1xuICogICBpc0ZhbHN5KDEpOy8vZmFsc2VcbiAqICAgaXNGYWxzeSgnJyk7Ly90cnVlXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdmFsIC0g6ZyA6KaB5Yik5pat55qE5YC8XG4gKiBAcmV0dXJucyDmmK/lkKbkuLrmlbDlrZfmiJblrZfnrKbkuLLmlbDlrZfnsbvlnotcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRmFsc3kodmFsKSB7XG4gICAgcmV0dXJuICF2YWw7XG59XG4iLCIvKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBAdG9tYXRvLWpzL3NoYXJlZFxuICovXG5pbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCB9IGZyb20gXCIuL2lzLXR5cGVcIjtcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tIFwiLi9mb3ItZWFjaFwiO1xuZnVuY3Rpb24gbWFwQXJyYXkoZWxlbWVudHMsIGZ1bmMpIHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3JFYWNoKGVsZW1lbnRzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBhcnIucHVzaChmdW5jKGtleSwgdmFsdWUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xufVxuZnVuY3Rpb24gbWFwT2JqZWN0KGVsZW1lbnRzLCBmdW5jKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG4gICAgZm9yRWFjaChlbGVtZW50cywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgb2JqW2tleV0gPSBmdW5jKGtleSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG59XG4vKipcbiAqIOmBjeWOhuWvueixoeaIluaVsOe7hO+8jOi/lOWbnuaWsOWvueixoeaIluaVsOe7hFxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgXG4gKiAgIGltcG9ydCB7IG1hcCB9IGZyb20gJ0B0b21hdG8tanMvc2hhcmVkJ1xuICogICBjb25zdCBvYmogPSB7XG4gKiAgICAgYTogMSxcbiAqICAgICBiOiAyXG4gKiAgIH07XG4gKiAgIGNvbnN0IG9iajIgPSB7fTtcbiAqICAgY29uc3QgYXJyID0gWzEsMiwzLDQsNV07XG4gKiAgIG1hcChvYmosIChrLCB2KSA9PiAob2JqMlt2XSA9IGspKTtcbiAqICAgbWFwKGFyciwgKGssIHYpID0+IHY9disxKTsvL1syLDMsNCw1LDZdXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gZWxlbWVudHMgLSDpnIDopoHpgY3ljobnmoTlgLxcbiAqIEBwYXJhbSBmdW5jIC0g5omn6KGM5Ye95pWwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXAoZWxlbWVudHMsIGZ1bmMpIHtcbiAgICBpZiAoIWVsZW1lbnRzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXkoZWxlbWVudHMpKSB7XG4gICAgICAgIHJldHVybiBtYXBBcnJheShlbGVtZW50cywgZnVuYyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KGVsZW1lbnRzKSkge1xuICAgICAgICByZXR1cm4gbWFwT2JqZWN0KGVsZW1lbnRzLCBmdW5jKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBAdG9tYXRvLWpzL3NoYXJlZFxuICovXG5leHBvcnQgY29uc3Qgbm9vcCA9ICguLi5hcmdzKSA9PiB7IH07XG4iLCIvKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBAdG9tYXRvLWpzL3NoYXJlZFxuICovXG4vKipcbiAqIOWPluWPjVxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgXG4gKiAgIGltcG9ydCB7IG5vdCB9IGZyb20gJ0B0b21hdG8tanMvc2hhcmVkJ1xuICogICBub3QodHJ1ZSkvL2ZhbHNlO1xuICogICBub3QoZmFsc2UpLy90cnVlO1xuICogICBub3QoMCkvL3RydWU7XG4gKiAgIG5vdCgxKS8vZmFsc2U7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gYSAtIOmcgOimgeWPluWPjeeahOWAvFxuICogQHJldHVybnMg5Y+W5Y+N5ZCO55qE5YC8XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3QoYSkge1xuICAgIHJldHVybiAhYTtcbn1cbiIsIi8qKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKiBAbW9kdWxlIEB0b21hdG8tanMvc2hhcmVkXG4gKi9cbmV4cG9ydCBjb25zdCBibGFua1JlZyA9IC9bXFxzXFxyXFxuXSsvZ2k7XG5leHBvcnQgY29uc3QgYXNSZWcgPSAvKC4rKVxcc2FzXFxzKC4rKS9naTtcbi8qKlxuICog5pW05pWwXG4gKi9cbmV4cG9ydCBjb25zdCBpbnRlZ2VyUmVnID0gL14oLXxcXCspP1xcZCskLztcbi8qKlxuICog5q2j5pW05pWwXG4gKi9cbmV4cG9ydCBjb25zdCBwb3NpdGl2ZU51bVJlZyA9IC9eWzEtOV1kKiQvO1xuLyoqXG4gKiDotJ/mlbTmlbBcbiAqL1xuZXhwb3J0IGNvbnN0IG5lZ2F0aXZlTnVtUmVnID0gL14tWzEtOV1kKiQvO1xuLyoqXG4gKiDkuK3mlofmsYnlrZdcbiAqL1xuZXhwb3J0IGNvbnN0IGNoaW5lc2VSZWcgPSAvXig/OltcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGRUFcXHVGQTBFXFx1RkEwRlxcdUZBMTFcXHVGQTEzXFx1RkExNFxcdUZBMUZcXHVGQTIxXFx1RkEyM1xcdUZBMjRcXHVGQTI3LVxcdUZBMjldfFtcXHVEODQwLVxcdUQ4NjhcXHVEODZBLVxcdUQ4NkNcXHVEODZGLVxcdUQ4NzJcXHVEODc0LVxcdUQ4NzldW1xcdURDMDAtXFx1REZGRl18XFx1RDg2OVtcXHVEQzAwLVxcdURFRDZcXHVERjAwLVxcdURGRkZdfFxcdUQ4NkRbXFx1REMwMC1cXHVERjM0XFx1REY0MC1cXHVERkZGXXxcXHVEODZFW1xcdURDMDAtXFx1REMxRFxcdURDMjAtXFx1REZGRl18XFx1RDg3M1tcXHVEQzAwLVxcdURFQTFcXHVERUIwLVxcdURGRkZdfFxcdUQ4N0FbXFx1REMwMC1cXHVERkUwXSkrJC87XG4vKipcbiAqIOiLseaWh+Wtl+avjVxuICovXG5leHBvcnQgY29uc3QgZW5nbGlzaFJlZyA9IC9eW2EtekEtWl0rJC87XG4iLCIvKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBAdG9tYXRvLWpzL3N0cmluZ1xuICovXG4vKipcbiAqIOWtl+espui9rOS4uumpvOWzsOWRveWQjVxuICpcbiAqIOaWsOWinuS6jnYwLjAuMTVcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYFxuICogICBpbXBvcnQgeyBjYW1lbENhc2UgfSBmcm9tICdAdG9tYXRvLWpzL3N0cmluZydcbiAqICAgY2FtZWxDYXNlKCdmb28tYmFyJyk7IC8vIGZvb0JhclxuICogICBjYW1lbENhc2UoJ2Zvby5iYXInKTsgLy8gZm9vQmFyXG4gKiAgIGNhbWVsQ2FzZSgnRm9vQmFyJyk7IC8vIGZvb0JhclxuICogICBjYW1lbENhc2UoJy0tZm9vICBiYXJfXycpOyAvLyBmb29CYXJcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBudW1iZXIgLSDpnIDopoHovazmjaLnmoTpmL/mi4nkvK/mlbDlrZdcbiAqIEByZXR1cm5zIOi9rOaNouWQjueahOS4reaWh+Wtl+espuS4slxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSBpbnB1dFxuICAgICAgICAvL+mmluWFiOWOu+mZpOWJjeWQjuW5suaJsOWtl+espuWSjOepuuWtl+espuS4slxuICAgICAgICAucmVwbGFjZSgvXlteQS1aYS16MC05XSp8W15BLVphLXowLTldKiQvZywgXCJcIilcbiAgICAgICAgLy/nu5nmiYDmnInpmaRBU0NJSeeggeS7peS4uuWtl+espueUqCTljaDkvY1cbiAgICAgICAgLnJlcGxhY2UoL1teQS1aYS16MC05XSsvZywgXCIkXCIpXG4gICAgICAgIC8v57uZ5bey5pyJ55qE5omA5pyJ5aSn5YaZ5YmN5aKe5YqgJOWNoOS9jVxuICAgICAgICAucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgKG0sIGEsIGIpID0+IGEgKyBcIiRcIiArIGIpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC8v5bCG5Y2g5L2N55qE5ZCO5LiA5a2X56ym5aSn5YaZXG4gICAgICAgIC5yZXBsYWNlKC8oXFwkKShcXHcpL2csIChtLCBhLCBiKSA9PiBiLnRvVXBwZXJDYXNlKCkpO1xuICAgIHJldHVybiBpbnB1dDtcbn1cbiIsIi8qKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKiBAbW9kdWxlIEB0b21hdG8tanMvc3RyaW5nXG4gKi9cbmNvbnN0IGRpZ2l0cyA9IFtcIumbtlwiLCBcIuS4gFwiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiLCBcIuS4g1wiLCBcIuWFq1wiLCBcIuS5nVwiXTtcbmNvbnN0IHVuaXRzID0gW1wiXCIsIFwi5Y2BXCIsIFwi55m+XCIsIFwi5Y2DXCIsIFwi5LiHXCIsIFwi5Y2BXCIsIFwi55m+XCIsIFwi5Y2DXCIsIFwi5Lq/XCIsIFwi5Y2BXCIsIFwi55m+XCIsIFwi5Y2DXCIsIFwi5YWGXCIsIFwi5Y2BXCIsIFwi55m+XCIsIFwi5Y2DXCIsIFwi5LqsXCIsIFwi5Y2BXCIsIFwi55m+XCIsIFwi5Y2DXCIsIFwi5Z6TXCJdO1xuY29uc3QgbWludXMgPSBcIui0n1wiO1xuY29uc3QgcG9pbnQgPSBcIueCuVwiO1xuLyoqXG4gKiDpmL/mi4nkvK/mlbDlrZfovazkuK3mloflrZfnrKbkuLJcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYFxuICogICBpbXBvcnQgeyBudW1iZXIyQ2hpbmVzZSB9IGZyb20gJ0B0b21hdG8tanMvc3RyaW5nJ1xuICogICBudW1iZXIyQ2hpbmVzZSgxMTAwMjUuMDYpOyAvLyDljYHkuIDkuIfpm7bkuozljYHkupTngrnpm7blha1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBudW1iZXIgLSDpnIDopoHovazmjaLnmoTpmL/mi4nkvK/mlbDlrZdcbiAqIEByZXR1cm5zIOi9rOaNouWQjueahOS4reaWh+Wtl+espuS4slxuICovXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyMkNoaW5lc2UobnVtYmVyKSB7XG4gICAgcmV0dXJuIGludDJDaGluZXNlKG51bWJlcikgKyBmbG9hdDJDaGluZXNlKG51bWJlcik7XG59XG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludDJDaGluZXNlKG51bWJlcikge1xuICAgIGNvbnN0IHplcm8gPSBkaWdpdHNbMF07XG4gICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgbGV0IG4gPSBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuICAgIC8v5pW05pWw6YOo5YiG5bCP5LqOMVxuICAgIGlmIChuIDwgMSkge1xuICAgICAgICBpZiAobnVtYmVyIDwgMClcbiAgICAgICAgICAgIHJldHVybiBgJHttaW51c30ke3plcm99YDtcbiAgICAgICAgcmV0dXJuIGRpZ2l0c1swXTtcbiAgICB9XG4gICAgY29uc3Qgc2hhZG93VW5pdHMgPSBbLi4udW5pdHNdO1xuICAgIC8v5LuO5pyr5bC+5byA5aeL5LiA5LiA5aSE55CG5pWw5a2X6L2s5Lit5paHXG4gICAgd2hpbGUgKG4gPiAwKSB7XG4gICAgICAgIGxldCB1ID0gc2hhZG93VW5pdHMuc2hpZnQoKTtcbiAgICAgICAgbGV0IGQgPSBuICUgMTA7XG4gICAgICAgIHN0ciA9IGAke2RpZ2l0c1tkXX0ke3V9JHtzdHJ9YDtcbiAgICAgICAgbiA9IE1hdGguZmxvb3IobiAvIDEwKTtcbiAgICB9XG4gICAgLy/pkojlr7nlkITovrnnlYzlgLzov5vooYzlpITnkIZcbiAgICBjb25zdCBzbWFsbCA9IHVuaXRzWzFdICsgdW5pdHNbMl0gKyB1bml0c1szXTtcbiAgICBjb25zdCBiaWcgPSB1bml0c1s0XSArIHVuaXRzWzhdICsgdW5pdHNbMTJdICsgdW5pdHNbMTZdICsgdW5pdHNbMjBdO1xuICAgIC8v5aSE55CG6Zu25Y2B6Zu255m+6Zu25Y2DXG4gICAgc3RyID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChcIihcIiArIHplcm8gKyBcIilbXCIgKyBzbWFsbCArIFwiXVwiLCBcImdcIiksIFwiJDFcIik7XG4gICAgLy/lpITnkIYg5Lq/6Zu25LiHIOi/meenjVxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoW1wiICsgYmlnICsgXCJdKVteXCIgKyBzbWFsbCArIFwiXSsoW1wiICsgYmlnICsgXCJdKVwiLCBcImdcIiksIFwiJDFcIiArIHplcm8pO1xuICAgIC8v5aSE55CGIOWNgembtuS4hyDov5nnp41cbiAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKFwiKFtcIiArIHNtYWxsICsgXCJdKVwiICsgemVybyArIFwiKyhbXCIgKyBiaWcgKyBcIl0pXCIsIFwiZ1wiKSwgXCIkMSQyXCIgKyB6ZXJvKTtcbiAgICAvL+WkhOeQhumHjeWkjeeahOmbtu+8jOmbtumbtlxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXCIgKyBkaWdpdHNbMF0gKyBcIikrXCIsIFwiZ1wiKSwgXCIkMVwiKTtcbiAgICAvL+WkhOeQhuS4gOWNgeS4uuWNgVxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeXCIgKyBkaWdpdHNbMV0gKyB1bml0c1sxXSksIHVuaXRzWzFdKTtcbiAgICAvL+WkhOeQhuW3sumbtue7k+WwvueahOaDheWGtVxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoemVybyArIFwiKyRcIiksIFwiXCIpO1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIHJldHVybiBgJHttaW51c30ke3N0cn1gO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbG9hdDJDaGluZXNlKG51bWJlcikge1xuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIGlmIChudW1iZXIgJSAxID09IDApXG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIC8v5bCG5bCP5pWw6YOo5YiG5o+Q5Y+W5Li65pW05pWwXG4gICAgbGV0IGYgPSBwYXJzZUludChNYXRoLmFicyhudW1iZXIpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5yZXBsYWNlKC9cXGQrLi9pLCBcIjFcIikpO1xuICAgIC8v5YaN5LuO5pyr5bC+6YCQ5Liq5aSE55CG5Y2z5Y+vXG4gICAgd2hpbGUgKGYgPiAwKSB7XG4gICAgICAgIGxldCBkID0gZiAlIDEwO1xuICAgICAgICBzdHIgPSBgJHtkaWdpdHNbZF19JHtzdHJ9YDtcbiAgICAgICAgZiA9IE1hdGguZmxvb3IoZiAvIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50ICsgc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChcIl5cIiArIGRpZ2l0c1sxXSwgXCJpXCIpLCBcIlwiKTtcbn1cbiIsIi8qKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKiBAbW9kdWxlIEB0b21hdG8tanMvc3RyaW5nXG4gKi9cbi8qKlxuICog6I635Y+W5paH5Lu25ZCO57yA5ZCNXG4gKlxuICog5paw5aKe5LqOdjAuMC4yNFxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgXG4gKiAgIGltcG9ydCB7IGdldEV4dGVuc2lvbiB9IGZyb20gJ0B0b21hdG8tanMvc3RyaW5nJ1xuICogICBnZXRFeHRlbnNpb24oJ215aW1nLzEucG5nJyk7XG4gKiAgIC8vcG5nXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEV4dGVuc2lvbihmaWxlTmFtZSkge1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGZpbGVOYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcbiAgICBpZiAoIWV4dGVuc2lvbilcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChleHRlbnNpb24uaW5jbHVkZXMoXCI/XCIpKSB7XG4gICAgICAgIHJldHVybiBleHRlbnNpb24uc3BsaXQoXCI/XCIpLnNoaWZ0KCk7XG4gICAgfVxuICAgIHJldHVybiBleHRlbnNpb247XG59XG4iLCJleHBvcnQgeyBjYW1lbENhc2UgfSBmcm9tIFwiLi9jYW1lbC1jYXNlXCI7XG5leHBvcnQgeyBpc0pzb24gfSBmcm9tIFwiLi9pcy1qc29uXCI7XG5leHBvcnQgeyBrZWJhYkNhc2UgfSBmcm9tIFwiLi9rZWJhYi1jYXNlXCI7XG5leHBvcnQgeyBpbnQyQ2hpbmVzZSwgZmxvYXQyQ2hpbmVzZSwgbnVtYmVyMkNoaW5lc2UgfSBmcm9tIFwiLi9jaGluZXNlXCI7XG5leHBvcnQgeyByYW5kb20gfSBmcm9tIFwiLi9yYW5kb21cIjtcbmV4cG9ydCB7IHJldmVyc2UgfSBmcm9tIFwiLi9yZXZlcnNlXCI7XG5leHBvcnQgeyBzdWJzdHJpbmdGcm9tQ2hhciwgc3Vic3RyaW5nVG9DaGFyIH0gZnJvbSBcIi4vc3Vic3RyXCI7XG5leHBvcnQgeyB0cmltQWxsIH0gZnJvbSBcIi4vdHJpbS1hbGxcIjtcbmV4cG9ydCB7IGdldEV4dGVuc2lvbiB9IGZyb20gXCIuL2dldC1leHRlbnNpb25cIjtcbiIsIi8qKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKiBAbW9kdWxlIEB0b21hdG8tanMvc3RyaW5nXG4gKi9cbi8qKlxuICog5Yik5pat57uZ5a6a55qE5a2X56ym5Liy5piv5ZCm5pivIEpTT04g5a2X56ym5LiyXG4gKlxuICog6ISa5pys5Li+5L6LXG4gKiBgYGBcbiAqICAgaW1wb3J0IHsgaXNKc29uIH0gZnJvbSAnQHRvbWF0by1qcy9zdHJpbmcnXG4gKiAgIGlzSnNvbigne1wibmFtZVwiOlwiYnJpemVyXCIsXCJhZ2VcIjoyMH0nKTsgLy8gdHJ1ZVxuICogICBpc0pzb24oJ3tcIm5hbWVcIjpcImJyaXplclwiLGFnZTpcIjIwXCJ9Jyk7IC8vIGZhbHNlXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gc3RyaW5nIC0g5qOA5p+l55qE5a2X56ym5LiyXG4gKiBAcmV0dXJucyDmmK/lkKbkuLpqc29u5qC85byPXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0pzb24oc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgSlNPTi5wYXJzZShzdHJpbmcpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKiBAbW9kdWxlIEB0b21hdG8tanMvc3RyaW5nXG4gKi9cbi8qKlxuICog5a2X56ym6L2s5Li655+t5qiq57q/5ZG95ZCNXG4gKlxuICog5paw5aKe5LqOdjAuMC4xNVxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgXG4gKiAgIGltcG9ydCB7IGtlYmFiQ2FzZSB9IGZyb20gJ0B0b21hdG8tanMvc3RyaW5nJ1xuICogICBrZWJhYkNhc2UoJ2Zvb0JhcicpOyAvLyBmb28tYmFyXG4gKiAgIGtlYmFiQ2FzZSgnZm9vLmJhcicpOyAvLyBmb28tYmFyXG4gKiAgIGtlYmFiQ2FzZSgnRm9vQmFyJyk7IC8vIGZvby1iYXJcbiAqICAga2ViYWJDYXNlKCctLWZvbyAgYmFyX18nKTsgLy8gZm9vLWJhclxuICogYGBgXG4gKlxuICogQHBhcmFtIG51bWJlciAtIOmcgOimgei9rOaNoueahOmYv+aLieS8r+aVsOWtl1xuICogQHJldHVybnMg6L2s5o2i5ZCO55qE5Lit5paH5a2X56ym5LiyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBrZWJhYkNhc2UoaW5wdXQpIHtcbiAgICBpbnB1dCA9IGlucHV0XG4gICAgICAgIC8v6aaW5YWI5Y676Zmk5YmN5ZCO5bmy5omw5a2X56ym5ZKM56m65a2X56ym5LiyXG4gICAgICAgIC5yZXBsYWNlKC9eW15BLVphLXowLTldKnxbXkEtWmEtejAtOV0qJC9nLCBcIlwiKVxuICAgICAgICAvL+e7meaJgOaciemZpEFTQ0lJ56CB5Lul5Li65a2X56ym55SoJOWNoOS9jVxuICAgICAgICAucmVwbGFjZSgvW15BLVphLXowLTldKy9nLCBcIiRcIilcbiAgICAgICAgLy/nu5nlt7LmnInnmoTmiYDmnInlpKflhpnliY3lop7liqAk5Y2g5L2NXG4gICAgICAgIC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAobSwgYSwgYikgPT4gYSArIFwiJFwiICsgYilcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLy/lsIbljaDkvY3nmoQk5o2i5oiQLVxuICAgICAgICAucmVwbGFjZSgvXFwkL2csIFwiLVwiKTtcbiAgICByZXR1cm4gaW5wdXQ7XG59XG4iLCIvKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBAdG9tYXRvLWpzL3N0cmluZ1xuICovXG4vKipcbiAqIOmaj+acuuWtl+espuS4slxuICpcbiAqIOaWsOWinuS6jnYwLjAuMTJcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYFxuICogICBpbXBvcnQgeyByYW5kb20gfSBmcm9tICdAdG9tYXRvLWpzL3N0cmluZydcbiAqICAgcmFuZG9tKDMpOyAvLyAnMnhLJ1xuICogYGBgXG4gKlxuICogQHBhcmFtIGxlbmd0aCAtIOWtl+espuS4sumVv+W6plxuICogQHJldHVybnMg6ZqP5py65a2X56ym5LiyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obGVuZ3RoKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyU2V0ID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuICAgIGNvbnN0IHJhbmRvbUNoYXIgPSAoKSA9PiBjaGFyYWN0ZXJTZXRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyU2V0Lmxlbmd0aCldO1xuICAgIGxldCB0ZXh0ID0gXCJcIjtcbiAgICBsZXQgaWR4ID0gMDtcbiAgICB3aGlsZSAoaWR4IDwgbGVuZ3RoKSB7XG4gICAgICAgIHRleHQgPSB0ZXh0ICsgcmFuZG9tQ2hhcigpO1xuICAgICAgICBpZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG59XG4iLCIvKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBAdG9tYXRvLWpzL3N0cmluZ1xuICovXG4vKipcbiAqIOWtl+espuS4suWPjei9rFxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgXG4gKiAgIGltcG9ydCB7IHJldmVyc2UgfSBmcm9tICdAdG9tYXRvLWpzL3N0cmluZydcbiAqICAgcmV2ZXJzZSgnZm9vYmFyJyk7IC8vICdyYWJvb2YnXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gc3RyaW5nIC0g6ZyA6KaB5Y+N6L2s55qE5a2X56ym5LiyXG4gKiBAcmV0dXJucyDlj43ovazlkI7nmoTlrZfnrKbkuLJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIFsuLi5zdHJpbmddLnJldmVyc2UoKS5qb2luKFwiXCIpO1xufVxuIiwiLyoqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqIEBtb2R1bGUgQHRvbWF0by1qcy9zdHJpbmdcbiAqL1xuLyoqXG4gKiDmiKrlj5bljLnphY3liLDnmoTlrZfnrKblkI7pnaLnmoTlhoXlrrlcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYFxuICogICBpbXBvcnQgeyBzdWJzdHJpbmdGcm9tQ2hhciB9IGZyb20gJ0B0b21hdG8tanMvc3RyaW5nJ1xuICogICBjb25zdCBzdHIgPSBzdWJzdHJpbmdGcm9tQ2hhcignaGVsbG8gd29ybGQnLCdsJyk7Ly8nbG8gd29ybGQnXG4gKiAgIGNvbnN0IHN0ciA9IHN1YnN0cmluZ0Zyb21DaGFyKCdoZWxsbyB3b3JsZCcsJ2wnLHtpdHNlbGY6dHJ1ZX0pOy8vJ2xsbyB3b3JsZCdcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBzdHJpbmcgLSDljp/mnaXnmoTlrZfnrKbkuLJcbiAqIEBwYXJhbSBjaGFyIC0g5qCH6K+G5a2X56ymXG4gKiBAcGFyYW0gb3B0aW9ucyAtIOWFtuS7luWPguaVsFxuICogQHBhcmFtIG9wdGlvbnMuaXRzZWxmIC0g5oiq5Y+W55qE5a2X56ym5Liy5piv5ZCm5YyF5ZCrY2hhcuacrOi6q++8jOm7mOiupOS4umZhbHNlXG4gKiBAcmV0dXJucyDmiKrlj5blkI7nmoTlrZfnrKbkuLJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0cmluZ0Zyb21DaGFyKHN0cmluZywgY2hhciwgb3B0aW9ucyA9IHtcbiAgICBpdHNlbGY6IGZhbHNlXG59KSB7XG4gICAgY29uc3QgeyBpdHNlbGYgfSA9IG9wdGlvbnM7XG4gICAgaWYgKHN0cmluZy5pbmRleE9mKGNoYXIpID09PSAtMSlcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgY29uc3QgaW5kZXhPZkNoYXIgPSBpdHNlbGYgPyBzdHJpbmcuaW5kZXhPZihjaGFyKSA6IHN0cmluZy5pbmRleE9mKGNoYXIpICsgMTtcbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZyhpbmRleE9mQ2hhcik7XG59XG4vKipcbiAqIOaIquWPluWMuemFjeWIsOeahOWtl+espuWJjemdoueahOWGheWuuVxuICpcbiAqIOiEmuacrOS4vuS+i1xuICogYGBgXG4gKiAgIGltcG9ydCB7IHN1YnN0cmluZ1RvQ2hhciB9IGZyb20gJ0B0b21hdG8tanMvc3RyaW5nJ1xuICogICBjb25zdCBzdHIgPSBzdWJzdHJpbmdUb0NoYXIoJ2hlbGxvIHdvcmxkJywnbCcpOy8vJ2hlJ1xuICogICBjb25zdCBzdHIgPSBzdWJzdHJpbmdUb0NoYXIoJ2hlbGxvIHdvcmxkJywnbCcse2l0c2VsZjp0cnVlfSk7Ly8naGVsJ1xuICogYGBgXG4gKlxuICogQHBhcmFtIHN0cmluZyAtIOWOn+adpeeahOWtl+espuS4slxuICogQHBhcmFtIGNoYXIgLSDmoIfor4blrZfnrKZcbiAqIEBwYXJhbSBvcHRpb25zIC0g5YW25LuW5Y+C5pWwXG4gKiBAcGFyYW0gb3B0aW9ucy5pdHNlbGYgLSDmiKrlj5bnmoTlrZfnrKbkuLLmmK/lkKbljIXlkKtjaGFy5pys6Lqr77yM6buY6K6k5Li6ZmFsc2VcbiAqIEByZXR1cm5zIOaIquWPluWQjueahOWtl+espuS4slxuICovXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RyaW5nVG9DaGFyKHN0cmluZywgY2hhciwgb3B0aW9ucyA9IHtcbiAgICBpdHNlbGY6IGZhbHNlXG59KSB7XG4gICAgY29uc3QgeyBpdHNlbGYgfSA9IG9wdGlvbnM7XG4gICAgaWYgKHN0cmluZy5pbmRleE9mKGNoYXIpID09PSAtMSlcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgY29uc3QgaW5kZXhPZkNoYXIgPSBpdHNlbGYgPyBzdHJpbmcuaW5kZXhPZihjaGFyKSArIDEgOiBzdHJpbmcuaW5kZXhPZihjaGFyKTtcbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBpbmRleE9mQ2hhcik7XG59XG4iLCIvKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBAdG9tYXRvLWpzL3N0cmluZ1xuICovXG4vKipcbiAqIOWOu+mZpOWtl+espuS4suS4reaJgOacieepuueZvVxuICpcbiAqIOaWsOWinuS6jnYwLjAuMTlcbiAqXG4gKiDohJrmnKzkuL7kvotcbiAqIGBgYFxuICogICBpbXBvcnQgeyB0cmltQWxsIH0gZnJvbSAnQHRvbWF0by1qcy9zdHJpbmcnXG4gKiAgIHRyaW1BbGwoJyBteSBuYW1lIGlzIGJyaXplciAgICAnKTtcbiAqICAgLy9teW5hbWVpc2JyaXplclxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmltQWxsKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcbn1cbiIsImltcG9ydCB7IFByZWxvYWQgfSBmcm9tIFwiQHRvbWF0by1qcy9wcmVsb2FkXCI7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwiQHRvbWF0by1qcy9lbGVtZW50XCI7XG5cblxuY29uc3QgcHJlbG9hZCA9IG5ldyBQcmVsb2FkKCk7XG5wcmVsb2FkLm9uKCdjb21wbGV0ZScsKCk9PntcbiAgICBjb25zb2xlLmxvZygnY29tcGxldGUgbG9hZCcpXG59KVxucHJlbG9hZC5hZGQoJ2h0dHBzOi8vZWR1LWltYWdlLm5vc2RuLjEyNy5uZXQvN2Q4NDQ1NzRmNzFlNDI0ZmI2YWRmOWQyY2YzYzJmZDYuanBnJyk7XG5wcmVsb2FkLmFkZCgnaHR0cHM6Ly9lZHUtaW1hZ2Uubm9zZG4uMTI3Lm5ldC8wMDVjOWNkMTU2OGQ0NmRkYTBhODRhZTgxMmU2MWQwYS5qcGcnKTtcbnByZWxvYWQuYWRkKCdodHRwczovL2VkdS1pbWFnZS5ub3Nkbi4xMjcubmV0L2ViNzcwMzFjYjU4MDRhZDhhZDA1ZjJiM2UxN2E1Yzc0LmpwZycpO1xucHJlbG9hZC5hZGQoJ3VuZGVmaW5lZC5qcGcnKTtcbnByZWxvYWQubG9hZCgpO1xuXG5zZXRUaW1lb3V0KCgpPT57XG4gICAgY29uc3QgaW1nID0gY3JlYXRlKFwiaW1nXCIsJ2ltZzEnLGRvY3VtZW50LmJvZHkpO1xuICAgIGNvbnN0IGltZzIgPSBjcmVhdGUoXCJpbWdcIiwnaW1nMicsZG9jdW1lbnQuYm9keSk7XG4gICAgY29uc3QgaW1nMyA9IGNyZWF0ZShcImltZ1wiLCdpbWczJyxkb2N1bWVudC5ib2R5KTtcbiAgICBpbWcuc3JjID0gJ2h0dHBzOi8vZWR1LWltYWdlLm5vc2RuLjEyNy5uZXQvN2Q4NDQ1NzRmNzFlNDI0ZmI2YWRmOWQyY2YzYzJmZDYuanBnJztcbiAgICBpbWcyLnNyYyA9ICdodHRwczovL2VkdS1pbWFnZS5ub3Nkbi4xMjcubmV0LzAwNWM5Y2QxNTY4ZDQ2ZGRhMGE4NGFlODEyZTYxZDBhLmpwZyc7XG4gICAgaW1nMy5zcmMgPSAnaHR0cHM6Ly9lZHUtaW1hZ2Uubm9zZG4uMTI3Lm5ldC9lYjc3MDMxY2I1ODA0YWQ4YWQwNWYyYjNlMTdhNWM3NC5qcGcnO1xufSw1MDAwKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2ltYWdlLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==