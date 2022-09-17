export interface Book {
    name: string
    author: string
}

export interface BookInput {
    name: string
    author: string
}

export interface MutationPayload<T> {
    result: T | null,
    errors: string[]
}
