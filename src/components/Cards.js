function Cards({ shipInfo }) {
  // const { starWarShipName } = props.shipInfo.name

  return (
    <div className="shipCards-wraper">
      {shipInfo.map((starShips, index) => (
        <div className="cards" key={index}>
          <h1>{starShips.name}</h1>
          <p>
            Model:<span>{starShips.model}</span>
          </p>
          <p>
            CargoCapacity:<span>{starShips.cargo_capacity}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
export default Cards
