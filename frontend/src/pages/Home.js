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
                  Videojuego blockchain inspirado en slither.io
                </p>
                <p>Conviertete en el gusano Nº1 y obten grandes recompensas</p>
                <div className="homefirstbuttondiv">
                  <div className="mx-auto flex-wrapper">
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
          <div className="flex-wrapper hs-flex-column">
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
        <div className="vh-100 homethirdarea">
          <div className="homethirdleftdiv">
            <p>Salva el universo y obten grandes recompensas</p>
          </div>
          <div className="homethirdrightdiv">
            <Video />
          </div>
        </div>
        {/* roadmap */}
        <div className="vh-100 flex-wrapper">
          <div className="homefourtharea">
            <section id="#roadmap">
              <p>ROAD MAP</p>
            </section>
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
        <div className="vh-100 flex-wrapper direction-column homefiftharea">
          <h6>Screenshots</h6>
          <div className="container-slider-two">
            <div className="slider-two">
              <CarouselScreenshotSlider />
            </div>
          </div>
        </div>
        {/*  */}
      </main>
    </>
  );
}

export default HomePage;
