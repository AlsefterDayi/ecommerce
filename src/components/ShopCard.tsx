import { Link } from "react-router-dom";
import type { IProduct } from "../Modules/Shop/Models/ShopModels";
import type React from "react";

interface IShopCard {
  data: IProduct;
}

const ShopCard: React.FC<IShopCard> = (props) => {
  const { _id, name, details, price, productImage } = props.data;

  return (
    <div className="shopCard">
      <div className="cardImg">
        <img src={productImage} alt={name} />
      </div>
      <div className="carInfo">
        <Link className="carTitle" to={`/car-details/${_id}`}>
          {name}
        </Link>
        <p className="carDetails">{details}</p>
        <p className="carPrice">{price} AZN</p>
      </div>
    </div>
  );
};

export default ShopCard;
