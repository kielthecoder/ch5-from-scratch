function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'World'], ' ');

    return element;
}

document.body.appendChild(component());