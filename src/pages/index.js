import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../next-i18next.config";
import Layout from "../components/Layout/Layout";
import HeroSection from "../components/HeroSection/HeroSection";
import BookingSection from "../components/BookingSection/BookingSection";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>MyHotel</title>
        <meta name="description" content="Hotel" />
      </Head>
      <Layout>
        <NavBar />
        <HeroSection />
        <BookingSection />
        <AboutUs />
        <Footer />
      </Layout>
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale || "de",
        ["common"],
        nextI18nextConfig
      )),
    },
  };
}

export default Home;
