type Replace<S extends string, From extends string, To extends string> =
    S extends `${infer F}${From}${infer L}` ?
        (From extends '' ?
          S : `${F}${To}${L}`) :
      S
