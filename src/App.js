import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import UserContext from './contexts/userContext';

function App() {

  const [isAdminUser, setIsAdminUser] = useState(true);
  
  return (
      <div className="App">
        <UserContext.Provider value={[isAdminUser,setIsAdminUser]} >
            <Header/>
            <Dashboard/>
        </UserContext.Provider>
        <div id="x" className='modalPortal'></div>
      </div>
      
  );
}

export default App;
