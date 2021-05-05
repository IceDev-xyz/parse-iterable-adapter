const axios = require("axios");

const SimpleIterabledapter = (adapterOptions) => {
  const getUserData = (user) => {
    const email = user.get("email") || user.get("username");
    let firstName = user.get("details") || null;
    firstName = firstName?.firstName;

    return { email, firstName };
  };

  const sendMail = (email) => {
    console.log(email);
  };

  const sendPasswordResetEmail = (options) => {
    const { email, firstName } = getUserData(options.user);
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
          firstName: firstName,
          link: options.link,
        },
      },
    });
  };

  const sendVerificationEmail = (options) => {
    const { email, firstName } = getUserData(options.user);
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
          firstName: firstName,
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
