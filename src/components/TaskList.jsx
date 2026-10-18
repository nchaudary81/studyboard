import { useState } from 'react'

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish programming homework', subject: 'Computer Science', completed: false },
    { id: 2, title: 'Study for database exam', subject: 'Database Systems', completed: true },
    { id: 3, title: 'Complete project proposal', subject: 'Internet Programming', completed: false }
  ])

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  return (
    <section className="task-list">
      <h2>My Tasks</h2>

      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.subject}</p>
          <p>{task.completed ? 'Completed' : 'In Progress'}</p>

          <button onClick={() => toggleTask(task.id)}>
            {task.completed ? 'Mark In Progress' : 'Mark Completed'}
          </button>
        </div>
      ))}
    </section>
  )
}

export default TaskList
