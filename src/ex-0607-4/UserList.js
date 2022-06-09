import React from 'react';
import { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //向server獲取資料(get)
  const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    //     console.log(1);
    //設定到state
    setUsers(data);
  };

  //didMount
  useEffect(() => {
    setIsLoading(true);
    fetchUser();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  // useEffect(()=>{

  // },[isLoading,isConnecting])

  const spinner = (
    <>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );

  const displayTable = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id} style={{ border: '1px solid black' }}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <>
      <h1>User List</h1>
      {isLoading ? spinner : displayTable}
    </>
  );
};

export default UserList;
