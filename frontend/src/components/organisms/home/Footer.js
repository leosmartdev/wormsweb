import "./../../../assets/css/templates/footer-home.scss";
import SocialMedia from "./../../molecules/SocialMedia";

import aws from "./../../../assets/img/Amazon-Web-Services-AWS-Logo.jpg";
import phaser from "./../../../assets/img/Phaser_Logo.png";
import binance from "./../../../assets/img/bsc.jpg";
import pancake from "./../../../assets/img/pancake.jpg";
import Logo from "../../atoms/Logo";
function Footer() {
  return (
    <>
      <footer>
        <div className="border-bottom">
          <ul className="sponsors">
            <li>
              <a href="www.aws.com">
                <img src={aws} alt="amazon web services" />
              </a>
            </li>
            <li>
              <a href="www.phaser.com">
                <img src={phaser} alt="amazon web services" />
              </a>
            </li>
            <li>
              <a href="www.binance.com">
                <img src={binance} alt="amazon web services" />
              </a>
            </li>
            <li>
              <a href="www.pancakeswap.com">
                <img src={pancake} alt="amazon web services" />
              </a>
            </li>
          </ul>
          <Logo />
          <SocialMedia />
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
