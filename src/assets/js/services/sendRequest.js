'use strict';

const sendReq = async (url, data) => {
    try {
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
    }catch(e) {
        throw e;
    }
    return await res;
};

export {sendReq};