const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { hashPassword } = require("../helpers");

exports.signUp = async function (req, res) {
  try {
    const emailExist = await User.findOne({
      email: req.body.email,
    });
    if (emailExist) {
      return res.json({
        message: "Email Already Exists!",
      });
    }

    const {fullName, email, password} = createUserValidator.parse(req.body)
    const hashedPassword = hashPassword(password);
    const newUser = await createUserRepository({fullName, email, password:hashedPassword});
    
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.logIn = async (req, res) => {
  try {
    const userAccount = await User.findOne({
      email: req.body.email,
    });
    if (!userAccount) {
      return res.json({
        message: "User does not exist!",
      });
    }

    const comparedPassword = bcrypt.compareSync(
      req.body.password,
      userAccount.password
    );
    if (!comparedPassword) {
      return res.json({
        message: "Incorrect email or password",
      });
    }

    const token = jwt.sign(
    {id: userAccount._id},
    "api__very__secret__string",
      { expiresIn: "30d" }
    )

    res.status(200).json({
      status: "success",
      message: "successfully logged in",
      data: {
        user: userAccount
      },
      token: token,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
