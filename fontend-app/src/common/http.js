import axios from 'axios';


export const apiRequest = async (method, api_url, request_body , onSuccess, OnError) => {
    console.log("process.env.REACT_APP_BASEURL", process.env.REACT_APP_BASEURL)
    try {
        const data = await axios({
            method: method,
            url: process.env.REACT_APP_BASEURL + api_url,
            data: request_body
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
              }
        })
        onSuccess(data?.data)
    } catch (error) {
        OnError(error)
    }

}