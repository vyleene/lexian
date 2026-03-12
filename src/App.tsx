import './App.css'
import { AppController } from './controllers/AppController'
import AppView from './views/AppView'

function App() {
  const appViewModel = AppController()

  return <AppView {...appViewModel} />
}

export default App