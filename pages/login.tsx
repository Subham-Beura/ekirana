import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/auth/login', { username, password });
      console.log(res.data)
    } catch (err: any) {
      setError(err.response);
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center h-[93.5vh] bg-white '>
        <form onSubmit={handleSubmit} className='w-72 h-72 p-4 flex flex-col justify-center space-y-10 border-2 border-black'>
          <input
            className='outline-none border-b-2 border-black'
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
            />
          <input
            className='outline-none border-b-2 border-black'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <button type="submit" className='border-2 h-10 border-black p-1 hover:text-white hover:bg-black hover:font-bold'>Log In</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </>
  );
};
export default Login;