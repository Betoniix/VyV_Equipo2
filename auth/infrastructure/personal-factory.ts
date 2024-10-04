import { Factory, ObjMaker } from "../../util/factory";
import { IPersonal } from "../domain/interfaces/IPersonal";

export class PersonalFactory extends Factory<number, IPersonal> {
  add(key: number, product: IPersonal): void {
    this.products.set(key, product);
  }

  make(key: number): ObjMaker<IPersonal> {
    if (!this.products.has(key))
      throw new Error(`Element ${key} doesn't exist`);
    const product = this.products.get(key);
    if (product === undefined) throw new Error(`Element ${key} doesn't exist`);
    return product;
  }
}
