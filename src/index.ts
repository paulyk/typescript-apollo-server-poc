import { ApolloServer, gql } from 'apollo-server'
import { createBook, getBooks } from './data'
import { BookInput } from './types'

console.clear()
console.log('start')

const typeDefs = gql`

    type Query {
        greet: String!
        books(count: Int): [Book!]
    }

    type Book {
        name: String!
        author: String!
    }

    input BookInput {
        name: String!
        author: String!        
    }

    type Mutation {
        createBook(input: BookInput): Book
    }
`

const resolvers = {
    Query: {
        greet: () => "Hi Dude!",
        books: (_: any, { count }: { count?: number }) => {
            if (count) {
                return getBooks().filter((_, i) => i < count)
            }
            return getBooks()
        }
    },
    Mutation: {
        createBook: (_: any, { input }: { input: BookInput }) => createBook(input)
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
});

server.listen({ port: 4500 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

