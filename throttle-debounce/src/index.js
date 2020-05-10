import { throttle,debounce } from "@tomato-js/function";

const contentNode = document.querySelector("#j-content");
const btn1Node = document.querySelector(".j-btn1");
const btn2Node = document.querySelector(".j-btn2");
const btn3Node = document.querySelector(".j-btn3");
const btn4Node = document.querySelector(".j-btn4");
contentNode.innerHTML = "hello world,brizer";

function handleClick() {
  console.log("clicked");
}
btn1Node.onclick = debounce(handleClick, 1000);
btn2Node.onclick = throttle(handleClick, 1000);
btn3Node.onclick = debounce(handleClick, 1000,{isImmediate:true});
btn4Node.onclick = throttle(handleClick, 1000,{isImmediate:true});
