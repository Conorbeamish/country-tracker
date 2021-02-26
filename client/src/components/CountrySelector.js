
import Flag from 'react-world-flags'

const CountrySelector = ({setVisitedCountries, visitedCountries, countryData, allCountriesFlat}) => {
  const allCountries = allCountriesFlat.map(country => {
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
    <div className="grid grid-cols-4 gap-2">
      {allCountries}
    </div>
  );
}
 
export default CountrySelector;