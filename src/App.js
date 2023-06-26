import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import NavBar from './NavBar';
import ActionUser from './ActionUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/userlist" element={<UserList/>}/>
          <Route path="/createuser" element={<ActionUser/>}/>
          <Route path="/edituser/:id" element={<ActionUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
