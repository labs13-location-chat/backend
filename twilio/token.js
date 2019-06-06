const twilio = require("twilio");
const AccessToken = twilio.jwt.AccessToken;
const { ChatGrant } = AccessToken;

const chatToken = (identity, config) => {
  const chatGrant = new ChatGrant({
    serviceSid: config.twilio.chatService
  });
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET,
    process.env.TWILIO_CHAT_SERVICE_SID
  );
  token.addGrant(chatGrant);
  token.identity = identity;
  return token;
};

module.exports = { chatToken };
