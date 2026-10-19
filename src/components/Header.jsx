function Header({
  onDashboardClick,
  onAboutClick,
  darkMode,
  onToggleDarkMode
}) 
{
  return (
    <header>
      <h1>StudyBoard</h1>

      <nav>
        <button onClick={onDashboardClick}>Dashboard</button>
        <button onClick={onAboutClick}>About</button>
        <button onClick={onToggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  )
}

export default Header
