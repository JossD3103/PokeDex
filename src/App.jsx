import { 
  Route, 
  Routes, 
  BrowserRouter 
} from 'react-router-dom'
import Index from './views'
import Detalle from './views/detalle'


function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/pokemon:id' element={<Detalle/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
