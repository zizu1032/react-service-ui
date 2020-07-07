export const buildURL = (url, port, api, route, parameters) => {
    let builtURL = url + port + api + route
    Object.keys(parameters).map(element => builtURL = builtURL.concat(element, '=', parameters[element], '&'))
    return builtURL;
}