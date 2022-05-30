import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import Layout from "../components/Layout/Layout";
import HeroSection from "../components/HeroSection/HeroSection";

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
      </Layout>
    </div>
  );
};

export default Home;
