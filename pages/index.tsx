import type { NextPage } from "next";
import Image from "next/image";

import Header from "../components/Header";
import Button from "../components/Button";
import {
  HeroMain,
  HeroWrapper,
  HeroTitle,
  HeroButton,
  HeroGreat,
  GreatOutline,
  BlurTop,
  BlurBottom,
  BlurMobile,
} from "../styles/pages/Home";
import { FaAngleRight } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <>
      <main className={HeroMain()}>
        <Header />
        <div className={HeroWrapper()}>
          <h1 className={HeroTitle()}>
            O café que fará seu código decolar para o próximo nível.
          </h1>
          <div className={HeroButton()}>
            <button className={Button({ size: "lg" })}>
              PEGAR MEU CAFÉ <FaAngleRight />
            </button>
          </div>
          <div className={HeroGreat()}>
            <h1>Great Coffee</h1>
            <h1 className={GreatOutline()}>
              {`<`}Great Code{`/>`}
            </h1>
          </div>
          <Image
            src="/assets/rocket-coffee.png"
            alt="Rocket Coffee"
            width={799}
            height={399}
          />
        </div>
        <div className={BlurTop()}>
          <Image
            src={"/assets/blur-2.png"}
            alt="Blur Top"
            width={621}
            height={621}
          />
        </div>
        <div className={BlurBottom()}>
          <Image
            src={"/assets/blur-1.png"}
            alt="Blur Bottom"
            width={621}
            height={621}
          />
        </div>
        <div className={BlurMobile()}>
          <Image
            src={"/assets/blur-mobile.png"}
            alt="Blur Mobile"
            width={700}
            height={921}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
