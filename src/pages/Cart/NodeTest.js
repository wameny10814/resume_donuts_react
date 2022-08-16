import { useState, useEffect } from 'react';
function NodeTest() {
  const [data, setData] = useState({});
  const formInfo = {
    username: 'aaa',
    password: 'password',
  };
  useEffect(() => {
    fetch('http://localhost:3600/home')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    fetch('http://localhost:3600/home', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <p>{data.name}</p>
      <p>{data.age}</p>
    </div>
  );
}
export default NodeTest;
