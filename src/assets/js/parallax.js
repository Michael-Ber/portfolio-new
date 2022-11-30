'use strict';

const parallax = (sectionSelector, bgSelector) => {
    
    const bg = document.querySelector(bgSelector);
    let xCoord = 0, yCoord = 0;
    let translateXTo = 0;
    let translateYTo = 0;

    document.querySelector(sectionSelector).addEventListener('mousemove', (e) => {
        if(e.screenX < xCoord) {
            if(translateXTo < 10) {
                // bg.style.transform = `translate(calc(-50% + ${translateXTo}px), calc(-50% + ${translateYTo}px))`;
                bg.style.transform = `translate(${translateXTo}px, ${translateYTo}px)`;
                translateXTo += .5;
            }
        }else {
            if(translateXTo > -10) {
                // bg.style.transform = `translate(calc(-50% + ${translateXTo}px), calc(-50% + ${translateYTo}px))`;
                bg.style.transform = `translate(${translateXTo}px, ${translateYTo}px)`;
                translateXTo += -.5;
            }
        }
        if(e.screenY < yCoord) {
            if(translateYTo < 10) {
                // bg.style.transform = `translate(calc(-50% + ${translateXTo}px), calc(-50% + ${translateYTo}px))`;
                bg.style.transform = `translate(${translateXTo}px, ${translateYTo}px)`;
                translateYTo += .5;
            }
        }else {
            if(translateYTo > -10) {
                // bg.style.transform = `translate(calc(-50% + ${translateXTo}px), calc(-50% + ${translateYTo}px))`;
                bg.style.transform = `translate(${translateXTo}px, ${translateYTo}px)`;
                translateYTo += -.5;
            }
        }
        xCoord = e.screenX;
        yCoord = e.screenY;
    });
}

export {parallax};