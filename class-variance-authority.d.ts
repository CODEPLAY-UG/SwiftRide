declare module "class-variance-authority" {
  type VariantOptions = Record<string, Record<string, string>>;
  type CVA = (
    base: string,
    variants: VariantOptions
  ) => (options?: Record<string, string | boolean | undefined>) => string;
  export const cva: CVA;
}
