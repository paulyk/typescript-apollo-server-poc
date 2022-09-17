import { Book, BookInput, MutationPayload } from "./types"


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

export function createBook(input: BookInput): Book | null {
    if (!input.name || !input.author) {
        return null
    }
    const book: Book = input
    books.push(input)
    return book
}