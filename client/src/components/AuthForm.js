import React, {useContext, useState} from 'react';
import { UserContext } from '../context/UserContext';
import {signUpUser, signInUser} from "../utils/auth";

const AuthForm = ({buttonType}) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const signUpSubmit = async (e) => {
    e.preventDefault();
    const user = await signInUser(formData);
    setUser(user);
    //TODO Set Session Token
  }
  const signInSubmit =  async (e) => {
    e.preventDefault();
    const user = await signInUser(formData);
    setUser(user);
    //TODO Set Session Token
  }
  const {email, username, password} = formData
  const {user, setUser} = useContext(UserContext);
  return (  
    <form>
      <input type="text" name="email" value={email} onChange={handleChange} />
      <input type="text" name="username" value={username} onChange={handleChange}/>
      <input type="password" name="password" value={password} onChange={handleChange} />
      
      {buttonType === "Sign Up" ?
        <button type="submit" onClick={signUpSubmit}>
          {buttonType}
        </button>
        :
        <button type="submit" onClick={signInSubmit}>
          {buttonType}
        </button>
      }
      
    </form>
  );
}
 
export default AuthForm;