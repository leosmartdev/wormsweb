import "../assets/css/templates/mmlogin.scss";
import Button from "../components/atoms/Button";
import metaLogo from "./../assets/img/zorro.png";
import SocialMedia from "../components/molecules/SocialMedia";
import { useEffect, useState } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
} from "../util/interact.js";


function MmLoginPage() {
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
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  return (
    <>
        <div className="vh-100 mm-login">
						<div className="mmlogincenterdiv">
								<h4 className="mmtitle">Conectar Cartera</h4>
								<p className="mmfirstp">
										Conéctese con su billetera disponible
										o cree una nueva billetera para
										unirse a nuestro mercado
								</p>
								<Button onClick={connectWalletPressed}>
									<img src={metaLogo} alt="Ingresar con MetaMask" width="60" className="logo-img"/>
									<span className="logo-text">Iniciar Sesión con <br/> Meta Mask</span>
								</Button>
								<p className="mmsecondp">
										No somos propietarios de sus claves privadas y no
										podemos acceder a sus fondos sin su confirmación.
										Ver término de uso
								</p>
						</div>
              <div className="mediadiv">
                <SocialMedia/>
              </div>
        </div>
    </>
  );
}

export default MmLoginPage;
