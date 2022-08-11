const nodemailer = require("nodemailer");
const config = require("../config/config");
 
async function send_mail(to, subject, text, verficationCode) {
  // to ="hayelomkiros20@gmail.com";
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    
    auth: {
      user: 'telemedcine2022@gmail.com',
      pass: '#serverEmail1'
    }
  });
   
  const msg = {
    from: config.email.from,
    to,
    replyTo: "noreply@gmail.com",
    subject,
    html: `${"verification Code:" + verficationCode}</br> <p>${text} <p>`,
  };
   
  transporter.sendMail(msg, function (error, result) {
    if (error) {
      console.log("error:", error);
    } else {
      // console.log("result:", result);
      console.log('email connected')
    }
    transporter.close();
  });
}
 

// send_mail('hayelomkiros20@gmail.com', 'about server', 'server is running well', '00000');
 

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = (to, subject, text, verficationCode) => {
  send_mail(to, subject, text, verficationCode);
};
const sendEmail1 = async (to, subject, text, verficationCode) => {
  const msg = {
    from: config.email.from,
    to,
    replyTo: "noreply@gmail.com",
    subject,
    // sender: "eatexcellence@gmail.com",
    // text: `${"verification Code:" + verficationCode}`,
    html: `${"verification Code:" + verficationCode}</br> <p>${text} <p>`,
    // text: `${"verification Code:" + generateOTP(6)}`,
  };

  // const msg = { from: config.email.smtp.auth.user, to, subject, text };

  await transport.sendMail(msg);
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, token) => {
  const subject = "Reset password";
  // replace this url with the link to the reset password page of your front-end app
  const resetPasswordUrl = `http://link-to-app/reset-password?token=${token}`;
  const text = `Dear user,
To reset your password, click on this link: ${resetPasswordUrl}
If you did not request any password resets, then ignore this email.`;
  await sendEmail(to, subject, text);
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to, token, verficationCode) => {
  const subject = "Email Verification";
  // replace this url with the link to the email verification page of your front-end app
  const verificationEmailUrl = `http://link-to-app/verify-email?token=${token}`;
  const text = `Dear user,
To verify your email, click on this link: ${verificationEmailUrl}
If you did not create an account, then ignore this email.`;
  await sendEmail(to, subject, text, verficationCode);
};

module.exports = {
  // transport,
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail,
};
