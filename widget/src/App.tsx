import React, {useEffect, useState} from 'react';
import './App.css';
import {ShowPopupOptions, SolOptions} from "./lib/types";
import Popup from "./lib/components/popup";

declare global {
  interface Window {
    popup: any; // Change 'any' to the actual type if you know it
  }
}

type Message = { action: "popup:options" | "popup:data", data: ShowPopupOptions, options: SolOptions };

function App() {
  const [show, setShow] = useState(false);
  const [openOptions, setOpenOptions] = useState<ShowPopupOptions>({fiat: "AED"})
  const [options, setOptions] = useState<SolOptions>({recipient: "32032092309"})

  useEffect(() => {
    window.postMessage({"data": {amount: "20000", customer_email: "bose@mailinator.com", fiat: "AED"}, action: "popup:data"})
    window.addEventListener('message', (event: MessageEvent<Message>) => {
      const data = event.data;
      if (data?.action === "popup:options") {
        setOptions(data.options)
      }
      if (data?.action === "popup:data") {
        setOpenOptions(data.data)
        setShow(true);
      }

    });
    // const popup = usePopup({recipient: "122311212321"});
    // popup.open({amount: 20000, fiat: "AED", customer_email: "test@mailinatore.com"})
  }, [])
  return (
    <Popup {...options} show={show} {...openOptions} />
  );
}

export default App;
