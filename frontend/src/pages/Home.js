import "../assets/css/templates/home.scss";
import Button from "../components/atoms/Button";
import { CarouselScreenshotSlider } from "../components/molecules/CarouselSlider";
import video from "./../assets/img/game-video.mp4";
import homefirstimg1 from "./../assets/img/20.png";
import homefirstimg5 from "./../assets/img/1.png";
import homebuttonimg1 from "./../assets/img/3.png";
import homebuttonimg2 from "./../assets/img/2.png";
import homebuttonimg3 from "./../assets/img/4.png";
import homesecondimg1 from "./../assets/img/5.png";
import roadmapH from "./../assets/img/ROADMAPHORIZONTAL.png";
import roadmapV from "./../assets/img/ROADMAPVERTICAL.png";
import Logo from "components/atoms/Logo";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "../util/interact.js";
import { useNavigate } from "react-router-dom";
import CrossIcon from "components/atoms/icons/cross";
import HamburguerIcon from "components/atoms/icons/hamburguer";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "assets/css/templates/header-home.scss";
import "assets/css/templates/footer-home.scss";

import teamMember1 from "assets/img/t1.png";
import teamMember2 from "assets/img/t2.png";
import teamMember3 from "assets/img/t3.png";
import footerimg4 from "assets/img/9.png";
import developersLogo from "assets/img/NT-Logo-med.png";
import awsLogo from "assets/img/awslogo.png";
import footerimg7 from "assets/img/12.png";
import footerimg8 from "assets/img/13.png";
import footerimg9 from "assets/img/21.png";
import dcBlack from "assets/img/dc_black.png";
import tgBlack from "assets/img/telegram_black.png";
import twBlack from "assets/img/tw_black.png";
import ytBlack from "assets/img/youtube_black.png";
const Video = () => {
  return (
    <>
      <video autoPlay playsInline muted src={video} />
    </>
  );
};

function HomePage() {
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
        <header className={navbarOpen ? "fixed" : ""}>
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
                    <AnchorLink href="#intro" rel="author">
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
      <main>
        <div className="vh-100 grid place-center">
          <div className="left-right-flex ">
            <div className="left">
              <div className="leftrightinnerdiv">
                <img
                  src={homefirstimg1}
                  className="homefirstimg1"
                  alt="spaceworms"
                />
                <p className="homeparag1">
                  Videojuego blockchain inspirado en slither.io
                </p>
                <p>Conviertete en el gusano Nº1 y obten grandes recompensas</p>
                <div className="homefirstbuttondiv">
                  <div className="mx-auto flex-wrapper devices-container">
                    <Button className="homefirstbutton1">
                      <img src={homebuttonimg1} alt="mobile, windows, mac" />
                    </Button>
                    <Button className="homefirstbutton1">
                      <img src={homebuttonimg2} alt="mobile, windows, mac" />
                    </Button>
                    <Button className="homefirstbutton1">
                      <img src={homebuttonimg3} alt="mobile, windows, mac" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right homesecondarea">
              <div className="leftrightinnerdiv">
                <img src={homefirstimg5} className="homefirstimg5" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="vh-100 box-with-borders2">
          <div className="flex-wrapper hs-flex-column" id="intro">
            <div className="homesecondleftdiv">
              <img src={homesecondimg1} className="homesecondimg1" alt="" />
            </div>
            <div className="homesecondrightdiv">
              <p>
                Una peligrosa raza Alienígena amenaza con destruir todo a su
                paso para controlar la Fuerza Cósmica y la última esperanza para
                enfrentarlos son los Gusanos Espaciales.
              </p>
              <p>
                En Space Worms podrás ser parte de esta Guerra Espacial contra
                los Loriks en un videojuego que te brindará horas interminables
                de diversión además de generar ingresos ilimitados. No te
                pierdas la oportunidad de unirte a esta lucha para salvar al
                Universo usando la fuerza del Sol y las Estrellas, mejorando a
                tu gusano, resolviendo misiones diarias, o sencillamente
                enfréntate a otros.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="vh-100 homethirdarea" id="trailer">
          <div className="homethirdleftdiv">
            <p>Salva el universo y obten grandes recompensas</p>
          </div>
          <div className="homethirdrightdiv">
            <Video />
          </div>
        </div>
        {/* roadmap */}
        <div className="vh-100 flex-wrapper">
          <div className="homefourtharea" id="roadmap">
            <div className="absolute w-full text-center">
              <div className="h6">ROAD MAP</div>
            </div>
            <div className="homefourthimg1">
              <div className="m-auto px-1 roadmap-mobile-flex">
                <div className="roadmapqinfo-top large-devices">
                  <div>
                    <ul>
                      <li>Idea y economía del juego</li>
                      <li>Contratación de equipo</li>
                      <li>Diseño e ilustración</li>
                      <li className="h2 mt-1">2021</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Staking</li>
                      <li>Marketplace</li>
                      <li>Sistema de clanes o gremios</li>
                      <li className="h2 mt-1">2022</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>&nbsp;</li>
                      <li>&nbsp;</li>
                      <li>Minijuegos</li>
                      <li className="h2 mt-1">2022</li>
                    </ul>
                  </div>
                </div>
                <div className="roadmapqinfo-left small-and-medium-devices">
                  <div>
                    <ul>
                      <li>Lanzamiento sitio web</li>
                      <li>Preventa de NFT</li>
                      <li>Auditorías</li>
                      <li>Preventa de token</li>
                      <li>Alpha del juego</li>
                      <li className="h2 mt-1">2022</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Salas personalizadas</li>
                      <li>Eventos</li>
                      <li className="h2 mt-1">2022</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>&nbsp;</li>
                      <li>&nbsp;</li>
                      <li>Alquiler de NFT</li>
                      <li className="h2 mt-1">2022</li>
                    </ul>
                  </div>
                </div>
                <img
                  src={roadmapH}
                  alt="roadmap"
                  className=" img-fluid large-devices"
                />
                <img
                  src={roadmapV}
                  alt="roadmap"
                  className="small-and-medium-devices roadmap-vertical-img"
                />
                <div className="roadmapqinfo-right small-and-medium-devices">
                  <div>
                    <ul>
                      <li>Idea y economía del juego</li>
                      <li>Contratación de equipo</li>
                      <li>Diseño e ilustración</li>
                      <li className="h2 mt-1">2021</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Staking</li>
                      <li>Marketplace</li>
                      <li>Sistema de clanes o gremios</li>
                      <li className="h2 mt-1">2022</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Minijuegos</li>
                      <li className="h2 mt-1">2022</li>
                      <li>&nbsp;</li>
                      <li>&nbsp;</li>
                    </ul>
                  </div>
                </div>
                <div className="roadmapqinfo-bottom large-devices">
                  <div>
                    <ul>
                      <li className="h2 mt-1">2022</li>
                      <li>Lanzamiento sitio web</li>
                      <li>Preventa de NFT</li>
                      <li>Auditorías</li>
                      <li>Preventa de token</li>
                      <li>Alpha del juego</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="h2 mt-1">2022</li>
                      <li>Salas personalizadas</li>
                      <li>Eventos</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="h2 mt-1">2022</li>
                      <li>Alquiler de NFT</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            {/* <div className="homefourthcontrolpanel">
              <a href="www.discord.com">
                <img
                  src={homefourthimg2}
                  className="homefourthimgs"
                  alt="unete a discord"
                />
              </a>
              <a href="www.telegram.com">
                <img
                  src={homefourthimg3}
                  className="homefourthimgs"
                  alt="unete a telegram"
                />
              </a>
              <a href="www.temti.com">
                <img
                  src={homefourthimg4}
                  className="homefourthimgs"
                  alt="unete a temti"
                />
              </a>
              <a href="www.youtube.com">
                <img
                  src={homefourthimg5}
                  className="homefourthimgs"
                  alt="suscribete a nuestro canal"
                />
              </a>
            </div> */}
            {/*  */}
          </div>
        </div>
        {/*  */}
        <div
          className="vh-100 flex-wrapper direction-column homefiftharea"
          id="screenshots"
        >
          <h6>Screenshots</h6>
          <div className="container-slider-two">
            <div className="slider-two">
              <CarouselScreenshotSlider />
            </div>
          </div>
        </div>
        {/*  */}
      </main>
      <footer>
        <div className="footerfirstarea">
          <div className="footerfirsttitle" id="team">
            <h1>Equipo</h1>
          </div>
          <div className="footerimgsdiv">
            <div className="footerimgs">
              <img src={teamMember1} alt="john doe" />
              <p>Brayan Suniaga</p>
              <span>Inversor y creador de contenido</span>
            </div>
            <div className="footerimgs">
              <img src={teamMember2} alt="john doe" />
              <p>Abraham Leon</p>
              <span>Empresario y entusiasta de las criptomonedas</span>
            </div>
            <div className="footerimgs">
              <img src={teamMember3} alt="john doe" />
              <p>Neydua Sierra</p>
              <span>Ingeniero e inversor de NFT</span>
            </div>
          </div>
        </div>
        <div className="footersecondarea">
          <div className="footersecondchilddivs">
            <p>Partners</p>
            <img src={footerimg4} alt="partner" />
          </div>
          <div className="footersecondchilddivs">
            <p>Developers</p>
            <img src={developersLogo} alt="N&T Negocios y Tecnologías" />
            <div>Desarrollado por N&T Negocios y Tecnologías s.r.l.</div>
          </div>
        </div>
        <div className="footerthirdarea">
          <div className="footerthirdimgs1">
            <a href="www.aws.com">
              <img src={awsLogo} alt="Amazon Web Store" />
            </a>
            <a href="#0">
              <img src={footerimg7} alt="partner" />
            </a>
            <a href="#0">
              <img src={footerimg8} className="thirdimg" alt="partner" />
            </a>
            <a href="#0">
              <img src={footerimg9} alt="partner" />
            </a>
          </div>
          <div className="footerthirdimgs2">
            <a href="#0">
              <img src={dcBlack} alt="discord" />
            </a>
            <a href="#0">
              <img src={tgBlack} alt="telegram" />
            </a>
            <a href="#0">
              <img src={twBlack} alt="twitter" />
            </a>
            <a href="#0">
              <img src={ytBlack} alt="Youtube" />
            </a>
          </div>
          <div className="flex-wrapper footer-links">
            <div className="mx-auto w-full">
              <a href="/whitepaper" alt="whitepaper" className="mr-1">
                Whitepaper
              </a>
              <a
                href="https://docs.spaceworms.app"
                alt="Space Worms Documentation"
                className="ml-1"
              >
                SpaceWorms Docs
              </a>
            </div>
          </div>
        </div>
        <div className="legal">
          <a href="/condiciones" alt="terms">
            Condiciones de uso
          </a>{" "}
          /{" "}
          <a href="/privacidad" alt="terms">
            Política de privacidad
          </a>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
