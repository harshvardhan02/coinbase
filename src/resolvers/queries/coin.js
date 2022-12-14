module.exports = async (_, { pageNumber, perPage }, { ERC20Coin }) => {
  return await ERC20Coin.find()
    .sort({ name: 1 })
    .skip(pageNumber > 0 ? ((pageNumber - 1) * perPage) : 0)
    .limit(perPage)
}