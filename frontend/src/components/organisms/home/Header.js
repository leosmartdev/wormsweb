import { useEffect, useState } from "react";
import Logo from "components/atoms/Logo";
import Button from "components/atoms/Button";
import CrossIcon from "components/atoms/icons/cross";
import HamburguerIcon from "components/atoms/icons/hamburguer";
import { useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "assets/css/templates/header-home.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  connectWallet,
  getCurrentWalletConnected,
} from "../../../util/interact.js";
// // if wallet is logged in, do route change
//   const navigate = useNavigate();
//   const routeChange = () => {
//     navigate("/marketplace");
//   };
//   walletAddress.lenth > 0 && routeChange();
function Header() {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            target="_blank"
            href={`https://metamask.io/download.html`}
            rel="noreferrer"
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navigate = useNavigate();
  const routeChange = () => {
    console.log(walletAddress);
    navigate(walletAddress.length > 0 ? "/marketplace" : "/login");
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
              <AnchorLink href="/" rel="author">
                Inicio
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#intro" rel="author">
                Introduccion
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#trailer" rel="author">
                Trailer
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#roadmap" rel="author">
                Roadmap
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#screenshots" rel="author">
                Screenshots
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#team" rel="author">
                Equipo
              </AnchorLink>
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
        <div className="header flex-wrapper">
          <div className="header-left">
            <Logo alt="SPACE WORMS" className="img-logo" />
          </div>
          <div className="header-right">
            <nav>
              <ul>
                <li className="desktop-only header-link">
                  <AnchorLink href="/" rel="author">
                    Inicio
                  </AnchorLink>
                </li>
                <li className="desktop-only header-link">
                  <AnchorLink href="#introduccion" rel="author">
                    Introduccion
                  </AnchorLink>
                </li>
                <li className="desktop-only header-link">
                  <AnchorLink href="#trailer" rel="author">
                    Trailer
                  </AnchorLink>
                </li>
                <li className="desktop-only header-link">
                  <AnchorLink href="#roadmap" rel="author">
                    Roadmap
                  </AnchorLink>
                </li>
                <li className="desktop-only header-link">
                  <AnchorLink href="#screenshots" rel="author">
                    Screenshots
                  </AnchorLink>
                </li>
                <li className="desktop-only header-link">
                  <AnchorLink href="#team" rel="author">
                    Equipo
                  </AnchorLink>
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
