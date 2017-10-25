import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type User {
    id: ID!
    fullname: String!
    email: String!
    bio: String
    items:[Item]
    borroweditems:[Item]
  }
  type Item{
    id: ID!
    title: String!
    description: String
    imageurl: String
    tags: [String]
    itemowner: User!
    created: String!
    borrower: User
  }
  type Query {
    items:[Item]
    item(id: ID!): Item
    users:[User]
    user(id: ID!): User
  }
  type Mutation {
    addCardItem(
      title: String!
      description: String
      imageurl: String
      tags: [String]
      itemowner: ID!
    ): Item
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});