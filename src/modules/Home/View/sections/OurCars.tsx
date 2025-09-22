// Fake DB
import { CarCategory, type ICarsDb } from "../../../../db/carsDb";

// Components
import CarCard from "../../../../components/CarCard";
import { useEffect, useState } from "react";
import { HomeService } from "../../Service/HomeService";

const OurCars = () => {
  const [cars, setCars] = useState<ICarsDb[]>([]);
  const [categories, setCategories] = useState<CarCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CarCategory | null>(
    null
  );

  const getData = () => {
    const res = HomeService.getCars(selectedCategory);
    setCars(res);
    const cate = HomeService.getCategories();
    setCategories(cate);
  };

  useEffect(() => {
    getData();
  }, [selectedCategory]);

  return (
    <section className="ourCarsSection">
      <div className="container">
        <div className="row">
          <div className="ourCarsHead">
            <h2>OUR CARS</h2>
            <ul className="categoryList">
              <li
                className={`categoryItem ${!selectedCategory ? "active" : ""}`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </li>
              {categories.map((item) => (
                <li
                  className={`categoryItem ${
                    item === selectedCategory ? "active" : ""
                  }`}
                  key={item}
                  onClick={() => setSelectedCategory(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="carsBox">
            {cars.map((item) => (
              <CarCard data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCars;
