

export function getFollowing(handle) {
    return fetch('./data.json').then(response => {
        // console.log(response);
        return response.json();
    }).then(data => {
        // Work with JSON data here
        // console.log(data[handle]);
        // retdata = data[handle]
        if (data.includes(handle)) {
            return data[handle]
        }
        return []
    }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
        return []
    });
}