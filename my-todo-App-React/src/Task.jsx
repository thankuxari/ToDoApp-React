import { useState, useRef } from 'react';
import './Task.css';

function Task(props) {
    const [isChecked, setIsChecked] = useState(props.task.completed);
    const [className, setClassName] = useState('');

    function handleCheck() {
        setIsChecked(!isChecked);
        props.onCheck(props.task.id, !isChecked);
    }

    function handleStyleCheck() {
        if (!isChecked) {
            setClassName('line-through');
        } else {
            setClassName('');
        }
    }

    return (
        <>
            <li>
                <label htmlFor="checkbox" className={className}>
                    <input
                        id="checkbox"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheck}
                        onClick={handleStyleCheck}
                    />
                    {props.task.title}
                </label>
                <button>Delete</button>
            </li>
        </>
    );
}

export default Task;
