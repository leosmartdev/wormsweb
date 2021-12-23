import logo from "../../assets/img/logo.png";
function Logo(props) {
  return (
    <>
      <a href="/">
        <img src={logo} className={props.className} alt={props.alt} />
      </a>
    </>
  );
}
export default Logo;
