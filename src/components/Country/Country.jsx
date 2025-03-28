import React from 'react'

const Country = ({ country, handleVisited, visited, handleNotVisited }) => {
  return (
    <>
      <h4>{country.name.common}</h4>
      <img src={country.flags.png} width={250} height={150} alt="" />
      <p>Population {country.population}</p>
      <p>{country.landlocked ? "No ocean" : "has Beautiful ocean"}</p>
      <p>Independent : {country.independent ? "Free" : "Not free"}</p>
      {visited.includes(country.name.common) ? (
        <button onClick={() => handleNotVisited(country)}>Visited</button>
      ) : (
        <button onClick={() => handleVisited(country)}>Not Visited</button>
      )}
    </>
  );
};

export default Country