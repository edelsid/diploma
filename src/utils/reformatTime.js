import { getDate, getMonth, getMinutes, getHours, getYear } from "date-fns";

const reformatTime = (duration) => {
  const date = new Date(duration);
  const hh = getHours(date).toString();
  const min = getMinutes(date).toString().padStart(2, '0');
  const dd = getDate(date).toString().padStart(2, '0');
  const mm = (getMonth(date)+1).toString().padStart(2, '0');
  const yy = getYear(date).toString();

  const fragmentedTime = { hh, min, dd, mm, yy }

  return fragmentedTime;
}

export default reformatTime;