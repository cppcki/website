import Facebook from "../../assets/images/facebook.svg";
import Tiktok from "../../assets/images/tiktok.svg";
import Instagram from "../../assets/images/instagram.svg";
import Mail from "../../assets/images/mail.svg";
import Discord from "../../assets/images/discord.svg";

function MediaLink(props) {
  const icon = props.icon;
  const link = props.href;
  return (
    <li>
      <a href={link} target="_blank">
        <img src={icon} />
      </a>
    </li>
  );
}
export function Media(props) {
  return (
    <ul>
      {/*<MediaLink icon={Mail} href="https://mail.google.com" />*/}
      <MediaLink icon={Discord} href="https://Discord.gg/SBPRV8Yy8B" />
      <MediaLink icon={Instagram} href="https://Instagram.com/cppcki/" />
      <MediaLink icon={Facebook} href="https://Facebook.com" />
      <MediaLink icon={Tiktok} href="https://www.tiktok.com/@cppcki" />
    </ul>
  );
}
