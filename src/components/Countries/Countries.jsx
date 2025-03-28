import React, { use } from 'react'

const Countries = ({ fetchCountries }) => {

  const data = use(fetchCountries)
  console.log(data[0].name.common);
  return (
    <>
      {
        data.map(country =><div className='card'><country country={country}/></div>)
      }
    </>
  );
};

export default Countries