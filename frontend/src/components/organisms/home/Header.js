import { useState } from "react";
import Logo from "./../../atoms/Logo";
import Button from "./../../atoms/Button";
import CrossIcon from "./../../atoms/icons/cross";
import HamburguerIcon from "./../../atoms/icons/hamburguer";
import { useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./../../../assets/css/templates/header-home.scss";
function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/MmLogin");
  };
  return (
    <>
      <div
        className={`mobile-only overlayDivMenuMobile ${
          navbarOpen ? " showOverlay" : ""
        } `}
      >
        <nav>
          <ul>
            <li>
              <a href="/" rel="author">
                Inicio
              </a>
            </li>
            <li>
              <a href="/#intro" rel="author">
                Introduccion
              </a>
            </li>
            <li>
              <a href="/#trailer" rel="author">
                Trailer
              </a>
            </li>
            <li>
              <a href="/roadmap" rel="author">
                Roadmap
              </a>
            </li>
            <li>
              <a href="/screenshots" rel="author">
                Screenshots
              </a>
            </li>
            <li>
              <a href="/team" rel="author">
                Equipo
              </a>
            </li>
            <li>
              <a href="/whitepaper" rel="author">
                Whitepaper
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <header>
        {/* <div className="tab-area">
          <div className="tab-icons">
            <div className="btn-tab">
              <a href="/mmlogin">REGISTRARSE</a>
            </div>
          </div>
        </div> */}
        <div className="header flex-wrapper">
          <div className="header-left">
            <Logo alt="SPACE WORMS" className="img-logo" />
          </div>
          <div className="header-right">
            <nav>
              <ul>
                <li className="desktop-only header-link">
                  <a href="/" rel="author">
                    Inicio
                  </a>
                </li>
                <li className="desktop-only header-link">
                  <a href="/introduccion" rel="author">
                    Introduccion
                  </a>
                </li>
                <li className="desktop-only header-link">
                  <a href="/gameplay" rel="author">
                    Gameplay
                  </a>
                </li>
                <li className="desktop-only header-link">
                  <a href="/roadmap" rel="author">
                    Roadmap
                  </a>
                </li>
                <li className="desktop-only header-link">
                  <a href="/screenshots" rel="author">
                    Screenshots
                  </a>
                </li>
                <li className="desktop-only header-link">
                  <a href="/equipo" rel="author">
                    Equipo
                  </a>
                </li>
                <li className="desktop-only header-link">
                  <a href="/whitepaper" rel="author">
                    Whitepaper
                  </a>
                </li>
                <Button onClick={routeChange}>
                  JUGAR AHORA <BsFillArrowRightCircleFill />
                </Button>
                <li className="mobile-only">
                  <Button
                    onClick={handleToggle}
                    className="buttonHamburguerStyles"
                  >
                    {navbarOpen ? <CrossIcon /> : <HamburguerIcon />}
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
