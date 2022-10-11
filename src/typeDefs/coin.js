const { gql } = require("apollo-server");

// this graphlQL wrapper basically lets us create a graphQL schema which will be interpreted from a javascript string
module.exports = gql`
    type ERC20Coin{
        id: ID!
        name: String!
    }
    type Query{
        coins(pageNumber: Int, perPage: Int): [ERC20Coin!]!
    }
    input CreateERC20CoinInput{
        name: String!
    }
    input UpdateERC20CoinInput{
        name: String
    }
    type DeletePayload{
        id: ID!
    }
    type UserError {
        message: String!
    }
    type CoinPayload {
        userErrors: UserError!
        coin: ERC20Coin
    }
    type Mutation{
        createCoin(input: CreateERC20CoinInput!): CoinPayload!
        updateCoin(id: ID, input: UpdateERC20CoinInput!): CoinPayload!
        deleteCoin(id: ID): CoinPayload!
    }
`;