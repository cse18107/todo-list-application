import './App.css';
import NavBar from './components/NavigationBar/NavBar';
import { Routes,Route } from 'react-router';
import Home from './components/Pages/Home/Home';
import AddTask from './components/Pages/AddTask/AddTask';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-task" element={<AddTask/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
