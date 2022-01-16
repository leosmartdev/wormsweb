import MmHeader from "../components/organisms/login/MmHeader";
import "../assets/css/App.scss";

function MmLayout(props) {
  return (
    <>
      <MmHeader />
      {props.children}
    </>
  );
}
export default MmLayout;
