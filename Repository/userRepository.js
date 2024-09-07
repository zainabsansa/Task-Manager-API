const User = require("../Models/userModel");

const createUserRepository = async ({fullName, email, password})=>{
    const newUser = await User.create({
        fullName, email, password
      })
      return newUser
}
module.exports = {createUserRepository}