type MyAwaited<T> = T extends PromiseLike<infer R> ? MyAwaited<R> : T

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{ [K in keyof T]: MyAwaited<T[K]> }>
