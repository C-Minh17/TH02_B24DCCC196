import { Link, NavLink, Outlet } from 'react-router-dom';
import "./App.css"

function App() {
  return (
    <div>
      <div style={{
        backgroundColor: "#4577C5",
        padding: "20px",
      }}>
        <Link className='linkRoute' to={"/"}>Trang chủ</Link>
        <Link className='linkRoute' to={"/Bai1"}>Bài 1</Link>
        <Link className='linkRoute' to={"/bai2"}>Bài 2</Link>
        <Link className='linkRoute' to={"/bai3"}>Bài 3</Link>
      </div>

      <div style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 6px #0000000f',
        margin: '20px auto',
        maxWidth: '980px',
        padding: '20px',
      }}>
        <Outlet />
      </div>

    </div>
  );
}

export default App;
