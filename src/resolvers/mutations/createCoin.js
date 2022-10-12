module.exports = async (_, { input }, { ERC20Coin }) => {
  try {
    let ERC20CoinToFind = await ERC20Coin.findOne(input);

    if (ERC20CoinToFind) {
      return {
        userErrors: { message: "The coin with this name already exits" },
        coin: null
      }
    }

    ERC20CoinToCreate = new ERC20Coin(input)

    ERC20CoinToCreate = await ERC20CoinToCreate.save();

    if (ERC20CoinToCreate) {
      return {
        userErrors: { message: "The coin with this name created" },
        coin: ERC20CoinToCreate
      }
    }
  } catch (error) {
    return {
      userErrors: { message: error },
      coin: null
    }
  }
}