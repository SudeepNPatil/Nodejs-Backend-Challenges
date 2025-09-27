import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="flex flex-row gap-10 justify-center text-xl font-bold py-16 bg-gray-200 w-[100vw] h-[100vh]">
      <Link to={'/login'}>Login</Link>
      <Link to={'/signup'}>Signup</Link>
      <Link to={'/profile'}>profile</Link>
      <Link to={'/admin'}>admin</Link>
    </div>
  );
}
