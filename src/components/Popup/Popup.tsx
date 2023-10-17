//React
import { useRef, useEffect } from "react";

//redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { closePopup } from "../../redux/popupSlice";

//scss
import "./Popup.scss";

interface PopupProps {
  children: React.ReactNode;
  handleClick: () => void;
  buttonText: string;
  isOpen: boolean;
}

function Popup({ children, handleClick, buttonText, isOpen }: PopupProps) {
  const dispatch = useDispatch<AppDispatch>();

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handelEscape(evt: KeyboardEvent) {
      if (evt.key === "Escape") {
        dispatch(closePopup());
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handelEscape);
    }

    return () => document.removeEventListener("keydown", handelEscape);
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        dispatch(closePopup());
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  console.log(isOpen);

  return (
    <div className={`popup  ${isOpen ? `popup__opened` : ""}`} ref={rootRef}>
      <form className="popup__window">
        {children}
        <button type="button" className="popup__button" onClick={handleClick}>
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default Popup;
