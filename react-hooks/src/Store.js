import React, { createContext, useReducer } from 'react';

const initialState = {
    counter: 0,
    todoList: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state, counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state, counter: state.counter - 1
            }
        case 'RESET':
            return {
                ...state, counter: 0
            }
        case 'ADD_TODO':
            return {
                ...state, todoList: [...state.todoList, action.payload]
            }
        case 'UPDATE_TODO':
            const newTodoList = state.todoList.filter((item, id) => {
                if (id === action.payload.index) {
                    item.done = !item.done
                }
                return item
            })

            return {
                ...state, todoList: newTodoList
            }
        default:
            return state
    }
}
export const StoreContext = createContext({})
const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
}

export default Store;