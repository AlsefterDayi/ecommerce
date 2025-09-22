import "i18next";
import { resources } from "../utils/118n";

declare module "i18next" {
  // JSON-un type-larını resourcelardan avtomatik götürür
  interface CustomTypeOptions {
    resources: (typeof resources)[keyof typeof resources];
  }
}
