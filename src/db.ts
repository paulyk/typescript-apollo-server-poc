import { Book, BookInput, BookUpdatePayload } from "./types"


export let books: Book[] = [
    {
        name: 'Anitifragile',
        author: "NNT"
    },
    {
        name: "Alice in Wonderland",
        author: "Loise Caroll"
    },
    {
        name: "One first two first",
        author: "Dr Seus"
    },
    {
        name: "The Rational Optimist",
        author: "Matt Ridley"
    },
    {
        name: "Genome",
        author: "Matt Ridley"
    },
]


export function getBooks(): Book[] {
    return books
}

export function createBook(input: BookInput): BookUpdatePayload {
    const payload: BookUpdatePayload = {
        book: null,
        errors: !input.name || !input.author ? ["Name and author required"]: []
    }
    if (payload.errors.length > 0) {
        return payload;
    }

    const book: Book = input
    books.push(input)
    payload.book = book;
    return payload;
}