function Stats({ tasks }) 
{
  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completed).length
  const remainingTasks = totalTasks - completedTasks

  return (
    <section className="stats">
      <div>
        <h3>{totalTasks}</h3>
        <p>Total Tasks</p>
      </div>

      <div>
        <h3>{completedTasks}</h3>
        <p>Completed Tasks</p>
      </div>

      <div>
        <h3>{remainingTasks}</h3>
        <p>Tasks Remaining</p>
      </div>
    </section>
  )
}

export default Stats
