import "../../assets/css/templates/components/social-media.scss";
function SocialMedia() {
  return (
    <div className="social-media-area">
      <ul>
        <li>
          <a href="discord.com" className="sm-icon discord" rel="noreferrer">
            &nbsp;
          </a>
        </li>
        <li>
          <a href="twitter.com" className="sm-icon twitter" rel="noreferrer">
            &nbsp;
          </a>
        </li>
        <li>
          <a href="telegram.com" className="sm-icon telegram" rel="noreferrer">
            &nbsp;
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
