import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import {useDispatch, useSelector} from 'react-redux'
import { login, signUp } from "../../reducers/usersSlice";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable
} from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";


const Signup = () => {

  const users = useSelector(store => store.users)
  const dispatch = useDispatch()
  const [data, setData] = useState(null);
  const [img, setImg] = useState('');
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(0);
  

  const navigate = useNavigate()

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const upload = () => {
    if (img === null) return;
    const imageRef = ref(storage, `images/${img.name + v4()}`);
    uploadBytes(imageRef, img).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(url => {
        
        setData(prev => {
          return { ...prev, img: url };
        })
      })
    })
    const uploadTask = uploadBytesResumable(imageRef, img)
    uploadTask.on('state_changed', snapshot => {
      
       setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      console.log("Upload is " + progress + "% done");
    })
    setUploaded(uploaded+1)
  };    

  const handleUpload = (e) => {
    e.preventDefault();
    upload()
  }

  const handleClick =  (e) => {
    e.preventDefault();
    dispatch(signUp(data))
    };
  const handleLogin=  (e) => {
    e.preventDefault();
    dispatch(login(data))
    navigate('/')
    
  };
  

  
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
                  className="lInput"
                  required
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
                  className="lInput"
                  required
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
                  className="lInput"
                  required
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="number"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="file"
          placeholder="img"
          name="img"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <span>{progress===0? "":`Upload is ${Math.floor(progress)}% done`}</span>
        <button disabled={users.status==='loading'?true:false} onClick={handleUpload} className="lButton">
          upload
        </button>
        <button
          style={{ display: `${users.status === 'succeeded' ? 'none' : 'block'}` }}
          disabled={users.status === 'loading' ? true : false}
          onClick={handleClick}
          className="lButton"
        >
          sign up
        </button>
        <button
          style={{ display: `${users.status === 'succeeded' ? 'flex' : 'none'}` }}
          disabled={users.status === 'loading' ? true : false}
          onClick={handleLogin}
          className="lButton"
        >
          login
        </button>
        {users.error && <span>{users.error.message}</span>}
      </div>
    </div>
  );
};

export default Signup;