import { useState, useEffect } from 'react';


export const useResource = (resource) => {

    const [resourceList, setResourceList] = useState([])

    useEffect(() => {
        //defining arrow function and invoking immidatety 
        (async (resource) => {
            fetch('https://jsonplaceholder.typicode.com/' + resource)
                .then(res => res.json())
                .then(res => setResourceList(res))
        })(resource)
    }, [resource])
    return resourceList
}