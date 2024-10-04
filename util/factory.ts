export type ObjMaker<C> = C;

export abstract class Factory<P, O> {
  protected products: Map<P, O> = new Map();

  abstract add(key: P, product: O): void;
  abstract make(name: P): ObjMaker<O>;
}
