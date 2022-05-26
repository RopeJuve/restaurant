import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";

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

export default Home;
