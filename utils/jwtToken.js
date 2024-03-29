// Create Token and saving in cookie
const cookieExpire = process.env.COOKIE_EXPIRE || 10;

// console.log(cookieExpire);

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};


module.exports = sendToken;

// module.exports = sendToken
