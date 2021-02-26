import ChartContainer from "./components/Chart";
import Nav from "./components/Nav";
import {countries as countryData } from 'country-data';
import allCountries from "./utils/countries";
import React, {useState} from 'react';
import CountrySelector from "./components/CountrySelector";
import UserStats from "./components/UserStats";

const App = () => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const allCountriesFlat = allCountries.flat();
  return (
    <>
      <Nav />
      <h1>Where have you been?</h1>
      <UserStats visitedCountries={visitedCountries} allCountries={allCountries} />
      <ChartContainer visitedCountries={visitedCountries}/>
      <CountrySelector  countryData = {countryData} visitedCountries={visitedCountries} setVisitedCountries={setVisitedCountries} allCountriesFlat={allCountriesFlat}/>
    </>
  );
}

export default App;
