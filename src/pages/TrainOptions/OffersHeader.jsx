import { number } from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeType } from "../../store/site";
import List from "../../models/List";

export default function OffersHeader({ count }) {
  const dispatch = useDispatch();
  const filters = [5, 10, 20];
  const types = [{
    id: "time",
    name: "времени",
  }, {
    id: "price",
    name: "стоимости",
  }, {
    id: "duration",
    name: "длительности",
  }];

  const [type, setType] = useState(types[0]);
  const [open, setOpen] = useState(false);

  const dropdown = () => {
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }

  const handleChange = (e) => {
    types.forEach((item) => {
      if (item.id === e.target.id) {
        setType(item);
        dispatch(changeType(item.id));
      }
    })
  };

  return (
    <div className="offers__header flex">
      <p className="px16 grey">найдено {count}</p>
      <div className="filters flex">
        <label className="select__time flex px16 grey">сортировать по:
          <div className="customSelect black" onClick={dropdown}>
            <p className="black">{type.name}</p>
            {open && <List className="customDropdown">
              {types.map((item) => <li key={item.id} id={item.id} onClick={handleChange}>{item.name}</li>)}
            </List>} 
          </div>
        </label>
        <label className="select__number flex px16 grey">показывать по:
          {filters.map((item) => <p className="px16" key={item} id={item}>{item}</p>)}
        </label>
      </div>
    </div>
  )
}

OffersHeader.propTypes = {
  count: number,
}