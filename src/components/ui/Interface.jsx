import { object } from "prop-types"
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Popup from "./Popup";

export default function Interface({ children }) {
  const [ popup, setPopup ] = useState(false);
  const [ popupData, setPopupData ] = useState({});
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    if (location.pathname !== "/" && location.pathname !== "/confirm") ref.current.scrollIntoView();
  }, [location.pathname]);

  const callPopup = (data) => {
    setPopupData(data);
    setPopup(true);
  };

  const removePopup = () => {
    setPopup(false);
    setPopupData({});
  };

  return (
    <>
      <Header callPopup={callPopup}/>
      <main className="container" ref={ref}>
        {children}
      </main>
      <Footer callPopup={callPopup}/>
      {popup && <Popup removePopup={removePopup} data={popupData}/>}
    </>
  )
}

Interface.propTypes = {
  children: object,
}
