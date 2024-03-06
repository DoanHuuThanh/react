import React, { useState } from 'react';

type TaskListProps = {
    tasks: any;
    onChangeTask: (task: any) => void;
    onDeleteTask: (taskId: number) => void;
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {  

    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [text, setText] = useState(' ')

    const handleEdit = (id: number, newText: string) => {
        onChangeTask({ id, text: newText, done: true });
        setEditingTaskId(null); 
        setText(' ')
    }

    const handleCancelEdit = () => {
        setEditingTaskId(null); 
    }

    return (
        <div>
            <ul>
                {tasks.map((task: any) => (
                    <li key={task.id}>
                        {editingTaskId === task.id ? (
                            <>
                                <input
                                    type="text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                                <button onClick={() => handleEdit(task.id, text)}>Save</button>
                                <button onClick={handleCancelEdit}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <span>{task.text}</span>
                                {" "}
                                <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
                                <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
