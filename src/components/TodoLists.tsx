import React from 'react';
import{dataType} from '../App';

interface todoProps {
    todos:dataType[];
    onToggletodo:(id:number)=>void;
    onDeltodo:(id:number)=>void;
} 
const TodoLists = ({todos,onToggletodo,onDeltodo}:todoProps) => {
    return (
        <div>
            <ul>
                {todos.map(todo=><li key={todo.id} style={{background:todo.isDone ? "pink" : undefined}}>
                    <span onClick={()=>onToggletodo(todo.id)}>{todo.text}</span>
                    <button onClick={()=>onDeltodo(todo.id)}>삭제</button></li>)}
            </ul>
        </div>
    );
};

export default TodoLists; 