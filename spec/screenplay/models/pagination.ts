import { Field } from "./field";
import { Sorting } from "./sorting";

export interface Pagination {
  p: number;
  n: number;
  s: Field;
  d: Sorting;
}
