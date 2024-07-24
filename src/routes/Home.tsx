import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Carmen Bondra</h1>
      <div className="card">
        <p>welcome home</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <Link to="/">head out</Link>
      </div>
    </>
  );
}

export default Home;
