import { arrayOf, object } from "prop-types";

export default function Icon({ service, allServices }) {
  let imgPath;
  allServices.forEach((item) => {
    if ((service.status) && item.name === service.name) imgPath = item.img;
  });

  return (
    <>
      {imgPath && <img className="icon greyIcon" src={imgPath}></img>}
    </>
  )
}

Icon.propTypes = {
  service: object,
  allServices: arrayOf(object),
}