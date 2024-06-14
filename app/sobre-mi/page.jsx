import { AboutMe } from "../UI/organisms/AboutMe/AboutMe";
import Footer from "../UI/template/Footer/Footer";
import Header from "../UI/template/Header/Header";
import WorkExperiencie from "../UI/organisms/WorkExperiencie/WorkExperiencie";
import { BannerOtherPages } from "../UI/organisms/BannerOtherPages/BannerOtherPages";
import SliderCursos from "../UI/molecules/SliderCursos/SliderCursos";
import { Certificados } from "../UI/organisms/Certificados/Certificados";

export default function SobreMiPage() {
  return (
    <>
      <main>
        
        <Header />
        <BannerOtherPages />
        <AboutMe />
        <Certificados />
        <WorkExperiencie />
        <Footer />
      </main>
    </>
  );
}
