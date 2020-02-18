import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { StoreContext } from '../Store';

function Todo(props) {
    const [show, setShow] = useState(false);
    const [todo, setTodo] = useState('');
    // const [todoList, setTodoList] = useState([])

    const [state, dispatch] = useContext(StoreContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addTodo = () => {
        //setTodoList([...todoList, { name: todo, done: false }])
        dispatch({ type: 'ADD_TODO', payload: { name: todo, done: false } })
        setTodo('')
        handleClose()
    }
    // const changeDone = (index) => {
    //     setTodoList(todoList.filter((item, id) => {
    //         if (id === index) {
    //             console.log(id, index)

    //             item.done = !item.done
    //         }
    //         console.log(item)
    //         return item
    //     }))
    // }

    return (
        <>
            <h2>Things todo</h2>
            <Button variant="primary" onClick={handleShow}>
                Add Todo
            </Button>

            <ul className="mt-3">
                {state.todoList.map((item, index) => {
                    return (
                        <li key={index}
                            // onClick={() => changeDone(index)}
                            onClick={() => dispatch({ type: 'UPDATE_TODO', payload: { index: index } })}
                        >
                            {item.done ?
                                <span style={{ textDecoration: 'line-through' }} >{item.name}</span> :
                                <span>{item.name}</span>}

                        </li>
                    )
                })}
            </ul>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new todo item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addTodo}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Todo;