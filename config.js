const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


module.exports = {
  PREFIX: ".", //set Prefix
  OWNER: "94775200935",//Enter Owner Number
  USER_NAME: "ENTER YOUR USER NAME",//Enter Your UserName (contact Darkwinzo for get username and password +94767258257)
  PASSWORD: "ENTER YOUR PASSWORD",//Enter Your Password
  GROUP_JID: ["ADD NEWS GROUPS JIDS"],//News Group Jid
};

