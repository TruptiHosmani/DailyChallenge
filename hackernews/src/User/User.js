import React, { useState, useEffect } from 'react';


function User({ match }) {
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/user/' + match.params.name + '.json?print=pretty')
            .then(res => res.json())
            .then((res) => {
                setUser(res)
            })
    }, [])


    return (
        <div >
            <h2>User : {user.id}</h2>
            <p>Karma : {user.karma}</p>
            {/* <p>Created : {new Date(user.created * 1000)}</p> */}

        </div >
    )
}

export default User