import React, {useContext, useState} from 'react';
import { UserContext } from '../context/UserContext';
import {Link} from "react-router-dom";

const Nav = () => {
  const {user, setUser} = useContext(UserContext);
  const logout = () => {
    setUser(null);
    //Remove token from storage
  }
  return (  
    <nav>
      <Link to="/">
        Home
      </Link>
      {user ?
        <button onClick={() => logout() } >
          Log Out
        </button>
      : 
        <>
          <Link to="/signin">
            Sign In
          </Link>
          <Link to="/signup">
            Sign Up
          </Link>
        </>
      }
    </nav>
  );
}
 
export default Nav;