import { useEffect } from 'react';

export default function Admin() {
  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch('http://localhost:5000/admin', {
      method: 'GET',
      headers: {
        authorization: `${token}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        alert(data.message);
      });
  }, []);

  return <div className="flex flex-row"></div>;
}
