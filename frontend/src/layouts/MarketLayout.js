import Header from "../components/organisms/marketplace/Header";
import "../assets/css/App.scss";
import "assets/css/templates/marketplace.scss";

function MarketLayout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
export default MarketLayout;
