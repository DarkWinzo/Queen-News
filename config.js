const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


module.exports = {
  OWNER: process.env.OWNER_NUMBER || "94775200935",//Enter Owner Number
  PREFIX: process.env.PREFIX || ".", //set Prefix
  USER_NAME: process.env.USER_NAME || "ENTER YOUR USER NAME",//Enter Your UserName (contact Darkwinzo for get username and password +94767258257)
  PASSWORD: process.env.PASSWORD || "ENTER YOUR PASSWORD",//Enter Your Password
  GROUP_JID: process.env.GROUP_JID || ["ADD NEWS GROUPS JIDS"],//News Group Jid
};

