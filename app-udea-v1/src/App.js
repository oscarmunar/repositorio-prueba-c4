import logo from './logo.svg';
import './App.css';
import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';
import { MyProfile } from './TempProfile'
import { useAuth0 } from '@auth0/auth0-react'
import { Fragment } from 'react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {isAuthenticated ? ( 
          <>
            <MyProfile />
            <LogoutButton />            
          </>
        ) : 
          (
            <LoginButton />          
        )}
      </header>
    </div>
  );
}

export default App;
