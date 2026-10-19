import AddTaskForm from './AddTaskForm'
import TaskItem from './TaskItem'

function TaskList({ tasks, setTasks }) 
{
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function addTask(title, subject) 
  {
    const newTask = {
      id: Date.now(),
      title: title,
      subject: subject,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div className="task-section">
      <div className="task-form-column">
        <AddTaskForm onAddTask={addTask} />
      </div>

      <section className="task-list">
        <h2>My Tasks</h2>

        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
          />
        ))}
      </section>
    </div>
  )
}

export default TaskList
