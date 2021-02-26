import React, {setState} from 'react';
import Chart from "react-google-charts";
import {countries} from 'country-data';

const ChartContainer = ({visitedCountries}) => {

  const visitedCountriesNames = visitedCountries.map(country => {
    return (
      [countries[country].name]
    )
  })
  return ( 
    <>
    <Chart
      style={{width: "100%"}}
      chartType="GeoChart"
      data={[
        ['Country'],
				...visitedCountriesNames
      ]}
      mapsApiKey="YOUR_KEY_HERE"
      rootProps={{ 'data-testid': '1' }}
    />
    </>
  );
}
 
export default ChartContainer;