import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/auth/signup", {
        username,
        password,
      });
      console.log(res.data);
      router.push("/login");
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <>
      <div className="flex h-[93.5vh] items-center justify-center bg-white">
        <form
          onSubmit={handleSubmit}
          className="flex  h-72 w-72 flex-col justify-center space-y-10 border-2 border-black p-4"
        >
          <input
            type="text"
            className="border-b-2 border-black outline-none"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="border-b-2 border-black outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="h-10 border-2 border-black p-1 hover:bg-black hover:font-bold hover:text-white"
          >
            Sign Up
          </button>
          {/* {error && <p>{error}</p>} */}
        </form>
      </div>
    </>
  );
};
export default Signup;
