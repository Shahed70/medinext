import NavBar from "@/components/NavBar";
import Topbar from "@/components/Topbar";
import Appointment from "./components/Appointment";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Services from "./components/Services";
import Offer from "./components/Offer";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";


const index = () => {
  return (
    <>
      <Topbar />
      <NavBar />
      <Hero/>
      <Banner />
      <Packages />
      <Appointment />
      <Services />
      <Offer />
      <Packages />
      <Testimonial />
      <Team />
      <Newsletter />
      <Footer />
    </>
  );
};

export default index;
