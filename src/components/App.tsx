import { Route,Routes,BrowserRouter } from 'react-router-dom'
import TodoPage from './ToDo_Page'
import { TaskProvider } from '../contexts/TaskContext'

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<TodoPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  )
}

export default App
