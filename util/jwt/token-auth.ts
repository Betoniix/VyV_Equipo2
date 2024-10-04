export interface TokenValidator<T> {
  validate(token: T): boolean;
}

export interface TokenGenerator<T> {
  generate(payload: object, options?: object): T;
}

export const tokenGenerator = <K, T extends TokenGenerator<K>>(
  tokenConstructor: new () => T,
) => {
  const generator = new tokenConstructor();
  return (payload: object, options?: object) =>
    generator.generate(payload, options);
};
