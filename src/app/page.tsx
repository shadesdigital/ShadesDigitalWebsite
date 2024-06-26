import Footer from "./components/Footer";
import AboutUs from "./sections/about-us/aboutUs";
import Herobanner from "./sections/hero-banner/heroBanner";
import Industries from "./sections/industries/industries";
import Insights from "./sections/insights/insights";
import OurServices from "./sections/our-services/ourServices";


export default function Home() {
  return (
    <main>
      
      <Herobanner/>
      <AboutUs/>
      <Insights/>
      <Industries/>
      <OurServices/>
      <Footer/>
    </main>
  );
}
