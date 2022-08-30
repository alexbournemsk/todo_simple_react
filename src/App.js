import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import TodoList from './components/TodoList';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/todo'  element={<TodoList />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
