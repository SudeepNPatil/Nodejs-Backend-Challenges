import React from 'react';
import { useEffect } from 'react';

export default function Profile() {
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch('http://localhost:5000/profile', {
        method: 'GET',
        headers: {
          authorization: `${token}`,
        },
      });

      const data = await res.json();

      console.log(data);
      alert(data.message);
    }
    fetchdata();
  }, []);

  return <div className="flex fle-col">Hii</div>;
}
