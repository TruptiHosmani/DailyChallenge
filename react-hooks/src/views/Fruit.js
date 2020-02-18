import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import { useLocalState } from '../hooks.js'
const Fruit = () => {

    const [fruit, setFruit] = useLocalState('fruit')
    return (
        <div>
            <p>Fruit: {fruit}</p>
            <Button onClick={() => setFruit('Banana')}>Banana</Button>
            <Button onClick={() => setFruit('Apple')} > Apple</Button>
        </div>
    );
}

export default Fruit;