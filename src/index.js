// import _ from 'Lodash';
import './mySass/css/mySass.css'
// import printMe from './print.js'
import { cube } from './math.js';
function component() {
    // 在document对象中创建一个元素div
    var element = document.createElement('pre');
    //新增一个按钮
    // var btn = document.createElement('button')

    element.classList.add('test')
    // 对于执行这一行是必需的
    element.innerHTML = [
           'Hello webpack!',
           '5 cubed is equal to ' + cube(5)
         ].join('\n\n');
     // 配置按钮内显示的内容和点击事件
    //  btn.innerHTML = 'Click me and check the console!';
    //  btn.onclick = printMe;
 
     // 按钮作为div的子节点
    //  element.appendChild(btn);
  
    return element;
  }
  
  // 在body中创建子节点
  document.body.appendChild(component());

  // if (module.hot) {
  //      module.hot.accept('./print.js', function() {
  //        console.log('Accepting the updated printMe module!');
  //        printMe();
  //      })
  //    }
    