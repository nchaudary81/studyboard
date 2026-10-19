function TaskItem({ task, onToggle }) 
{
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.subject}</p>
      <p>{task.completed ? 'Completed' : 'In Progress'}</p>

      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Mark In Progress' : 'Mark Completed'}
      </button>
    </div>
  )
}

export default TaskItem
