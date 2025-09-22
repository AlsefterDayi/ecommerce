// Sections
import $api from "../../../api/endpoint.ts";
import Hero from "./sections/Hero.tsx";
import OurCars from "./sections/OurCars.tsx";

const Home = () => {

console.log($api('get_all_product'))

  return (
    <main>
      <Hero />
      <OurCars />
    </main>
  );
};

export default Home;
