import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import PageNotFound from './PageNotFound';
import Home from './MainPage/Home';
import RegisterForm from './RegisterForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { Logout } from './Logout';
function App() {
    const [authorized, setAuthorized] = useState(false);
    
    useEffect( () => {
      let loginStatus = localStorage.getItem("login_status");
      setAuthorized(loginStatus);
      console.log(authorized);
    }, [authorized])

    
  return (
    <>
      <NavBar loginStatus = {authorized}/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={RegisterForm}/>
          <Route path="/signin" component={LoginForm}/>
          <Route 
            path="/logout" 
            render={(props) => (
              <Logout {...props} loginStatus = {authorized} />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>  
  )
}

export default App;
