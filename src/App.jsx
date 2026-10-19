import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Stats from './components/Stats'
import TaskList from './components/TaskList'
import About from './components/About'

function App() 
{
  const [currentView, setCurrentView] = useState('dashboard')
  const [darkMode, setDarkMode] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Finish programming homework',
      subject: 'Computer Science',
      completed: false
    },
    {
      id: 2,
      title: 'Study for database exam',
      subject: 'Database Systems',
      completed: true
    },
    {
      id: 3,
      title: 'Complete project proposal',
      subject: 'Database Systems',
      completed: false
    }
  ])

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Header
        onDashboardClick={() => setCurrentView('dashboard')}
        onAboutClick={() => setCurrentView('about')}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <main>
        {currentView === 'dashboard' ? (
          <>
            <h2>Welcome to your dashboard!</h2>
            <p>Keep track of your assignments and study goals.</p>

            <Stats tasks={tasks} />

            <TaskList
              tasks={tasks}
              setTasks={setTasks}
            />
          </>
        ) : (
          <About />
        )}
      </main>

      <footer>
        <p>StudyBoard - Built with React</p>
      </footer>
    </div>
  )
}

export default App
