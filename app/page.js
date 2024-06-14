import { AboutMe } from "./UI/organisms/AboutMe/AboutMe";
import ContactMe from "./UI/organisms/ContactMe/ContactMe";
import Footer from "./UI/template/Footer/Footer";
import { Header } from "./UI/template/Header/Header";
import { MainBanner } from "./UI/organisms/MainBanner/MainBanner";
import { Portofolio } from "./UI/organisms/Portfolio/Portofolio";
import WorkExperiencie from "./UI/organisms/WorkExperiencie/WorkExperiencie";


export default function Home() {
  return (
    <main >
        <Header />
        <MainBanner /> 
        <AboutMe />
        <WorkExperiencie /> 
        <Portofolio />
        <ContactMe  />
        <Footer />
    </main>
  ); 
}
