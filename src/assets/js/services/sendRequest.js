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
        return await res;
    }catch(e) {
        throw e;
    }
};

export {sendReq};