import './App.css';
import NavBar from './components/NavigationBar/NavBar';
import { Routes,Route } from 'react-router';
import Home from './components/Pages/Home/Home';
import AddTask from './components/Pages/AddTask/AddTask';
import EditTask from './components/Pages/EditTask/EditTask';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-task" element={<AddTask/>}/>
        <Route path="/edit-task/:id" element={<EditTask/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
