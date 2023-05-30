type Falsy = 0 | '' | false | [] | { [P in any]: never }

type AnyOf<T extends readonly any[]> = T extends [infer H, ...infer T]
  ? H extends Falsy
    ? AnyOf<T>
    : true
  : false
