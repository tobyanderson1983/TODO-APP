// Home.js --Main todo page

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from '../components/TodoList';
import '../App.css';

function Home() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    // Fetch todos on mount
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/todos');
                setTodos(res.data);
                setError('');
            } catch (err) {
                console.error('Failed to fetch todos:', err);
                setError('Could not load todos. Please try again later.');
            }
        };
        fetchTodos();
    }, []);

    const addTodo = async () => {
        if (!text.trim()) {
            setError('Todo cannot be empty.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/todos', { text });
            setTodos([...todos, res.data]);
            setText('');
            setError('');
        } catch (err) {
            console.error('Failed to add todo:', err);
            setError('Failed to add todo. Try again.');
        }
    };

    const toggleTodo = async (id) => {
        try {
            const todo = todos.find(t => t._id === id);
            const res = await axios.put(`http://localhost:5000/api/todos/${id}`, {
                completed: !todo.completed
            });
            setTodos(todos.map(t => (t._id === id ? res.data : t)));
            setError('');
        } catch (err) {
            console.error('Failed to toggle todo:', err);
            setError('Failed to update todo. Try again.');
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/todos/${id}`);
            setTodos(todos.filter(t => t._id !== id));
            setError('');
        } catch (err) {
            console.error('Failed to delete todo:', err);
            setError('Failed to delete todo. Try again.');
        }
    };

    return (
        <div className='todo-container'>
            <h1>TODO LIST</h1>

            {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

            <input
                value={text}
                onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                onChange={(e) => setText(e.target.value)}
            />
            <button style={{ marginBottom: '20px' }} onClick={addTodo}>Add</button>

            <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
    );
}

export default Home;
