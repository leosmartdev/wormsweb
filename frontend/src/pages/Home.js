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
import homefourthimg1 from "./../assets/img/6.png";
// import homefourthimg2 from "./../assets/img/16.png";
// import homefourthimg3 from "./../assets/img/15.png";
// import homefourthimg4 from "./../assets/img/17.png";
// import homefourthimg5 from "./../assets/img/18.png";
const Video = () => {
  return (
    <>
      <video autoPlay playsInline muted src={video} />
    </>
  );
};

function HomePage() {
  return (
    <>
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
                  Video juego blockchain inspirado en slither.io donde debes ir
                  comiendo para convertirte en el gusano mayor y obtener grandes
                  recompensas
                </p>
                <div className="homefirstbuttondiv">
                  <div className="mx-auto">
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
        <div className="vh-100 box-with-borders2">
          <div className="flex-wrapper hs-flex-column">
            <div className="homesecondleftdiv">
              <img src={homesecondimg1} className="homesecondimg1" alt="" />
            </div>
            <div className="homesecondrightdiv">
              <p>
                Una peligrosa raza Alienígena amenaza con destruir todo a su
                paso para controlar la Fuerza Cósmica y la última esperanza para
                enfrentarlos son los Gusanos Espaciales: guerreros de un apetito
                sin límites.
              </p>
              <p>
                En Space Worms podrás ser parte de esta Guerra Espacial contra
                los Loriks en un videojuego que te brindará horas interminables
                de diversión además de generar ingresos ilimitados. ¡No te
                pierdas la oportunidad de unirte a esta lucha para salvar al
                Universo usando la fuerza del Sol y las Estrellas, mejorando a
                tu gusano y resolviendo misiones diarias, o sencillamente
                enfréntate a otros y demuestra quien es el más grande de tu
                especie!
              </p>
            </div>
          </div>
        </div>
        <div className="vh-100 homethirdarea">
          <div className="homethirdleftdiv">
            <p>Salva el universo y obten grandes recompensas</p>
          </div>
          <div className="homethirdrightdiv">
            <Video />
          </div>
        </div>
        <div className="vh-100 flex-wrapper">
          <div className="homefourtharea">
            <p>ROAD MAP</p>
            <div className="grid homefourthimg1">
              <img src={homefourthimg1} alt="roadmap" className=" img-fluid" />
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
        <div className="vh-100 flex-wrapper direction-column homefiftharea">
          <h6>Screenshots</h6>
          <div className="container-slider-two">
            <div className="slider-two">
              <CarouselScreenshotSlider />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
