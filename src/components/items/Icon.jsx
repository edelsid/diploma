import { arrayOf, bool, object } from "prop-types";
import { useState } from "react";

export default function Icon({ service, allServices, vagon }) {
  const [chosen, setChosen] = useState(false);

  let imgPath;
  allServices.forEach((item) => {
    if (service.status && item.name === service.name) imgPath = item.img;
  });

  //receives "service" variable
  const chooseService = () => {
    if (chosen) {
      setChosen(false);
      return;
    } else if (vagon) setChosen(true);
  }

  return (
    <img className={`icon ${vagon ? "icon__vagon" : "greyIcon"} ${chosen ? "chosen" : ""}`} src={imgPath} onClick={() => chooseService(service.name)}></img>
  )
}

Icon.propTypes = {
  service: object,
  allServices: arrayOf(object),
  vagon: bool,
}