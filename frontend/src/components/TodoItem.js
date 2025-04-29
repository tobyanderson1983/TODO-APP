// TodoItem.js --Single todo item

import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div className='todo-item' >
            <span 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }} 
                onClick={() => onToggle(todo._id)}
            >
                {todo.text}
            </span>
            <button className='delete-button' onClick={() => onDelete(todo._id)}>Delete</button>
        </div>
    );
}

export default TodoItem;