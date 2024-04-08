const nounCheck = (noun, count) => {
  let result = noun;
  switch (noun) {
    case 'человек выбирает': 
      if (count.toString().match(/^[2-9]?[2-4]$/gm) === null) break;
      else result = 'человека выбирают'
      break;
    case 'Взрослых': 
      if (count.toString().match(/^[2-9]?1{1}$/gm) === null) break;
      else result = 'Взрослый'
      break;
    case 'Детских': 
      if (count.toString().match(/^[2-9]?1{1}$/gm) === null) break;
      else result = 'Детский'
      break;
  }
  return result;
}

export default nounCheck;