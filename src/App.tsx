import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const App: React.FC  = () => {

  return (
    <>
      <Router>
        <div>
          <nav>

          </nav>
          <main>
            <Routes>
              <Route path="/" Component={Home}/>
              <Route path="/login" Component={Login}/>
              <Route path="/register" Component={Register}/>
              <Route path="/dashboard" Component={Dashboard}/>
            </Routes>
          </main>

          <footer></footer>
        </div>
      </Router>
    </>
  )
}

export default App
