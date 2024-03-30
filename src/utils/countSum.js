const countSum = (values) => {
  if (!values) return 0;
  let sum = 0;
  Object.values(values).forEach((value) => {
    value.forEach(item => sum = sum + item.cost);
  });
  return sum;
};

export default countSum;