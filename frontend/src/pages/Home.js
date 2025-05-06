import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from '../components/TodoList';
import '../App.css';

function Home() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/todos')
            .then(res => setTodos(res.data))
            .catch(err => {
                console.error(err);
                setError('Failed to load todos. Please refresh.');
            });
    }, []);

    const addTodo = () => {
        if (!text.trim()) return;
        axios.post('http://localhost:5000/api/todos', { text })
            .then(res => {
                setTodos([...todos, res.data]);
                setText('');
                setError('');
            })
            .catch(err => {
                console.error(err);
                setError('Could not add todo. Try again.');
            });
    };

    const toggleTodo = (id) => {
        const todo = todos.find(t => t._id === id);
        if (!todo) return;

        axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !todo.completed })
            .then(res => {
                setTodos(todos.map(t => (t._id === id ? res.data : t)));
                setError('');
            })
            .catch(err => {
                console.error(err);
                setError('Could not update todo status.');
            });
    };

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/api/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(t => t._id !== id));
                setError('');
            })
            .catch(err => {
                console.error(err);
                setError('Could not delete todo.');
            });
    };

    return (
        <div className='todo-container'>
            <h1>TODO LIST</h1>
            {error && <div className="error-message">{error}</div>}
            <input
                value={text}
                onKeyDown={(e) => e.key === 'Enter' && addTodo(e)}
                onChange={e => setText(e.target.value)}
            />
            <button style={{ marginBottom: '20px' }} onClick={addTodo}>Add</button>
            <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
    );
}

export default Home;
