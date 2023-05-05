import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import {useDispatch, useSelector} from 'react-redux'
import { login } from "../../reducers/usersSlice";

const Login = () => {

  const users = useSelector(store => store.users)
  console.log(users)
  const dispatch = useDispatch()

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });


  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick =  (e) => {
   dispatch(login(credentials))
  };
  
  

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={users.status==='loading'?true:false} onClick={handleClick} className="lButton">
          Login
        </button>
        <button className="lButton" disabled={!localStorage.getItem('user')} onClick={goHome}>home</button>
      </div>
    </div>
  );
};

export default Login;