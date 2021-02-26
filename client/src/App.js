import ChartContainer from "./components/Chart";
import Nav from "./components/Nav";
import {countries} from 'country-data';
import allCountries from "./utils/countries";
import React, {useState} from 'react';
import CountrySelector from "./components/CountrySelector";
import UserStats from "./components/UserStats";

const App = () => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  return (
    <>
      <Nav />
      <h1>Where have you been?</h1>
      <UserStats visitedCountries={visitedCountries} allCountries={allCountries} />
      <ChartContainer visitedCountries={visitedCountries}/>
      <CountrySelector  countries={countries} visitedCountries={visitedCountries} setVisitedCountries={setVisitedCountries}/>
    </>
  );
}

export default App;
