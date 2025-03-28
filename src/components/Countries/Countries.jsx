import React, { use } from 'react'
import Country from '../Country/Country';

const Countries = ({ fetchCountries }) => {

  const data = use(fetchCountries)
  console.log(data[0].name.common);
  return (
    <>
    <div className='grid'>

      {data.map((country, idx) => (
        <div key={idx} className="card">
          <Country country={country} />
        </div>
      ))}
    </div>
    </>
  );
};

export default Countries