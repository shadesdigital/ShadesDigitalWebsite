import Footer from "./components/Footer";
import FooterAlt from "./components/FooterAlt";
import AboutUs from "./sections/about-us/aboutUs";
import Herobanner from "./sections/hero-banner/heroBanner";
import Industries from "./sections/industries/industries";
import Insights from "./sections/insights/insights";
import OurServices from "./sections/our-services/ourServices";

export default function Home() {
  return (
    <main>
      <Herobanner />
      <AboutUs />
      <OurServices />
      <Industries />
      {/* <Footer /> */}
      <FooterAlt />
    </main>
  );
}
