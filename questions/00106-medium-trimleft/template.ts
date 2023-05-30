type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer O}` ? TrimLeft<O> : S
