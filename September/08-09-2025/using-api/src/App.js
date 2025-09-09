import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const apiKey = "9f680c3a914e846fac0a42b1536971c8"; // replace with your API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
      
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);

      if (resJson.main) {
        setCity(resJson.main);
      } else {
        setCity(null);
      }
    };

    fetchApi();
  }, [search]);

  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Enter city..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      {!city ? (
        <p>Not Found!</p>
      ) : (
        <div>
          <h2>
            <i className="fa-solid fa-location-dot"></i> {search}
          </h2>
          <h1>{city.temp} °C</h1>
          <h2>Minimum Temperature: {city.temp_min} °C</h2>
          <h2>Maximum Temperature: {city.temp_max} °C</h2>
        </div>
      )}
    </div>
  );
}

export default App;
