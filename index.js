const axios = require("axios");

var SimpleIterabledapter = (adapterOptions) => {
  const getUserEmail = (user) => {
    let email = user.get("email") || user.get("username");

    return email;
  };

  var sendMail = (email) => {
    console.log(email);
    // axios({
    //   method: "POST",
    //   url: "https://api.iterable.com/api/email/target",
    //   headers: {
    //     "Api-Key": "c02bcb133e3f4e0e9d11d5b28429ec6b",
    //     "Content-Type": "application/json; charset=utf-8",
    //   },
    //   data: {
    //     campaignId: 2210637,
    //     recipientEmail: "antonio@macias.com",
    //     dataFields: {
    //       test: mail.text,
    //     },
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  var sendPasswordResetEmail = (options) => {
    console.log(options);
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
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return Object.freeze({
    sendMail: sendMail,
    sendPasswordResetEmail: sendPasswordResetEmail,
    sendVerificationEmail: sendVerificationEmail,
  });
};

module.exports = SimpleIterabledapter;
