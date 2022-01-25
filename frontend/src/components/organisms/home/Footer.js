import "assets/css/templates/footer-home.scss";

import teamMember1 from "assets/img/81.png";
import teamMember2 from "assets/img/82.png";
import teamMember3 from "assets/img/83.png";
import footerimg4 from "./../../../assets/img/9.png";
import footerimg5 from "./../../../assets/img/10.png";
import awsLogo from "assets/img/awslogo.png";
import footerimg7 from "./../../../assets/img/12.png";
import footerimg8 from "./../../../assets/img/13.png";
import footerimg9 from "./../../../assets/img/21.png";
import dcBlack from "assets/img/dc_black.png";
import tgBlack from "assets/img/telegram_black.png";
import twBlack from "assets/img/tw_black.png";
import ytBlack from "assets/img/youtube_black.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footerfirstarea">
          <div className="footerfirsttitle">
            <h1>Equipo</h1>
          </div>
          <div className="footerimgsdiv">
            <div className="footerimgs">
              <img src={teamMember1} alt="john doe" />
              <p>Nombre y Apellido</p>
              <span>Cargo</span>
            </div>
            <div className="footerimgs">
              <img src={teamMember2} alt="john doe" />
              <p>Nombre y Apellido</p>
              <span>Cargo</span>
            </div>
            <div className="footerimgs">
              <img src={teamMember3} alt="john doe" />
              <p>Nombre y Apellido</p>
              <span>Cargo</span>
            </div>
          </div>
        </div>
        <div className="footersecondarea">
          <div className="footersecondchilddivs">
            <p>Partners</p>
            <img src={footerimg4} />
          </div>
          <div className="footersecondchilddivs">
            <p>Developers</p>
            <img src={footerimg5} />
          </div>
        </div>
        <div className="footerthirdarea">
          <div className="footerthirdimgs1">
            <a href="www.aws.com">
              <img src={awsLogo} alt="Amazon Web Store" />
            </a>
            <a href="#">
              <img src={footerimg7} />
            </a>
            <a href="#">
              <img src={footerimg8} className="thirdimg" />
            </a>
            <a href="#">
              <img src={footerimg9} />
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
            <div className="mx-auto">
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
export default Footer;
