import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import { useLocalState } from '../hooks.js'
const SecondFruit = () => {

    const [secondFruit, setSecondFruit] = useLocalState('secondFruit')
    return (
        <div>
            <p>Second Fruit: {secondFruit}</p>
            <Button onClick={() => setSecondFruit('Banana')}>Banana</Button>
            <Button onClick={() => setSecondFruit('Apple')} > Apple</Button>
        </div>
    );
}

export default SecondFruit;