import React from "react";
import Image from "next/image";
import Button from "../Button";

import {
  HeaderWrapper,
  HeaderLogo,
  ButtonWrapper,
  MenuButton,
  HeroMenu,
} from "./styles";
import { FaAngleRight } from "react-icons/fa";
import LogoMobile from "../../public/assets/logo-mobile.svg";
import LogoDesktop from "../../public/assets/logo-desktop.svg";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <header className={HeaderWrapper()}>
      <div className={HeaderLogo()}>
        <LogoDesktop />
        <LogoMobile />
      </div>

      <div className={HeroMenu({ visible: openMenu ? true : false })}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Recompensas</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Lojas</a>
          </li>
        </ul>
      </div>

      <div className={MenuButton()} onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? (
          <Image
            src="/assets/menu-buguer-close.svg"
            alt="Menu Hamburguer close"
            width={44}
            height={20}
          />
        ) : (
          <Image
            src="/assets/menu-buguer-open.svg"
            alt="Menu Hamburguer Open"
            width={44}
            height={20}
          />
        )}
      </div>

      <div className={ButtonWrapper()}>
        <button className={Button({ size: "lg" })}>
          PEGAR MEU CAFÉ <FaAngleRight />
        </button>
      </div>
    </header>
  );
};

export default Header;
