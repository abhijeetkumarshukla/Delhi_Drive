import  { useState, useEffect, useRef } from 'react';
import Card from './components/Card';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

 
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://randomuser.me/api/?page=${page}&results=10`);
      const data = await response.json();
      setUsers((prevUsers) => [...prevUsers, ...data.results]);
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);


 
  const lastUserElementRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  };


  return (
    <div className="container">
    <h1>Infinite Scrolling</h1>
    <div className="user-grid">
      {users.map((user, index) => {
        if (users.length === index + 1) {
          return (
            <div ref={lastUserElementRef} key={user.login.uuid}>
              <Card user={user} />
            </div>
          );
        } else {
          return <Card key={user.login.uuid} user={user} />;
        }
      })}
    </div>
    {loading && <p>Loading more users...</p>}
  </div>

  )
}

export default App
