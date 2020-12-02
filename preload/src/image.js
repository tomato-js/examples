import { Preload } from "@tomato-js/preload";
import { create } from "@tomato-js/element";


const preload = new Preload();
preload.on('complete',()=>{
    console.log('complete load')
})
preload.add('https://edu-image.nosdn.127.net/7d844574f71e424fb6adf9d2cf3c2fd6.jpg');
preload.add('https://edu-image.nosdn.127.net/005c9cd1568d46dda0a84ae812e61d0a.jpg');
preload.add('https://edu-image.nosdn.127.net/eb77031cb5804ad8ad05f2b3e17a5c74.jpg');
preload.add('undefined.jpg');
preload.load();

setTimeout(()=>{
    const img = create("img",'img1',document.body);
    const img2 = create("img",'img2',document.body);
    const img3 = create("img",'img3',document.body);
    img.src = 'https://edu-image.nosdn.127.net/7d844574f71e424fb6adf9d2cf3c2fd6.jpg';
    img2.src = 'https://edu-image.nosdn.127.net/005c9cd1568d46dda0a84ae812e61d0a.jpg';
    img3.src = 'https://edu-image.nosdn.127.net/eb77031cb5804ad8ad05f2b3e17a5c74.jpg';
},5000)