import Footer from "../components/organisms/home/Footer";

function GameLayout(props) {
  return (
    <>
      {props.children}
      <Footer />
    </>
  );
}
export default GameLayout;
