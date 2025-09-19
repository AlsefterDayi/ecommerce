import carsDb, { CarCategory } from "../../../db/carsDb";

export class HomeService {
  static getCategories() {
    const data = carsDb.map((item) => item.category);
    return Array.from(new Set(data));
  }
  static getCarsByCategory(category: CarCategory | null) {
    if (!category) {
      return carsDb;
    } else {
      return carsDb.filter((car) => car.category === category);
    }
  }
}
