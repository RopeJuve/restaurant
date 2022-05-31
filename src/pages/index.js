import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../next-i18next.config";
import Layout from "../components/Layout/Layout";
import HeroSection from "../components/HeroSection/HeroSection";
import BookingSection from "../components/BookingSection/BookingSection";

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
