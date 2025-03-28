import React from 'react'

const Country = ({country}) => {
    
  return (
    <>
    <h4>{country.name.common}</h4>
    <img src={country.flags.png} width={250} height={150} alt="" />
    <p>Population {country.population}</p>
    </>
  )
}

export default Country