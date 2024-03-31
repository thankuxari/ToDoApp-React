import { useState, useRef } from 'react';
import './Task.css';

function App() {
    const [items, setItems] = useState([]);
    const inputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        const inputValue = inputRef.current.value.trim();
        if (inputValue !== '') {
            setItems((prevItems) => {
                return [
                    ...prevItems,
                    {
                        id: Date.now().toString(),
                        text: inputRef.current.value,
                        completed: false,
                    },
                ];
            });
        }
    }

    function handleCheck(id) {
        setItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed };
                } else {
                    return item;
                }
            })
        );
    }

    function handleDelete(index) {
        setItems(items.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className="to-do-app">
                <div className="to-do-header">
                    <h1>ToDo App 📃</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Add Your Task"
                            ref={inputRef}
                        />
                        <button type="submit">Add</button>
                    </form>
                    {items.length > 0 && (
                        <ul>
                            {items.map((item, index) => (
                                <div className="task" key={item.id}>
                                    <input
                                        type="checkbox"
                                        checked={item.completed}
                                        onChange={() => handleCheck(item.id)}
                                    />
                                    <li
                                        className={
                                            item.completed ? 'line-through' : ''
                                        }
                                    >
                                        {item.text}
                                    </li>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
