import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


// let useClickOutside = (handler) => {
//   let domNode = useRef();

//   useEffect(() => {
//     let maybeHandler = (e) => {
//       if (!domNode.current.contains(e.target)) {
//         handler();
//       }
//     };
//     document.addEventListener("mousedown", maybeHandler);
//     return () => {
//       document.removeEventListener("mousedown", maybeHandler);
//       console.log(domNode);
//     };
//   });
// };

const Navbutton = () => {
  const [open, setopen] = useState(false);

  // let domNode = useClickOutside(() => {
  //   setopen(false);
  // });

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setopen(false);
        // console.log(open);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed z-50 -right-1 -top-8 xl:hidden    ">

  
    <div className="flex justify-end   " ref={dropdownRef}>
      {/* <Toolti  */}
      <div
        className="tooltip-container  mt-11 mr-12  "
        onClick={() => setopen((open) => !open)}
      >
        <span className="text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            className="bi bi-send-fill"
            viewBox="0 0 16 16"
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"></path>
          </svg>
        </span>

        {/* <div className={open ? "active1 " : "gg"}> */}

        {open && (
          <div className="dropdown  ">
            <span className="tooltip1">
              <Link to="/projects">
                <Icon icon="icon-park:workbench" width={"20px"} />
              </Link>
            </span>

            <Link to="/">
              <span className="tooltip4 ">
                <Icon
                  icon="fluent-emoji:person-red-hair"
                  className=""
                  width={"20px"}
                />
              </span>
            </Link>

            <Link to="/contact">
              <span className="tooltip7">
                <Icon icon="flat-color-icons:contacts" width={"20px"} />
              </span>
            </Link>

            <Link to="/resume">
              <span className="tooltip8">
                <Icon icon="fxemoji:documenttextpicture" width={"20px"} />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
    </div>
    //{" "}
  );
};

export default Navbutton;
