type DeepReadonly<T> = {
  readonly [t in keyof T]: T[t] extends Record<any, unknown>
    ? DeepReadonly<T[t]>
    : T[t];
}
