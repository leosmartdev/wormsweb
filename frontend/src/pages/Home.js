import "../assets/css/templates/home.scss";
import Button from "../components/atoms/Button";
import CarouselSlider, {
  CarouselScreenshotSlider,
} from "../components/molecules/CarouselSlider";
import video from "./../assets/img/game-video.mp4";
import homefirstimg1 from "./../assets/img/20.png";
import homefirstimg5 from "./../assets/img/1.png";
import homebuttonimg1 from "./../assets/img/3.png";
import homebuttonimg2 from "./../assets/img/2.png";
import homebuttonimg3 from "./../assets/img/4.png";
import homesecondimg1 from "./../assets/img/5.png"; 
import homefourthimg1 from "./../assets/img/6.png";
import homefourthimg2 from "./../assets/img/16.png";
import homefourthimg3 from "./../assets/img/15.png";
import homefourthimg4 from "./../assets/img/17.png";
import homefourthimg5 from "./../assets/img/18.png";

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
        <div className="vh-100">
          <div className="left-right-flex home-first-area">
            <div className="left">
              <div className="leftrightinnerdiv">
                <img src={homefirstimg1} className="homefirstimg1"/>
                <p className="homeparag1">Video juego blockchain inspirado en slither.io donde debes ir
                  comiendo para convertirte en el gusano mayor y obtener
                  grandes recompensas</p>
                <div className="homefirstbuttondiv">
                  <Button className="homefirstbutton1">
                    <img src={homebuttonimg1}/>  
                  </Button>
                  <Button className="homefirstbutton1">
                    <img src={homebuttonimg2}/>  
                  </Button>
                  <Button className="homefirstbutton1">
                    <img src={homebuttonimg3}/>  
                  </Button>              
                </div>
              </div>
            </div>
            <div className="right homesecondarea">
              <div className="leftrightinnerdiv">
                <img src={homefirstimg5} className="homefirstimg5"/>
              </div>
            </div>
          </div>
        </div>
        <div className="vh-100 flex-wrapper">
          <div className="box-with-borders2">
            <div className="homesecondleftdiv">
                <img  src={homesecondimg1} className="homesecondimg1"/>
            </div>
            <div className="homesecondrightdiv">
                <p>Una peligrosa raza Alienígena amenaza con destruir todo a
                su paso para controlar la Fuerza Cósmica y la última
                esperanza para enfrentarlos son los Gusanos Espaciales:
                guerreros de un apetito sin límites</p>
                <p>En Space Worms podrás ser parte de esta Guerra Espacial
                contra los Loriks en un videojuego que te brindará horas
                interminables de diversión además de generar ingresos
                ilimitados. ¡No te pierdas la oportunidad de unirte a esta
                lucha para salvar al Universo usando la fuerza del Sol y las
                Estrellas, mejorando a tu gusano y resolviendo misiones
                diarias, o sencillamente enfréntate a otros y demuestra
                quien es el más grande de tu especie!</p>
            </div>
          </div>
        </div>
        <div className="vh-100 homethirdarea">
          <div className="homethirdleftdiv">
            <p>Salva el
              universo y
              obten grandes
              recompensas</p>
          </div>
          <div className="homethirdrightdiv">
            <Video />
          </div>
        </div>
        <div className="vh-100 flex-wrapper">
          <div className="homefourtharea">
                <p>ROAD MAP</p>
                <img src={homefourthimg1} className="homefourthimg1"/>
                <div className="homefourthcontrolpanel">                  
                  <a href="#">
                    <img src={homefourthimg2}  className="homefourthimgs"/>  
                  </a>                  
                  <a href="#">
                    <img src={homefourthimg3}  className="homefourthimgs"/>   
                  </a>                  
                  <a href="#">
                    <img src={homefourthimg4}  className="homefourthimgs"/>   
                  </a>                  
                  <a href="#">
                    <img src={homefourthimg5}  className="homefourthimgs"/>                                     
                  </a>
                </div>
          </div>
        </div>
        <div className="vh-100 flex-wrapper direction-column homefiftharea">
          <h6>Screenshots</h6>
          <div class="container-slider-two">
            <div class="slider-two">
              <CarouselScreenshotSlider />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
