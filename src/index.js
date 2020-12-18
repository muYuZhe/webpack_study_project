import './mySass/css/mySass.css'
import printMe from './print.js'
import { cube } from './math.js';

if (process.env.NODE_ENV!=='production') {
  console.log('Looks like we are in development mode!');
}

function getComponent() {
  // 这里webpackChunkName是当作注释传入
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_=>{
          // 在document对象中创建一个元素div
    var element = document.createElement('pre');
    //新增一个按钮
    var btn = document.createElement('button')
    element.classList.add('test')
    // 对于执行这一行是必需的
    element.innerHTML = [
           'Hello webpack!',
           '5 cubed is equal to ' + cube(5)
         ].join('\n\n');
    // 配置按钮内显示的内容和点击事件
     btn.innerHTML = 'Click me and check the console!';
     btn.onclick = printMe;
 
    // 按钮作为div的子节点
     element.appendChild(btn);
  
    return element;

    }).catch(error => 'An error occurred while loading the component');
  }
  
  // 在body中创建子节点
  getComponent().then(component => {
    document.body.appendChild(component);
  })

  // if (module.hot) {
  //      module.hot.accept('./print.js', function() {
  //        console.log('Accepting the updated printMe module!');
  //        printMe();
  //      })
  //    }
    