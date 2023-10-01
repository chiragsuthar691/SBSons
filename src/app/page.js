"use client";
import Header from "@/components/header";
import "../assests/css/Styles.scss"
import Hero from "@/components/Hero";
import DealOffers from "@/components/DealOffers";
import RecommandProducts from "@/components/RecommandProducts";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <DealOffers />
      <DealOffers />
      <RecommandProducts />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
