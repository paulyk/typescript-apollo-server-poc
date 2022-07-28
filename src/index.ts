import { ApolloServer, gql } from 'apollo-server'
import { books } from './data';

const typeDefs = gql`

    type Query {
        greet: String!
        books(count: Int): [Book!]
    }

    type Book {
        name: String!
        author: String!
    }
`

const resolvers = {
    Query: {
        greet: () => "Hi Dude!",
        books: (_: any, {count }: { count?: number } ) => {
            if (count) {
                return books.filter((_, i) => i < count)
            }
            return books
        }
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

