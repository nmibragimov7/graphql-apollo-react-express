const {buildSchema} = require('graphql');

const schema = buildSchema(`
    type Error {
        error: String
        message: String
    }
    type Jwt {
        access: String
        expireAccess: String
        refresh: String
        expireRefresh: String
    }
    type User {
        id: ID
        username: String
        password: String
        fistName: String
        lastName: String
        middleName: String
    }
    type Post {
        id: ID
        title: String
        content: String
    }
    input Login {
        username: String!
        password: String!
    }
    input UserData {
        id: ID
        username: String!
        password: String
        firstName: String
        lastName: String
        middleName: String
    }
    input PostData {
        id: ID
        title: String!
        content: String
    }
    type Query {
        getUsers: [User]
        getUser(id: ID): User
        getPosts: [Post]
        getPost(id: ID): Post
    }
    type Mutation {
        createUser(input: UserData): User
        signIn(input: Login): Jwt
    }
`);

module.exports = schema;
