import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from '../components/Navbar';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/auth/signup', { username, password });
      console.log(res.data)
      router.push("/login")
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center h-[93.5vh] bg-white'>
        <form onSubmit={handleSubmit} className="w-72 h-72 p-4 flex flex-col justify-center space-y-10 border-2 border-black">
          <input
            type="text"
            className='outline-none border-b-2 border-black'
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          <input
            type="password"
            className='outline-none border-b-2 border-black'
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className='border-2 h-10 border-black p-1 hover:text-white hover:bg-black hover:font-bold'>Sign Up</button>
          {/* {error && <p>{error}</p>} */}
        </form>
      </div>
    </>
  );
}
export default Signup