import "../assets/css/templates/home.scss";
import Button from "../components/atoms/Button";
import CarouselSlider, {
  CarouselScreenshotSlider,
} from "../components/molecules/CarouselSlider";
import video from "./../assets/img/game-video.mp4";

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
        <div className="vh-100 flex-wrapper">
          <div className="slider-one">
            <CarouselSlider />
          </div>
        </div>
        <div className="vh-100 flex-wrapper">
          <div className="box-with-borders">
            <div className="wrapper-container">
              <div className="wrapper-container-dialog">
                <h2>Torneo</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor
                </p>
                <Button>Participar</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="vh-100 left-right-flex">
          <div className="left">
            <h3>Come crece y corre</h3>
            <Button>Descargar</Button>
          </div>
          <div className="right">
            <Video />
          </div>
        </div>
        <div className="vh-100 flex-wrapper">
          <div className="box-with-borders">
            <div className="wrapper-container">
              <div className="wrapper-container-dialog">
                <h2>Información</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie con-
                  sequat, vel illum dolore eu feugiat nulla facilisis at vero
                  eros et accumsan et iusto odio dignissim qui blandit praesent
                  luptatum zzril delenit augue duis dolore te feugait nulla
                  facilisi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="vh-100 flex-wrapper direction-column">
          <h6>Screenshots</h6>
          <div className="slider-one">
            <CarouselScreenshotSlider />
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
