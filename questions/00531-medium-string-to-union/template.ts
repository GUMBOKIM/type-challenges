type StringToUnion<T extends string> = T extends `${infer C}${infer T}`
  ? C | StringToUnion<T>
  : never
