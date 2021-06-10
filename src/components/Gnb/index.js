import React, { useState, useEffect } from "react";
import HamburgerBtn from "./HamburgerBtn";
import NavBar from "./NavBar";
import { DEVICE_WIDTH_TABLET } from "../../device";

const Gnb = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // TODO: 주석 추가
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <header>
      {windowWidth >= `${DEVICE_WIDTH_TABLET}` ? (
        <NavBar />
      ) : (
        <>
          <HamburgerBtn
            toggleNavBar={toggleNavBar}
            isNavBarOpen={isNavBarOpen}
          />
          {isNavBarOpen && <NavBar toggleNavBar={toggleNavBar} />}
        </>
      )}
    </header>
  );

  function toggleNavBar() {
    setIsNavBarOpen(!isNavBarOpen);
  }

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
};

export default Gnb;
