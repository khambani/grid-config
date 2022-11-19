import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DataGrid from './components/grid/DataGrid'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='' index element={<DataGrid />}/>
      </Routes>
    </div>
  )
}

export default App
