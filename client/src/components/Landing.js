import React, {useState} from 'react';
import CountrySelector from "../components/CountrySelector";
import UserStats from "../components/UserStats";
import {countries as countryData } from 'country-data';
import ChartContainer from "../components/Chart";
import allCountries from "../utils/countries";

const Landing = () => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const allCountriesFlat = allCountries.flat();
  return (
    <main className="mx-2 md:mx-20">
      <h1>Where have you been?</h1>
      <UserStats visitedCountries={visitedCountries} allCountries={allCountries} />
      <ChartContainer visitedCountries={visitedCountries}/>
      <CountrySelector  countryData = {countryData} visitedCountries={visitedCountries} setVisitedCountries={setVisitedCountries} allCountriesFlat={allCountriesFlat}/>
    </main>
  );
}
 
export default Landing;