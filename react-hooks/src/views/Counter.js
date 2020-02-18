import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap'
import { StoreContext } from '../Store';

function Counter(props) {
    //const [count, setCount] = useState(0)
    const [state, dispatch] = useContext(StoreContext)

    return (
        <div>
            <h2>Counter Example</h2>
            <p>{state.counter}</p>
            <Button
                variant="primary"
                onClick={() => dispatch({ type: 'INCREMENT' })}
            //onClick={(e) => setCount(count + 1)}
            > + </Button>
            <Button
                variant="primary"
                onClick={() => dispatch({ type: 'DECREMENT' })}
            //onClick={(e) => setCount(count - 1)}
            > - </Button>
            <Button
                variant="primary"
                onClick={() => dispatch({ type: 'RESET' })}
            //onClick={(e) => setCount(0)}
            > reset </Button>
        </div>
    );
}

export default Counter;