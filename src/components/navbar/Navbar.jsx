import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getTheUser } from "../../reducers/usersSlice";
//import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  //const location = useLocation()
  const user = useSelector(store => store.users)
  const dispatch = useDispatch()
  console.log(user.users.img)
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const userId = JSON.parse(localStorage.getItem("user")).userID
      dispatch(getTheUser(userId))
    }

  }, [dispatch])
  
  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.reload()
  }
  //const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">booking</span>
        </Link>
        {(localStorage.getItem("user")) ?<div className="user">
          <img src={user.users?.img} alt="" />
          <span>{user.users.username}</span>
          <span onClick={handleLogout}>logout</span>
          </div>
          : (
          <div className="navItems">
            <Link to='/register'><button className="navButton">Register</button></Link>
            <Link to='/login'><button className="navButton">login</button></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;