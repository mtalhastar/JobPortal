import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
const SignUp = () => {
  
  const [username,setusername]=useState('')
  const [name,setname]=useState('')
  const [password, setPassword] = useState('');
  const [role,setrole]=useState('')
  const [error , setError]=useState('')

  
  const handleUsernameChange = (event) => {
    setusername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

   
  const handleNameChange = (event) => {
    setname(event.target.value);
  };
  const handleOptionChange = (event) => {
     setrole(event.target.value);
  };


  const handleSubmit = async(event) => {
    event.preventDefault();
    
        const user={username:username, name:name,password:password,role:role}
        const response = await fetch('/user/signup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setname('')
            setusername('')
            setPassword('')
            setrole('')
            setError('')
            alert("Account Created Successfully")
        }
    // Handle form submission here
  };

  return (
    <div className='pad'>
      
   
    <form  onSubmit={handleSubmit}>
        <h1 className='nice'>Welcome To SignUp Page</h1>
        <h3>username:</h3>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <h3>name:</h3>
        <input type="text" value={name} onChange={handleNameChange} />
        <h3>password:</h3>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <h3>role:</h3>
         <select className="dropdown1"
            value={role}
            onChange={handleOptionChange}
            >
          <option value="-">Select Option</option>
          <option value="admin">admin</option>
          <option value="student">student</option>
          <option value="employer">employer</option>
        </select>
      <button type="submit">Sign Up</button>
      <a><Link to="/">Exists? <span><strong>Login</strong></span></Link></a>
      <h3>{error}</h3>
    </form>

     </div>
  );
};

export default SignUp;