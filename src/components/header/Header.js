import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/Header.css";
import logo from "../../image/cod-logo (1).svg";
import logo1 from "../../image/mwiii-logo.png";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const [isActive1, setActive1] = useState(false);

  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="header">
            <div className="images">
              <h1 className="dark" onClick={() => setActive(!isActive)}>
                <ion-icon name="menu-outline"></ion-icon>
              </h1>

              {/* /////////////// */}
              <div className="Apps">
                <div className="as">
                  <div
                    className="boxss"
                    style={{
                      width: isActive ? "200px" : "0px",
                      height: isActive ? "140px" : "0px",
                      fontSize: isActive ? "20px" : "0px",
                    }}
                  >
                    <NavLink to={"/Maka"}>
                      <a href="">КАМПАНИЯ</a>
                    </NavLink>
                    <NavLink to={"/Online"}>
                      <a href="">СЕТЕВАЯ ИГРА</a>
                    </NavLink>
                    <NavLink to={"/zombie"}>
                      <a href="">ЗОМБИ</a>
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* //////////////// */}

              <img src={logo} alt="" />
              <h4>|</h4>
              <div className="tt">
                <NavLink to={"/"}>
                  <img src={logo1} alt="" />
                </NavLink>
              </div>
            </div>

            <h6 className="dark1" onClick={() => setActive1(!isActive1)}>
              ОСОБЕННОСТИ
            </h6>

            {/* /////////////// */}
            <div className="Apps1">
              <div
                className="boxss1"
                style={{
                  width: isActive1 ? "120px" : "0px",
                  height: isActive1 ? "140px" : "0px",
                  fontSize: isActive1 ? "20px" : "0px",
                }}
              >
                <NavLink to={"/Ples"}>
                  <a href="">PS5</a>
                </NavLink>
                <NavLink to={"/Xbox"}>
                  <a href="">XBOX</a>
                </NavLink>
                <NavLink to={"/Comp"}>
                  <a href="">PC</a>
                </NavLink>
              </div>
            </div>
            {/* //////////////// */}
            <div className="nav-links">
              <NavLink to={"/battlepass"}>БОЕВОЙ ПРОПУСК</NavLink>
              <NavLink to={"/ricochet"}>RICOCHET</NavLink>
            </div>

            <div className="textreg">
              <NavLink to={"/Sign"}>
                <h4>ВХОД</h4>
              </NavLink>
              <h4>|</h4>
              <NavLink to={"/Sign"}>
                <h4>РЕГИСТРАЦИЯ</h4>
              </NavLink>
            </div>

            <NavLink to={"/register"}>
              <button className="registor">ПРИОБРЕТИТЕ MWIII</button>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
    ///
  );
};

export default Header;
