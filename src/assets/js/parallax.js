'use strict';

const parallax = (sectionSelector, bgSelector) => {
    
    const bg = document.querySelector(bgSelector);
    let xCoord = 0, yCoord = 0;
    let translateXTo = 0;
    let translateYTo = 0;

    document.querySelector(sectionSelector).addEventListener('mousemove', (e) => {
        if(e.screenX < xCoord) {
            if(translateXTo < 20) {
                bg.style.transform = `translate(calc(-50% + ${translateXTo}px), calc(-50% + ${translateYTo}px))`;
                translateXTo += .2;
            }
        }else {
            if(translateXTo > -20) {
                bg.style.transform = `translate(calc(-50% + ${translateXTo}px), calc(-50% + ${translateYTo}px))`;
                translateXTo += -.2;
            }
        }
        if(e.screenY < yCoord) {
            if(translateYTo < 20) {
                bg.style.transform = `translate(calc(-50% + ${translateXTo}px), calc(-50% + ${translateYTo}px))`;
                translateYTo += .2;
            }
        }else {
            if(translateYTo > -20) {
                bg.style.transform = `translate(calc(-50% + ${translateXTo}px), calc(-50% + ${translateYTo}px))`;
                translateYTo += -.2;
            }
        }
        xCoord = e.screenX;
        yCoord = e.screenY;
    });
}

export {parallax};