import { useReducer } from 'react';
import taskRecuder from './taskRecuder.tsx';
import AddTask from './AddTask.tsx';
import TaskList from './TaskList.tsx';

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},  
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];


export default function TaskApp() {
    const [tasks, dispatch] = useReducer(taskRecuder, initialTasks);

    function handleAddTask(text: string) {
        dispatch({
            type: "added",
            id: nextId++,
            text: text
        })
    }

    function handleChangeTask(task: any) {
          dispatch({
             type: "changed",
             task: task
          })
    }

    function handleDeleteTask(taskId: number) {
          dispatch({
            type: "deleted",
            id: taskId
          })
    }

   return (
        <>
           <h1>Prague itinerary</h1>
           <AddTask onAddTask = {handleAddTask}  />
           <TaskList
              tasks={tasks}
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
            />
        </>
   )    

}