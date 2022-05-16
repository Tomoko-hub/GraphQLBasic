const {ApolloServer, gql} = require("apollo-server");

const books = [
    {
        title: "Harry Potter",
        author: "JK Roling",
    },
    {
        title: "Norwaigian Wood",
        author: "Haruki Murakami",
    },
];

const typeDefs = gql`
    type Book {
        title: String
        author: String
    } 

    type Query {
        test: [Book]
    }
`;

const resolvers = {
    Query: {
        test: () => books,
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
    console.log(`Server is ready at ${url}`);
});