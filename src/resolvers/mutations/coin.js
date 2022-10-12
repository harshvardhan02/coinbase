const createCoin = async (_, { input }, { ERC20Coin }) => {
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

const updateCoin = async (_, { id, input }, { ERC20Coin }) => {
  try {
    const ERC20CoinToUpdate = await ERC20Coin.findByIdAndUpdate(id, {
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

const deleteCoin = async (_, { id }, { ERC20Coin }) => {
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

module.exports = {
  createCoin,
  updateCoin,
  deleteCoin
}