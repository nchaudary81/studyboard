import { useState } from 'react'

function AddTaskForm({ onAddTask }) 
{
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')

  function handleSubmit(event) 
  {
    event.preventDefault()

    if (title.trim() === '' || subject.trim() === '') {
      return
    }

    onAddTask(title, subject)
    setTitle('')
    setSubject('')
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <h2>Add a Task</h2>

      <label htmlFor="task-title">Task Name</label>
      <input
        id="task-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter task name"
        required
      />

      <label htmlFor="task-subject">Subject</label>
      <input
        id="task-subject"
        type="text"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
        placeholder="Enter subject"
        required
      />

      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTaskForm
