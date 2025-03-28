import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ fetchCountries }) => {
  const [visited, setVisited] = useState([]);

  const handleVisited = (country) => {
    const totalVisited = [...visited, country.name.common];
    setVisited(totalVisited);
  };
  
  const handleNotVisited = (country)=>{
      
      setVisited(visited.filter((countryName) => country.name.common !== countryName));
      
  }

  const data = use(fetchCountries);
;
  return (
    <>
      <h1>Total Visited countries : {visited.length} </h1>
      <div className="grid">
        {data.map((country, idx) => (
          <div key={idx} className="card">
            <Country
              handleVisited={handleVisited}
              country={country}
              visited={visited}
              handleNotVisited={handleNotVisited}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Countries;
