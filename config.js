const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://telegra.ph/file/d241dc5f0c361739189ac.jpg"                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "https://telegra.ph/file/d241dc5f0c361739189ac.jpg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e09d5d398228fe4ed3ca0.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255626071177";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "ICAgIDIzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDksXG4gICAgICAgIDI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk2LFxuICAgICAgICA5OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk2LFxuICAgICAgICA0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgODEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk3LFxuICAgICAgICA5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgNixcbiAgICAgICAgMTY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgNzcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzksXG4gICAgICAgIDMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk1LFxuICAgICAgICAx" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-liB8I0RdvjAZFrygofQsT3BlbkFJYRvbBglOKBeJrEBIkk4p",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
