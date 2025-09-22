import * as ShopProvider from "../Provider/ShopProvider";

export class ShopService {
  static async productList() {
    return await ShopProvider.getProducts().then((res) => {
      return res.data.map((item) => ({
        ...item,
        productImage: `${import.meta.env.VITE_IMAGE_URL}/${item.productImage}`,
      }));
    });
  }

  static async productDetails(id: string) {
    return await ShopProvider.getProductDetails(id).then((res) => {
      return {
        ...res.data,
        productImage: `${import.meta.env.VITE_IMAGE_URL}/${
          res.data.productImage
        }`,
      };
    });
  }
}
