import "./App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAPOD } from "./api.ts";
import { APODResponse } from "./types/api.ts";
import { APOD } from "./types/APOD.ts";

function App() {
  const [loading, setLoading] = useState<boolean>();
  const [apod, setAPOD] = useState<APOD>();
  const [rateLimitRemaining, setRateLimitRemaining] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    getAPOD().then((res: APODResponse) => {
      setAPOD(res.apod);
      setRateLimitRemaining(res.rateLimitRemaining);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <div>searching...</div>}
      {!loading && apod && (
        <>
          <div className="align-middle font-serif text-blue-600">
            <h1>Carmen Bondra</h1>
          </div>
          <br />
          <div className="flex flex-row">
            <div className="basis-2/3">
              <img src={apod.url} alt={apod.explanation} />
            </div>
            <div className="grid basis-1/3">
              <h1>{apod.title}</h1>
              {apod.explanation}
              <div className="grid grid-rows-3 text-gray-500">
                <p>Date: {apod.date}</p>
                <p>Rate Limit Remaining: {rateLimitRemaining}</p>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="grid grid-cols-3 pt-8">
        <Link to="/home">go home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
    </>
  );
}

export default App;
