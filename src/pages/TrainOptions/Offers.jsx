import { object, bool, arrayOf } from "prop-types"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import OffersHeader from "./OffersHeader"
import List from "../../models/List"
import Train from "../../components/items/Train";

export default function Offers({ data, back }) {
  const [ items, setItems ] = useState(data);
  const filters = useSelector(state => state.root.site.filters);
  const priceRange = useSelector(state => state.root.site.priceRange);
  const timeRange = useSelector(state => state.root.site.timeRange);
  const timeRangeBack = useSelector(state => state.root.site.timeRangeBack);
  const type = useSelector(state => state.root.site.type);
  let itemRange = data;

  useEffect(() => {
    filters.forEach((value) => {
      itemRange = itemRange.filter((item) => item.route.departure[value] === true);
    });
    
    itemRange = itemRange.filter((item) => priceRange.min <= item.minPrice && priceRange.max >= item.maxPrice);

    itemRange = itemRange.filter((item) => 
      timeRange.from <= item.timeRange.from && timeRange.to >= item.timeRange.to);

    if (back) itemRange = itemRange.filter((item) => 
      timeRangeBack.from <= item.timeRangeBack.from && timeRangeBack.to >= item.timeRangeBack.to);

    setItems(itemRange);
  }, [filters, priceRange, timeRange, timeRangeBack]);

  useEffect(() => {
    const newArr = items;
    switch(type) {
      case "time": newArr.sort((a, b) => a.route.departure.from.datetime - b.route.departure.from.datetime);
        break;
      case "price": newArr.sort((a, b) => a.minPrice - b.minPrice);
        break;
      case "duration": newArr.sort((a, b) => a.route.departure.duration - b.route.departure.duration);
    }
    setItems([...newArr]);
  }, [type]);

  return (
    <div className="offers offers__trains">
      <OffersHeader count={items.length}/>
      {items.length > 0 ? 
      <List className="offers__list">
        {items.map((item) => <Train key={items.indexOf(item)} item={item.route} />)}
      </List> : 
      <div className="nothingFound">Извините, ничего не найдено</div>}
    </div>
  )
}

Offers.propTypes = {
  data: arrayOf(object),
  back: bool,
}