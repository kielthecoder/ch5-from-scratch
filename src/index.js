import _ from 'lodash';
import { markdown } from 'markdown';

import './style.css';

window.onload = function() {
    document.querySelector('#editor').addEventListener(
        'submit',
        function (e) {
            e.preventDefault();

            let text = document.querySelector('#source').value;
            let preview = document.querySelector('#preview');

            preview.innerHTML = markdown.toHTML(text);
        });
};
