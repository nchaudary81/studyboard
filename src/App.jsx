
import './App.css'
import Header from './components/Header'
import Stats from './components/Stats'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <h2>Welcome to your dashboard!</h2>
        <p>Keep track of your assignments and study goals.</p>

        <Stats />
        <TaskList />
      </main>

      <footer>
        <p>StudyBoard - Built with React</p>
      </footer>
    </div>
  )
}

export default App
