import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavUser from './Components/NavUser';
import Home from './Components/Home';
import ListeUser from './Components/ListeUser';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div >
      <NavUser/>


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ListeUser' element={<ListeUser/>} />
        <Route path='/AddUser' element={<AddUser/>} />
        <Route path='/EditUser/:id' element={<EditUser/>} />

      </Routes>
    </div>
  );
}

export default App;
