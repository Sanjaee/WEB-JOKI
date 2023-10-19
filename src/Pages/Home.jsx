import React from "react";
import Navigasi from "../Components/Navigasi";
import Slide from "../Components/Slide";
import Footer from "../Components/Footer";
import Store from "../StorePages/Store";
import Tutorial from "../Components/Tutorial";

const Home = () => {
  return (
    <div className="bg-gray-200 min-h-screen ">
      {/* ini navbar nya */}
      <Navigasi />
      {/* ini selesai navbar nya */}

      {/* ini slide nya */}
      <Slide />
      {/* ini selesai slide nya */}

      {/* ini selesai list game nya/jasa nya */}
      <Store />
      {/* ini footer nya */}

      <div>
        <Tutorial />
      </div>
      <Footer />
      {/* ini selesai footer nya */}
    </div>
  );
};

export default Home;
