const UserStats = ({allCountries, visitedCountries}) => {
  return (  
    <>
      <div>You've been to {visitedCountries.length} / {allCountries.length}</div>
    </>
  );
}
 
export default UserStats;