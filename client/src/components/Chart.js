import React from 'react';
import Chart from "react-google-charts";

const ChartContainer = ({visitedCountries}) => {

  const visitedCountriesNames = visitedCountries.map(country => {
    return (
      //There are some exceptions that need handling but 2 lines below sufices for now
      // [countries[country].name]
      [country]
    )
  })
  return ( 
    <>
      <Chart
        style={{width: "100%", height:"auto"}}
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