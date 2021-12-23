import Header from "../components/organisms/home/Header";
import "../assets/css/App.scss";
import Footer from "../components/organisms/home/Footer";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
export default Layout;
