import React from "react";
import SimpleSlider from "./components/Slider";
import ProductCard from "./components/ProductCard";
import { latestProducts } from "../../assets/mockdata";

function Home() {
  return (
    <div className='container '>
      {/* <SimpleSlider /> */}
      
      <section className="grid justify-items-center mt-5 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-3 lg:gap-10 2xl:grid-cols-4 ">
        {
          latestProducts.map((el) => {
            return (
              <div key={el.id}>
                <ProductCard data={el} />

              </div>
            )

          })
        }
      </section>
    </div>
  )

}

export default Home;
