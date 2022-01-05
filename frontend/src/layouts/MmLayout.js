import MmHeader from "../components/organisms/login/MmHeader";
import "../assets/css/App.scss";
import Footer from "../components/organisms/home/Footer";

function MmLayout(props) {
  return (
    <>
      <MmHeader />
      {props.children}
    </>
  );
}
export default MmLayout;
