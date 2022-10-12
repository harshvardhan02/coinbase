module.exports = async (_, { pageNumber, perPage }, { User }) => {
  return await User.find()
    .sort({ name: 1 })
    .skip(pageNumber > 0 ? ((pageNumber - 1) * perPage) : 0)
    .limit(perPage)
}