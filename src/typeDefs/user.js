const { gql } = require("apollo-server");

module.exports = gql`
    type User{
        id: ID!
        firstname: String!
        lastname: String!
        contact: String!
        username: String!
        profile_image: String!
        email: String!
        address: String!
        country: String!
        password: String!
        email_activate: Boolean!
        account_activate: Boolean!
        referal_link: String
        referal_active: Boolean
        timer: String
        login_attempt: String
        login_time: String
        createdAt: String!
        updatedAt: String!
    }
    type Query{
        users(pageNumber: Int, perPage: Int): [User!]!
    }
    input CreateUserInput{
        firstname: String!
        lastname: String!
        contact: String!
        username: String!
        profile_image: String!
        email: String!
        address: String!
        country: String!
        password: String!
        email_activate: Boolean!
        account_activate: Boolean!
        referal_link: String
        referal_active: Boolean
        timer: String
        login_attempt: String
        login_time: String
    }
    input UpdateUserInput{
        firstname: String
        lastname: String
        contact: String
        username: String
        profile_image: String
        email: String
        address: String
        country: String
        email_activate: Boolean
        account_activate: Boolean
        referal_link: String
        referal_active: Boolean
        timer: String
        login_attempt: String
        login_time: String
    }
    type DeletePayload{
        id: ID!
    }
    type UserError {
        message: String!
    }
    type UserPayload {
        userErrors: UserError!
        user: User
    }
    type Mutation{
        createUser(input: CreateUserInput!): UserPayload!
        updateUser(id: ID, input: UpdateUserInput!): UserPayload!
        deleteUser(id: ID): UserPayload!
    }
`