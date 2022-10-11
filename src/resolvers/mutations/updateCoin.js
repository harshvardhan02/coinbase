module.exports = async (_, { id, input }, { models }) => {
  try {
    const ERC20CoinToUpdate = await models.ERC20Coin.findByIdAndUpdate(id, {
      name: input.name
    }, { new: true });
    if (!ERC20CoinToUpdate) {
      return {
        userErrors: { message: "The coin with given id was not found" },
        coin: null
      }
    } else {
      return {
        userErrors: {
          message: "Coin Updated Successfully"
        },
        coin: ERC20CoinToUpdate
      }
    }
  } catch (error) {
    return {
      userErrors: {
        message: error
      },
      coin: null
    }
  }

}