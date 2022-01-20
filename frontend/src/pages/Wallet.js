import SocialMedia from "components/molecules/SocialMedia";
import { useState } from "react";
import { Link } from "react-router-dom";
import cryptoCoinLogo from "assets/img/gusano1.png";
export default function WalletPage() {
  const [modalOpen, setModalOpen] = useState(true);

  // the Modal
  const ShowWallet = () => {
    return (
      <>
        <div className="modal-wrapper">
          <div className="grid wallet-layout">
            {/*  */}
            {/* wallet starts */}
            <div>
              <div className="wallet-blue-box">
                <div className="wallet-user-info">
                  <div>img</div>
                  <div>JhonWick</div>
                  <div>wallet id</div>
                </div>
                <div className="wallet-user-info-menu">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/inventory">
                          <span>i</span>Inventario
                        </Link>
                      </li>
                      <li>
                        <Link to="/wallet">
                          <span>i</span>Inventario
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div>
              <div className="h1">Wallet</div>
              <div className="div">wallet id</div>
              <div className="flex-wrapper">
                <div className="wallet-blue-box">
                  <h7>Coin</h7>
                  <div className="value">
                    0 WBNB
                    <legend>0 USD</legend>
                  </div>
                  <div className="value">
                    0 BUSD
                    <legend>0 USD</legend>
                  </div>
                </div>
                <div className="wallet-blue-box">
                  <h7>WormsCoin</h7>
                  <div className="value">
                    1500 WC
                    <legend>75 USD</legend>
                  </div>
                  <div className="grid mt-2">
                    <button className="button">Depositar</button>
                  </div>
                </div>
              </div>
              <div className="h1">Ingame Currency</div>
              <div className="wallet-blue-box">
                <div>WormsCoin</div>
                <div className="wallet-blue-box-image">
                  <img src={cryptoCoinLogo} alt="" />
                </div>
                <div className="crypto-value">
                  130
                  <legend>25 USD</legend>
                </div>
                <div className="grid mt-2">
                  <button className="button">Retirar</button>
                </div>
              </div>
            </div>

            {/* <div className="create-account-modal">
                <h1>Compra</h1>
                <p className="my-1">
                  Estas a punto de comprar un huevo en Space Worms
                </p>
              </div> */}
            {/*  */}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {modalOpen ? <ShowWallet /> : ""}

      <div className="mm-wallet">
        <div className="">{` `}</div>
      </div>
    </>
  );
}
