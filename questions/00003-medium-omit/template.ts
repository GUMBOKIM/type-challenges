type CustomExclude<T, K> = T extends K ? never : T
type MyOmit<T, K extends keyof T> = { [P in CustomExclude<keyof T, K>]: T[P] }

