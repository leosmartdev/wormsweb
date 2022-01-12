import "./../../../assets/css/templates/footer-home.scss";
import SocialMedia from "./../../molecules/SocialMedia";

import aws from "./../../../assets/img/Amazon-Web-Services-AWS-Logo.jpg";
import phaser from "./../../../assets/img/Phaser_Logo.png";
import binance from "./../../../assets/img/bsc.jpg";
import pancake from "./../../../assets/img/pancake.jpg";
import Logo from "../../atoms/Logo";

import footerimg1 from "./../../../assets/img/81.png";
import footerimg2 from "./../../../assets/img/82.png";
import footerimg3 from "./../../../assets/img/83.png";
import footerimg4 from "./../../../assets/img/9.png";
import footerimg5 from "./../../../assets/img/10.png";
import footerimg6 from "./../../../assets/img/11.png";
import footerimg7 from "./../../../assets/img/12.png";
import footerimg8 from "./../../../assets/img/13.png";
import footerimg9 from "./../../../assets/img/21.png";
import footerimg10 from "./../../../assets/img/16.png";
import footerimg11 from "./../../../assets/img/15.png";
import footerimg12 from "./../../../assets/img/17.png";
import footerimg13 from "./../../../assets/img/18.png";
import footerimg20 from "./../../../assets/img/19.png";
import footerimg21 from "./../../../assets/img/back-website.png";


function Footer() {
  return (
    <>
      <footer>
        <div className="footerfirstarea">
          <div className="footerfirsttitle">
            <h1>Equipo</h1>
          </div>
          <div>
            <div className="footerimgs">
              <img src={footerimg1}/>
              <p>Nombre y Apellido</p>
              <span>Cargo</span>
            </div>
            <div className="footerimgs">
              <img src={footerimg2}/>
              <p>Nombre y Apellido</p>
              <span>Cargo</span>
            </div>
            <div className="footerimgs">
              <img src={footerimg3}/>
              <p>Nombre y Apellido</p>
              <span>Cargo</span>
            </div>
          </div>
        </div>
        <div className="footersecondarea">
          <div className="footersecondchilddivs">
            <p>Partners</p>
            <img src={footerimg4}/>
          </div>
          <div className="footersecondchilddivs">
            <p>Developers</p>
            <img src={footerimg5}/>
          </div>
        </div>
        <div className="footerthirdarea">
          <div className="footerthirdimgs1">
            <a href="#"><img src={footerimg6}/></a>
            <a href="#"><img src={footerimg7}/></a>
            <a href="#"><img src={footerimg8}/></a>
            <a href="#"><img src={footerimg9}/></a>
          </div>
          <div className="footerthirdimgs2">
            <a href="#"><img src={footerimg10}/></a>
            <a href="#"><img src={footerimg11}/></a>
            <a href="#"><img src={footerimg12}/></a>
            <a href="#"><img src={footerimg13}/></a>
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
