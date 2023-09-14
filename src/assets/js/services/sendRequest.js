'use strict';

const sendReq = async (url, data) => {
    try {
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        if(!result.ok) {
            throw new Error(`Could not fetch ${url}, status ${result.status}`);
        }
        return await result.json();
    }catch(e) {
        throw e;
    }
};

export {sendReq};