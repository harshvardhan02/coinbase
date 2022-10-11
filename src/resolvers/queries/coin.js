module.exports = async (_, { pageNumber, perPage }, { models }) => {
  return await models.ERC20Coin.find()
    .sort({ name: 1 })
    .skip(pageNumber > 0 ? ((pageNumber - 1) * perPage) : 0)
    .limit(perPage)
}