import React, {useState} from 'react';
import Flag from 'react-world-flags';

const CountrySelector = ({setVisitedCountries, visitedCountries, countryData, allCountriesFlat}) => {
  const [searchResult, setSearchResult] = useState("");

  const searchedCountries = allCountriesFlat.filter(country => countryData[country].name.toLowerCase().includes(searchResult.toLowerCase()))
  const allCountries = searchedCountries.map(country => {
    return (
      visitedCountries.indexOf(country) < 0 ?  
        <button className="flex border bg-gray-50  p-1 justify-between text-left" 
          onClick={() => {
            setVisitedCountries([...visitedCountries, country])
          }}> 
          {countryData[country].name} - {country}
          <Flag className="h-4 inline" code={country} fallback={ <span></span> }/>
        </button>
      :  
        <button className="flex border bg-green-300  p-1 justify-between text-left" 
          onClick={() => {
          const filteredCountries = visitedCountries.filter(el => el !== country)
          setVisitedCountries([...filteredCountries])
        }}> 
        {countryData[country].name} - {country}
        <Flag className="h-4 inline" code={country} fallback={ <span></span> }/>
        </button>
    )
  })
  return ( 
    <> 
      <form className="py-2">
        Search for a country...
        <input className="mx-2" type="text" value={searchResult} className="border border-gray-500" onChange={(e) => setSearchResult(e.target.value) } />
      </form>
      <div className="grid  gap-2 grid-cols-2 md:grid-cols-4">
        {allCountries}
      </div>
    </>
  );
}
 
export default CountrySelector;