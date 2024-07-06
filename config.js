const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255626071177";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_12_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM2LFxuICAgICAgICA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDksXG4gICAgICAgIDc5LFxuICAgICAgICA3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIyLFxuICAgICAgICA2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OCxcbiAgICAgICAgODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODksXG4gICAgICAgIDExOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNixcbiAgICAgICAgNzgsXG4gICAgICAgIDQwLFxuICAgICAgICA1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICA1MixcbiAgICAgICAgMjMzLFxuICAgICAgICA3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTczLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNcnJub3BrZDFXbUtOem5KWU1EZ2VEK2NRSkdQYVR1bUlqMC9mUVkvS0gwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItVnJRYk40LVFET1N5T3NYUXJTQ0lBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBjMWRhOGNkLWI5NWEtNGM4Ni1hOGQ3LWY0MjVmZDBhNmQyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDI4LFxuICAgICAgMjA2LFxuICAgICAgOTEsXG4gICAgICA5NyxcbiAgICAgIDE2MCxcbiAgICAgIDE4NCxcbiAgICAgIDE1MSxcbiAgICAgIDMsXG4gICAgICAxNjQsXG4gICAgICA0NCxcbiAgICAgIDU0LFxuICAgICAgMTMxLFxuICAgICAgMTI5LFxuICAgICAgMjI4LFxuICAgICAgMTA2LFxuICAgICAgNzEsXG4gICAgICAxOTUsXG4gICAgICAyMzEsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICAxODAsXG4gICAgICAxNTMsXG4gICAgICAyMzksXG4gICAgICAyMjEsXG4gICAgICAyMjksXG4gICAgICAyMTEsXG4gICAgICAyNDgsXG4gICAgICAxMzUsXG4gICAgICA1OCxcbiAgICAgIDEyOSxcbiAgICAgIDEyNixcbiAgICAgIDE2NixcbiAgICAgIDExNyxcbiAgICAgIDE5NSxcbiAgICAgIDE4MixcbiAgICAgIDE0NixcbiAgICAgIDkzLFxuICAgICAgMjA2LFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR01MREhLMVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYyNjA3MTE3Nzo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNIVUlcIixcbiAgICBcImxpZFwiOiBcIjIxOTU0NjMxMzA0NDAzOTo1NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLU3cvWVFGRUlENW83UUdHQjBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZDd2FJTTY4bVdOU09VOC9DdzExUHhhZ1RHUG5FSUQ4U3ZySUFaQ3BmQTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiKzljRU43LzhwSFc2MjNjcHl0NGlGMFpxOVc4ZHozY3FpWURxR0VFRTVzeUQ0KzNwRXBzMUkxNDhoWk1zWHJLOWV2dDF3NTc2dTdPTlZRSnB6bllkQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOFVqTXR5M1ZTeGVzOWhBdXFvWmxiL3grY0VwNTRGTXBSdUw0VHhPTGc2dUJQRWVCZ01qN1pOWWFpOVIreWszRk5VZ2JmQkYrZW9mZUFESDlRUW9ZRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjI2MDcxMTc3OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNTM1NzJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
