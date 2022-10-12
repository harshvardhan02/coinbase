module.exports = async (_, { id }, { ERC20Coin }) => {
  try {
    const deleteCoin = await ERC20Coin.findByIdAndDelete({ _id: id });
    if (!deleteCoin) {
      return {
        userErrors: { message: "The coin with given id was not found" },
        coin: null
      }
    } else {
      return {
        userErrors: {
          message: "Coin Deleted Successfully"
        },
        coin: deleteCoin
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