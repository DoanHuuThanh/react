import React, { useState } from 'react';

interface addprops {
    onAddTask: (task: string) => void 
}

function AddTask({onAddTask}: addprops) {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (!task.trim()) return;
    onAddTask(task)
    setTask(' ')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='border-green-800' type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
