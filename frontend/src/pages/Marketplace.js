// import "../assets/css/templates/mmlogin.scss";
import Button from "components/atoms/Button";
import { useEffect, useState } from "react";
import "assets/css/templates/components/modal.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SocialMedia from "components/molecules/SocialMedia";
import eggNFT from "assets/img/huevo-gusano.png";
import Logo from "components/atoms/Logo";
import LoadingWorm from "components/organisms/LoadingWorm";
import alien from "assets/img/alien.png";
import soldierWorm from "assets/img/gusano-guerrero.png";
import { connectWallet, getCurrentWalletConnected } from "../util/interact.js";

function MarketPlacePage() {
  const [modalOpen, setModalOpen] = useState(true);
  const [currentModal, setCurrentModal] = useState("asd");

  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(async () => {
    // const { address, status } = await getCurrentWalletConnected();
    // setWallet(address);
    // setStatus(status);
    addWalletListener();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setModalOpen(false);
    }, 3000);
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          // setWallet(accounts[0]);
          // setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          // setWallet("");
          // setStatus("🦊 Connect to Metamask using the top right button.");

          localStorage.removeItem("uuid");
          navigate("/mmlogin");
        }
      });
    }
  }
  // handler to open ShowBuyEgg
  const handleBuyEgg = () => {
    setCurrentModal("buy-egg");
    setModalOpen(true);
  };
  // the Modal
  const ShowBuyEgg = () => {
    return (
      <>
        <div className="modal-wrapper">
          <div className="grid place-center">
            {/*  */}
            {/* form starts */}
            {currentModal === "buy-egg" ? (
              <>
                <div className="create-account-modal">
                  <h1>Compra</h1>
                  <p className="my-1">
                    Estas a punto de comprar un huevo en Space Worms
                  </p>
                  <BuyEggForm
                    onClick={() => {
                      setModalOpen(false);
                    }}
                  />
                </div>
              </>
            ) : currentModal === "loading-screen" ? (
              <>
                <div className="loading-screen-container">
                  <div>
                    <Logo />
                    <h1>Cargando</h1>
                  </div>
                  <LoadingWorm />
                </div>
              </>
            ) : (
              <>
                {() => {
                  setModalOpen(false);
                }}
                <div className="absolute img-loading">
                  <img src={soldierWorm} alt="" />
                </div>
                <div className="flex-wrapper">
                  <img src={alien} alt="" />
                  <h1>Bienvenido a la aventura</h1>
                </div>
              </>
            )}
            {/*  */}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {modalOpen ? <ShowBuyEgg /> : ""}

      <div className="vh-100 mm-mint grid">
        <div className="">
          <h1 className="mmtitle">Minteo NFT</h1>
          <div>
            <div className="NFT-status-container">
              <div className="NFT-status-box">
                <div>Cantidad Disponible</div>
                <div>1000 / 1000</div>
              </div>
              <div className="NFT-status-box">
                <div>Tiempo disponible</div>
                <div>2 días / 48Hrs</div>
              </div>
              <div className="NFT-status-box">
                <div>Egg comprados</div>
                <div>00</div>
              </div>
            </div>
            <div className="NFT-view-container">
              <div className="image-container">
                <img src={eggNFT} alt="" />
              </div>
              <div className="NFT-view-info-price">
                <div className="NFT-view-info-name">Minteo NFT</div>
                <div>100 BUSD</div>
              </div>
              <div className="NFT-view-info-stats">
                <div className="NFT-rare">Raro 5%</div>
                <div className="NFT-common">Común 12%</div>
                <div className="NFT-legendary">Legendario 8%</div>
                <div className="NFT-uncommon">Poco común 3%</div>
              </div>
              <div className="mt-1">
                <button onClick={handleBuyEgg} className="button">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

// form component

const BuyEggForm = ({ onClick }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <form className="buy-egg-form mt-1" onSubmit={handleSubmit(onSubmit)}>
      <div className="buy-egg-form-label flex-wrapper">
        <div>Costo de huevo</div>
        <div>100 BUSD</div>
      </div>
      <div className="buy-egg-form-quantity flex-wrapper">
        <div>Cantidad</div>
        <div>
          <input
            type="number"
            className="number-input"
            {...register("nftquantity")}
          />
        </div>
      </div>
      <div className="buy-egg-form-label flex-wrapper">
        <div>Precio total</div>
        <div>100 BUSD</div>
      </div>
      <div className="buy-egg-form-terms">
        * máximo de compra por wallet (2)
      </div>
      <div className="buy-egg-form-actions flex-wrapper mt-1">
        <button className="button cancel create-acc-button" onClick={onClick}>
          Cancelar
        </button>
        <button className="button create-acc-button">Comprar</button>
      </div>
    </form>
  );
};
export default MarketPlacePage;
