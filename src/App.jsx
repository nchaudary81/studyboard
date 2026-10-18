import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Stats from './components/Stats'
import TaskList from './components/TaskList'
import About from './components/About'

function App() 
{
  const [currentView, setCurrentView] = useState('dashboard')

  return (
    <div className="app">
      <Header
        onDashboardClick={() => setCurrentView('dashboard')}
        onAboutClick={() => setCurrentView('about')}
      />

      <main>
        {currentView === 'dashboard' ? (
          <>
            <h2>Welcome to your dashboard!</h2>
            <p>Keep track of your assignments and study goals.</p>

            <Stats />

            <div className="dashboard-layout">
              <TaskList />
            </div>
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
