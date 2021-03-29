import _ from 'lodash';
import './style.css';

import CrestronLogo from './crestron.png';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'World'], ' ');
    element.classList.add('hello');

    const logo = new Image();
    logo.src = CrestronLogo;

    element.appendChild(logo);

    return element;
}

document.body.appendChild(component());