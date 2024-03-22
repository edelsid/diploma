const reformatTime = (duration) => {
  const date = new Date(duration);
  const hh = date.getHours().toString();
  const min = date.getMinutes().toString().padStart(2, '0');
  const fragmentedTime = {
    hh,
    min,
  }

  return fragmentedTime;
}

export default reformatTime;