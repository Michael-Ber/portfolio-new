'use strict';

const percentCreation = (itemSelector, percentSelector, diagramSelector) => {
    const item = document.querySelectorAll(itemSelector);

    item.forEach(node => {
        const percent = node.querySelector(percentSelector);
        const diagram = node.querySelector(diagramSelector);
        diagram.style.width = `${Array.from(percent.children)[0].textContent}%`;
    });
}

export {percentCreation};