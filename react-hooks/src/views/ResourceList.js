import React from 'react';
import { useResource } from './useResource'

const ResourceList = ({ resource }) => {
    const resourceList = useResource(resource)
    return (
        <div>
            <h2>{resource.toUpperCase()}</h2>
            <ul>
                {resourceList.map((item, index) => {
                    return (
                        <li key={index}>{item.title}</li>
                    )
                })}
            </ul>

        </div>
    );
}

export default ResourceList;