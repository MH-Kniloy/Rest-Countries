import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

function App() {

   const fetchCountries = fetch("https://restcountries.com/v3.1/all").then(res => res.json())
  

  return (
    <>
      <Suspense fallback={<h3>Loading....</h3>}>
        <Countries fetchCountries={fetchCountries} />
      </Suspense>
    </>
  );
}

export default App
