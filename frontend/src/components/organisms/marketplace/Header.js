import { useEffect, useState } from "react";
import Logo from "../../atoms/Logo";
import "assets/css/templates/header-market.scss";
import userAvatar from "assets/img/avatar_2.png";
function Header() {
  // const [walletAddress, setWallet] = useState("");
  // const [status, setStatus] = useState("");

  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [url, setURL] = useState("");

  // useEffect(async () => {
  //   const { address, status } = await getCurrentWalletConnected();

  //   setWallet(address);
  //   setStatus(status);

  //   addWalletListener();
  // }, []);

  // function addWalletListener() {
  //   if (window.ethereum) {
  //     window.ethereum.on("accountsChanged", (accounts) => {
  //       if (accounts.length > 0) {
  //         setWallet(accounts[0]);
  //         setStatus("👆🏽 Write a message in the text-field above.");
  //       } else {
  //         setWallet("");
  //         setStatus("🦊 Connect to Metamask using the top right button.");
  //       }
  //     });
  //   } else {
  //     setStatus(
  //       <p>
  //         {" "}
  //         🦊{" "}
  //         <a
  //           target="_blank"
  //           href={`https://metamask.io/download.html`}
  //           rel="noreferrer"
  //         >
  //           You must install Metamask, a virtual Ethereum wallet, in your
  //           browser.
  //         </a>
  //       </p>
  //     );
  //   }
  // }

  // const connectWalletPressed = async () => {
  //   const walletResponse = await connectWallet();
  //   setStatus(walletResponse.status);
  //   setWallet(walletResponse.address);
  // };

  return (
    <>
      <header>
        <div className="header flex-wrapper">
          <div className="header-left flex-wrapper">
            <Logo alt="Space Worms" className="img-logo" />
            <nav>
              <ul>
                <li>
                  <a href="/compra-egg">Compra Egg</a>
                </li>
                <li>
                  <a href="/marketplace">Marketplace</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="user-area">
              <button>
                <img src={userAvatar} alt="" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
