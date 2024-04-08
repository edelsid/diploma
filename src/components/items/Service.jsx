import { func, object } from "prop-types"

export default function Service({ item, handleClick }) {

  const handleFilter = () => {
    switch (["first", "second", "third", "fourth"].includes(item.name)) {
      case true: 
        handleClick(`have_${item.name}_class`);
        break;
      case false:
        if (item.name === "wifi") handleClick("have_wifi");
        else handleClick("is_express");
        break;
    }    
  }

  return (
    <li className="service flex__standart vagon">
      <div className="name">
        <img className="icon lightGreyIcon" src={item.img}></img>
        <p>{item.displayName}</p>
      </div>
      <label className="switch">
        <input type="checkbox" onClick={handleFilter}></input>
        <span className="slider round"></span>
      </label>
    </li>
  )
}

Service.propTypes = {
  item: object,
  handleClick: func,
}