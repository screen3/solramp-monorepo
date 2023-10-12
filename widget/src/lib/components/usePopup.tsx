import { useState } from "react";
import Popup from "./popup";
import {ShowPopupOptions, SolOptions} from "../types";

export default function usePopup(options: SolOptions) {
  const [show, setShow] = useState(false);
  const [showPopupOptions, setShowPopupOptions] = useState<ShowPopupOptions>({fiat: "AED"})

  return {
    toggle: (option: ShowPopupOptions) => {
      setShowPopupOptions(option)
      setShow(!show);
    },
    open: (option: ShowPopupOptions) => {
      setShowPopupOptions(option)
      setShow(true);
    },
    close: () => {
      setShow(false);
    },
    Element: () => <Popup {...options} show={show} {...showPopupOptions} />,
  };
}
