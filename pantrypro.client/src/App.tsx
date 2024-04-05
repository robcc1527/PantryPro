import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SideBar from './Components/Sidebar';
import Pantry from './Pages/Pantry';
import Dashboard from './Pages/Dashboard';
import './App.css';
import Footer from "./Components/Footer/Footer";

interface Forecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

function App() {
  const [forecasts, setForecasts] = useState<Forecast[]>();
 
  useEffect(() => {
    populateWeatherData();
  }, []);

  const contents =
    forecasts === undefined ? (
      <p>
        <em>
          Loading... Please refresh once the ASP.NET backend has started. See{" "}
          <a href="https://aka.ms/jspsintegrationreact">
            https://aka.ms/jspsintegrationreact
          </a>{" "}
          for more details.
        </em>
      </p>
    ) : (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    return (
        <Router>
            <SideBar />
            <Routes>
                <Route path='/dashboard' element={<Dashboard />}/>
                <Route path='/pantry' element={<Pantry />}/>
            </Routes>
            
            <div>
                <h1 id="tabelLabel">Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
                <div>
                    My name is Chezy. Hello World!
                    My name is Izzy. Hello World!!! 
                    My name is Esteban. Hello World!
                    Test
                </div>
            </div>
            <Link to={'/dashboard'}>Dashboard</Link>
            <br />
            <Link to={'/pantry'}>Pantry</Link>
            <Footer /> {/* Include the Footer component here */}
        </Router>
    );
  

  async function populateWeatherData() {
    const response = await fetch("weatherforecast");
    const data = await response.json();
    setForecasts(data);
  }
}

export default App;
