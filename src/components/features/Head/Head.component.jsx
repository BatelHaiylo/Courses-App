import React, { useRef, useEffect } from "react";
import "./Head.css";
import Container from "@mui/material/Container";

import { NavLink, Link } from "react-router-dom";

const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "All Courses",
    url: "/courses",
  },
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Pricing",
    url: "/pricing",
  },
  {
    display: "Community",
    url: "/community",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

export default function Head() {
  const headRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headRef.current.classList.add("head__shrink");
      } else {
        headRef.current.classList.remove("head__shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll",null);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="head" ref={headRef}>
      <Container fixed>
        <div className="navigation">
          <div className="logo">
            <h2 className="text-logo">
              <span>
                <i className="ri-medal-2-line"></i>
              </span>
              MASTERS
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5 ">
            <button className="btn d-flex gap-2 align-items-center">
              <Link to="/cart">My Cart</Link>
            </button>

            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}
