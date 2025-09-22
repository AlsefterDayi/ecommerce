import { useEffect, useState } from "react";
import ShopCard from "../../../components/ShopCard";
import type { IProduct } from "../Models/ShopModels";
import { ShopService } from "../Service/ShopService";
import Loader from "../../../components/Loader";

const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await ShopService.productList();
      setProducts(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <h2 className="title">Buy Car</h2>
          <div className="carsBox">
            {products.map((item) => (
              <ShopCard data={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
