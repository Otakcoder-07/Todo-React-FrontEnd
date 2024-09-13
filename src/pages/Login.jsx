import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here (will add API integration later)
    console.log('Logging in:', { username, password });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-10 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-5">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border w-full p-2 rounded"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full p-2 rounded"
            placeholder="Enter password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
