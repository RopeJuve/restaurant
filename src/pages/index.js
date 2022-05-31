import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../next-i18next.config";

const Home = () => {
  return (
    <div>
      <Head>
        <title>MyHotel</title>
        <meta name="description" content="Hotel" />
      </Head>
      <NavBar />
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
