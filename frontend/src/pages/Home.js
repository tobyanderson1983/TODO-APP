// Home.js --Main todo page

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from '../components/TodoList';
import '../App.css';

function Home() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/todos').then(res => setTodos(res.data));
    }, []);

    const addTodo = () => {
        axios.post('http://localhost:5000/api/todos', { text }).then(res => {
            setTodos([...todos, res.data]);
            setText('');
        });
    };

    const toggleTodo = (id) => { 
        axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !todos.find(t => t._id === id).completed })
            .then(res => setTodos(todos.map(t => (t._id === id ? res.data : t))));
    };

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/api/todos/${id}`)
            .then(() => setTodos(todos.filter(t => t._id !== id)));
    };

    return (
        <div className='todo-container'>
            <h1>TODO LIST</h1>
            <input value={text} onKeyDown={(e) => e.key === 'Enter' && addTodo(e)} 
                onChange={e => setText(e.target.value)} />
            <button style={{ marginBottom: '20px'}} onClick={addTodo}>Add</button>
            <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
    );
}

export default Home;