import _ from 'Lodash';
import './mySass/css/mySass.css'
import printMe from './print.js'
function component() {
    // 在document对象中创建一个元素div
    var element = document.createElement('div');
    //新增一个按钮
    var btn = document.createElement('button')

    // 配置按钮内显示的内容和点击事件
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    // 按钮作为div的子节点
    element.appendChild(btn);
    element.classList.add('test')
    // 对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  // 在body中创建子节点
  document.body.appendChild(component());