const axios = require("axios");

var SimpleIterabledapter = (adapterOptions) => {
  const getUserEmail = (user) => {
    let email = user.get("email") || user.get("username");
    return email;
  };

  var sendMail = (email) => {
    console.log(email);
  };

  var sendPasswordResetEmail = (options) => {
    const email = getUserEmail(options.user);
    axios({
      method: "POST",
      url: "https://api.iterable.com/api/email/target",
      headers: {
        "Api-Key": adapterOptions.apiKey,
        "Content-Type": "application/json; charset=utf-8",
      },
      data: {
        campaignId: adapterOptions.passwordId,
        recipientEmail: email,
        dataFields: {
          link: options.link,
        },
      },
    });
  };

  var sendVerificationEmail = (options) => {
    const email = getUserEmail(options.user);
    axios({
      method: "POST",
      url: "https://api.iterable.com/api/email/target",
      headers: {
        "Api-Key": adapterOptions.apiKey,
        "Content-Type": "application/json; charset=utf-8",
      },
      data: {
        campaignId: adapterOptions.verificationId,
        recipientEmail: email,
        dataFields: {
          link: options.link,
        },
      },
    });
  };

  return Object.freeze({
    sendMail: sendMail,
    sendPasswordResetEmail: sendPasswordResetEmail,
    sendVerificationEmail: sendVerificationEmail,
  });
};

module.exports = SimpleIterabledapter;
