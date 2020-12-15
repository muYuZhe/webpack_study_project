import _ from 'Lodash';
import './mySass/css/mySass.css'
function component() {
    // 在document对象中创建一个元素div
    var element = document.createElement('div');

    element.classList.add('test')
    // 对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  // 在body中创建子节点
  document.body.appendChild(component());