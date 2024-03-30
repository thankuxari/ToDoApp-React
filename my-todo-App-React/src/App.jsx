import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Task from './Task';

function App() {
    const [item, setItem] = useState('');
    const [task, setTask] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        setTask((currentTask) => {
            return [
                ...currentTask,
                { id: Date.now(), title: item, completed: false },
            ];
        });

        setItem('');
    }

    function handleTaskCheck(taskId, isChecked) {
        setTask((currentTask) => {
            return currentTask.map((task) => {
                if (task.id === taskId) {
                    return { ...task, completed: isChecked };
                }
                return task;
            });
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="todo-app">
                <label htmlFor="item">Add Task</label>
                <input
                    type="text"
                    value={item}
                    onChange={(event) => setItem(event.target.value)}
                    id="item"
                />
                <button>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
            <h1>Todo List</h1>
            <ul className="list">
                {task.map((task) => (
                    <Task key={task.id} task={task} onCheck={handleTaskCheck} />
                ))}
            </ul>
        </>
    );
}

export default App;
