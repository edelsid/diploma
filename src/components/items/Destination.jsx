export default function Destination({ item }) {
  const {city, railway_station_name, datetime} = item;
  const date = new Date(datetime);
  const hh = date.getHours().toString().padStart(2, '0');
  const min = date.getMinutes().toString().padStart(2, '0');

  return (
    <div className="destination">
      <p className="bold">{hh+':'+min}</p>
      <p className="smaller capital">{city.name}</p>
      <p className="smaller grey">{railway_station_name + ' вокзал'}</p>
    </div>
  )
}
