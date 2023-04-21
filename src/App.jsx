import { AllRoutes } from './routes/AllRoutes'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Header />
      <AllRoutes/>
      <Footer />
    </div>
  )
}

export default App
