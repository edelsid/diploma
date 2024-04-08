const getPrices = (item, arr) => {
  for (const [key, value] of Object.entries(item.departure.price_info)) {
    if (key === "first") arr.push(value.price);
    else {
      arr.push(value.top_price);
      //prices.push(value.bottom_price);
    }}
  return arr;
};

export default getPrices