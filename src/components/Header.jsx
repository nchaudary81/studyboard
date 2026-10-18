function Header({ onDashboardClick, onAboutClick }) 
{
  return (
    <header>
      <h1>StudyBoard</h1>

      <nav>
        <button onClick={onDashboardClick}>Dashboard</button>
        <button onClick={onAboutClick}>About</button>
      </nav>
    </header>
  )
}

export default Header
