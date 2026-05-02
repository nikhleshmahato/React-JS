
// import RenderElement from './Components.jsx';
function RenderElement(reactElement, container) {
    const element = document.createElement(reactElement.type);

    if (reactElement.text) {
        element.innerText = reactElement.text;
    }

    for (let prop in reactElement.props) {
        if (prop === 'text') continue;
        element.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(element);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    text: 'Click Me'
};

const container = document.getElementById("container");

RenderElement(reactElement, container);