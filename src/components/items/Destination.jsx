export default function Destination({ item }) {
  const {city, station, time} = item;

  return (
    <div className="destination">
      <p className="bold">{time}</p>
      <p className="smaller">{city}</p>
      <p className="smaller grey">{station}</p>
    </div>
  )
}
