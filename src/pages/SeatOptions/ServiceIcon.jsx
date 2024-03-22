import { arrayOf, func, object } from "prop-types";
import { useState, useEffect } from "react"

export default function ServiceIcon({ service, allServices, addServiceInfo }) {
  const [chosen, setChosen] = useState(false);
  const [included, setIncluded] = useState(false);

  let imgPath;
  allServices.forEach((item) => {
    if (item.name === service.name) imgPath = item.img;
  });

  useEffect(() => {
    if (service.status) setIncluded(true);
  }, []);

  const chooseService = (service) => {
    if (included) {
      alert('Сервис включен в стоимость билета');
      return;
    }
    setChosen(!chosen);
    addServiceInfo(service);   
  }

  return (
    <li className={`flex__center icon__back ${chosen ? "chosen__back" : ""} ${included ? "included__back" : "free__back"}`}>
      <img 
        className={`icon__vagon ${chosen ? "chosen" : ""} ${included ? "included" : ""}`} 
        src={imgPath} 
        onClick={() => chooseService(service)}>
      </img>
    </li>
  )
}

ServiceIcon.propTypes = {
  service: object,
  allServices: arrayOf(object),
  addServiceInfo: func,
}
