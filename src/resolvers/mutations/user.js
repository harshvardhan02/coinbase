const createUser = async (_, { input }, { User }) => {
  try {
    let user = await User.findOne(input);

    if (user) {
      return {
        userErrors: { message: "User with this email already exits" },
        user: null
      }
    }

    user = new User(input)

    user = await user.save();

    if (user) {
      return {
        userErrors: { message: "User Created Successfully" },
        user: user
      }
    }
  } catch (error) {
    return {
      userErrors: { message: error },
      user: null
    }
  }
}

const updateUser = async (_, { id, input }, { User }) => {
  try {
    const user = await User.findByIdAndUpdate(id, input, { new: true });
    if (!user) {
      return {
        userErrors: { message: "User with given id was not found" },
        user: null
      }
    } else {
      return {
        userErrors: {
          message: "User Updated Successfully"
        },
        user: user
      }
    }
  } catch (error) {
    return {
      userErrors: {
        message: error
      },
      user: null
    }
  }
}

const deleteUser = async (_, { id }, { User }) => {
  try {
    const deleteUser = await User.findByIdAndDelete({ _id: id });
    if (!deleteUser) {
      return {
        userErrors: { message: "The user with given id was not found" },
        user: null
      }
    } else {
      return {
        userErrors: {
          message: "User Deleted Successfully"
        },
        user: deleteUser
      }
    }
  } catch (error) {
    return {
      userErrors: {
        message: error
      },
      user: null
    }
  }
}

module.exports = {
  createUser,
  updateUser,
  deleteUser
}