export interface Book {
    name: string
    author: string
}

export interface BookInput {
    name: string
    author: string
}

export interface BookUpdatePayload {
    book: Book | null
    errors: string[]
}

