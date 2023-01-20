import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
const Signup=()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault( );
      try {
        const res = await axios.post('http://localhost:4000/auth/signup', { username, password });
        console.log(res.data)
      } catch (err) {
        setError(err);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">signup</button>
        {/* {error && <p>{error}</p>} */}
      </form>
    );
}
export default Signup