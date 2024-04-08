const stationCheck = (cityName, stationName) => {
  const capitalizedName = cityName[0].toUpperCase() + cityName.substring(1);
  if (capitalizedName !== stationName) {
    return stationName = stationName + " вокзал";
  }
  return stationName;
}

export default stationCheck;