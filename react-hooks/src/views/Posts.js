import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import ResourceList from './ResourceList';
import UserList from './UserList';
const Posts = () => {
    const [resource, setResource] = useState('posts')


    return (
        <div>
            <UserList />
            <div>
                <Button variant="primary" onClick={() => setResource('posts')}>Posts</Button>
                <Button variant="primary" onClick={() => setResource('todos')}>Todos</Button>
            </div>
            <ResourceList resource={resource} />

        </div >
    );
}

export default Posts;