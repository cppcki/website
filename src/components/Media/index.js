import { Container } from "./styles";

import { ReactComponent as Meta } from "../../assets/media/meta.svg";
import { ReactComponent as Discord } from "../../assets/media/discord.svg";
import { ReactComponent as Tiktok } from "../../assets/media/tiktok.svg";
import { ReactComponent as Instagram } from "../../assets/media/instagram.svg";

function Item(props) {
  const { icon: Icon, href } = props;
  return (
    <li>
      <a href={href}>
        <Icon/>
      </a>
    </li>
  );
}

export function Media() {
  return (
    <Container>
      <Item icon={Instagram} href="https://www.instagram.com/cppcki/"/>
      <Item icon={Tiktok} href="https://www.tiktok.com/@cppcki"/>
      <Item icon={Meta} href="https://www.instagram.com/cppcki/"/>
      <Item icon={Discord} href="https://discord.gg/SBPrv8Yy8B"/>
    </Container>
  );
}