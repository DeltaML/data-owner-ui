import {serverProtocol, serverDomain, serverPort} from '../config/ServerConfig';

function ServerException(msg) {
   this.msg = msg;
   this.name = "ServerException";
}

export const executeRequest = async (httpMethod, path, requestData, headers) => {
    const settings = {
        method: httpMethod,
        headers: headers,
        body: requestData,
    };
    const url = `${serverProtocol}://${serverDomain}:${serverPort}/${path}`;
    const response =  await fetch(url, settings);
    if (response.ok){
        return await response.json()
    }
    throw new ServerException(response)

};

const executeJsonRequest = async (httpMethod, path, requestData) => {
    const headers =  {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    return await executeRequest(httpMethod, path, JSON.stringify(requestData), headers)
};


export const post = async (url, requestData) => {
    return await executeJsonRequest("POST", url, requestData)
};

export const get = async (url) => {
    return await executeJsonRequest("GET", url)
};

export const del = async (url) => {
    return await executeJsonRequest("DELETE", url)
};
