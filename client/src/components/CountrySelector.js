import allCountries from "../utils/countries";
import Flag from 'react-world-flags'


const CountrySelector = ({setVisitedCountries, visitedCountries, countries}) => {
  const allCountriesSpread = allCountries.map(country => {
    let countryCode = country[0]
    return (
      <button onClick={() => setVisitedCountries([...visitedCountries, [countryCode]])}> 
        {countries[countryCode].name} 
        {countryCode}
        <Flag code={countryCode} fallback={ <span></span> } height="16"/>
      </button>
    )
  })
  return (  
    <div>
      {allCountriesSpread}
    </div>
  );
}
 
export default CountrySelector;