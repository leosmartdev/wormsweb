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
    navigate("/play");
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
              <a href="/info" rel="author">
                Información
              </a>
            </li>
            <li>
              <a href="/screenshots" rel="author">
                Screenshots
              </a>
            </li>
            <li>
              <a href="/descargas" rel="author">
                Descargas
              </a>
            </li>
            <li>
              <a href="/about" rel="author">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="/documentacion" rel="author">
                Documentación
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <header>
        <div className="tab-area">
          <div className="tab-icons">
            <div className="btn-tab">
              <a href="/mmlogin">INICIAR SESIÓN</a>
            </div>
            <div className="btn-tab">
              <a href="register">REGISTRARSE</a>
            </div>
          </div>
        </div>
        <div className="header flex-wrapper">
          <div className="header-left">
            <Logo alt="Police or Thief" className="img-logo" />
          </div>
          <div className="header-right">
            <nav>
              <ul>
                <li className="desktop-only">
                  <a href="/" rel="author">
                    Inicio
                  </a>
                </li>
                <li className="desktop-only">
                  <a href="/info" rel="author">
                    Información
                  </a>
                </li>
                <li className="desktop-only">
                  <a href="/screenshots" rel="author">
                    Screenshots
                  </a>
                </li>
                <li className="desktop-only">
                  <a href="/descargas" rel="author">
                    Descargas
                  </a>
                </li>
                <li className="desktop-only">
                  <a href="/about" rel="author">
                    Sobre nosotros
                  </a>
                </li>
                <li className="desktop-only">
                  <a href="/documentacion" rel="author">
                    Documentación
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
