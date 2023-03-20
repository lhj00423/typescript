import React from 'react';
import TodoInput from './components/TodoInput';
import TodoListsEdit2 from './components/TodoListsEdit2';
import TodoContext from './context/TodoContext';

const App3 = () => {
    return (
        <div>
            <TodoContext>
                <TodoInput/>
                <TodoListsEdit2/>
            </TodoContext>
        </div>
    );
};

export default App3;