import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Topbar from "@/components/Topbar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import BackToTop from "@/components/BackToTop";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <NavBar />
      <Component {...pageProps} />
      <Newsletter />
      <Footer />
      <BackToTop />
    </>
  );
}
