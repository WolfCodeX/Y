/*
Jangan Hapus Wm
Menu Catalog No Enc
Spcial 150 Subrek
Nanti Gua Up Base Pribadi
Jangan Lupa Subrek
*/
/*
Thanks To
Allah SWT
Kedua Orang Tua
KirBotz
Ndyie Bot
*/
const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const axios = require('axios')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const yts = require( 'yt-search')
const { exec, spawn, execSync } = require('child_process')


//━━━━━━━━━━━━━━━[ Lib  ]━━━━━━━━━━━━━━━\\
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText, runtime } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { TiktokDownloader } = require('./lib/gif.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { mediafireDl } = require('./lib/mediafire.js')
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
//━━━━━━━━━━━━━━━[ DATABASE  ]━━━━━━━━━━━━━━━\\
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
var _registered = JSON.parse(fs.readFileSync('./database/user.json'))
//━━━━━━━━━━━━━━━[ POTO  ]━━━━━━━━━━━━━━━\\
tamnel = fs.readFileSync('./itsuki.jpg')
kirtod = fs.readFileSync('./akirtod.jpg')
//━━━━━━━━━━━━━━━[ SETTING  ]━━━━━━━━━━━━━━━\\
 ownerNumber = ["62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net"]
 BotNumber = '62857785356308'
 botName = "CodeXBot"
 ownerName = 'WolfCodeX'
 lolkeyy = 'codexteam'
var creator = '𝐂𝐫𝐞𝐚𝐭𝐨𝐫 𝐁𝐲 𝐂𝐨𝐝𝐞𝐗 𝐓𝐞𝐚𝐦✌︎'
img = fs.readFileSync('./stik/fake.jpeg')
//━━━━━━━━━━━━━━━[ Public Self ]━━━━━━━━━━━━━━━\\
isSelf = false
isPublic = false
autorespon = false
//━━━━━━━━━━━━━━━[ Jam ]━━━━━━━━━━━━━━━\\
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
            }
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐦🏙'
}
const textImg = (teks) => {
           return hydra.sendMessage(from, teks, text, {quoted: kir, thumbnail: fs.readFileSync('./itsuki.jpg')})
        }
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}
const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
            module.exports = hydra = async (hydra, kir) => {
	       try {
            if (!kir.hasNewMessage) return
            kir = kir.messages.all()[0]
			if (!kir.message) return
			if (kir.key && kir.key.remoteJid == 'status@broadcast') return
			if (kir.key.fromMe) return
			global.prefix
			global.blocked		
		    kir.message = (Object.keys(kir.message)[0] === 'ephemeralMessage') ? kir.message.ephemeralMessage.message : kir.message
			const content = JSON.stringify(kir.message)
			const from = kir.key.remoteJid
	        const type = Object.keys(kir.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const hour_now = moment().format('HH:mm:ss')
            const cmd = (type === 'conversation' && kir.message.conversation) ? kir.message.conversation : (type == 'imageMessage') && kir.message.imageMessage.caption ? kir.message.imageMessage.caption : (type == 'videoMessage') && kir.message.videoMessage.caption ? kir.message.videoMessage.caption : (type == 'extendedTextMessage') && kir.message.extendedTextMessage.text ? kir.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?�繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?�繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'          	
			body = (type === 'conversation' && kir.message.conversation.startsWith(prefix)) ? kir.message.conversation : (type == 'imageMessage') && kir.message[type].caption.startsWith(prefix) ? kir.message[type].caption : (type == 'videoMessage') && kir.message[type].caption.startsWith(prefix) ? kir.message[type].caption : (type == 'extendedTextMessage') && kir.message[type].text.startsWith(prefix) ? kir.message[type].text : (type == 'listResponseMessage') && kir.message[type].singleSelectReply.selectedRowId ? kir.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && kir.message[type].selectedButtonId ? kir.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(kir.message[type].fileSha256.toString('base64')) !== null && getCmd(kir.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(kir.message[type].fileSha256.toString('base64')) : ""
		    budy = (type === 'conversation') ? kir.message.conversation : (type === 'extendedTextMessage') ? kir.message.extendedTextMessage.text : ''
	     	selectedButton = (type == 'buttonsResponseMessage') ? kir.message.buttonsResponseMessage.selectedButtonId : ''
            responseButton = (type == 'listResponseMessage') ? kir.message.listResponseMessage.title : ''
		    button = (type == 'buttonsResponseMessage') ? kir.message.buttonsResponseMessage.selectedDisplayText : ''
	    	isImage = (type === 'imageMessage')
	    	const isVideo = (type === 'videoMessage')
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix) 
	       	const q = args.join(' ')
		    const botNumber = hydra.user.jid
		    const botNumberss = hydra.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    let sender = isGroup ? kir.participant : kir.key.remoteJid
		    const isOwner = ownerNumber.includes(sender)
	     	const totalchat = await hydra.chats.all()
		    const groupMetadata = isGroup ? await hydra.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
		    const isWelkom = isGroup ? welkom.includes(from) : false
		    const isAntiLink = isGroup ? antilink.includes(from) : false
            const conts = kir.key.fromMe ? hydra.user.jid : hydra.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = kir.key.fromMe ? hydra.user.name : conts.notify || conts.vname || conts.name || '-'
            
            const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "62857785356307-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 "h": `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 'jpegThumbnail': fs.readFileSync('./itsuki.jpg')
                        }
                       }
	                  } 
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\            
		mess = {
			wait: 'Otewe',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

//
if (!isGroup && !isCmd && !command && !kir.key.fromMe && !autorespon) {
numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${sender}`, {method: 'get'})
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
                     sami = simi.success
                        hydra.sendMessage(from, `_${sami}_`, text, {thumbnail: tamnel, sendEphemeral: true, quoted:kir, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
//

const hideTag = async function(from, text){
	       let anu = await hydra.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       hydra.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./akirtod.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  

             

        const listmsg = (from, title, desc, list) => { 
            let po = hydra.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©KirBotz*_","listType": "SINGLE_SELECT","sections": list}}, {})
            return hydra.relayWAMessage(po, {waitForAck: true})
        }
        
        const reply = (teks) => {
            hydra.sendMessage(from, teks, text, {quoted:fgi})
        }

        const replly = (teks) => {
			hydra.sendMessage(from, teks, text, { thumbnail: tamnel, sendEphemeral: true, quoted: fgi, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${date}`,body:"SELECT",previewType:"PHOTO",thumbnail:tamnel,sourceUrl:`https://wa.me/p/62857785356307`}}})
		}
        
        const sendMess = (hehe, teks) => {
            hydra.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hydra.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hydra.sendMessage(from, teks.trim(), extendedText, { quoted: kir, contextInfo: { "mentionedJid": memberr } })
        }            
            
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
let kma = gam1
let mhan = await hydra.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
hydra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await hydra.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
hydra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButloc = (from, title, text, desc, button, sen, men, file) => {
return hydra.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: kir, contextInfo: {"mentionedJid": men ? men : []}})
}
// PEMBATASAN		            
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/user.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        hydra.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: flexx
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        hydra.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
const isRegistered = checkRegisteredUser(sender)
const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
hydra.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `𝘏𝘢𝘭𝘭𝘰 𝘒𝘢𝘬 ${pushname} 👋\n𝘒𝘢𝘮𝘶 𝘉𝘦𝘭𝘶𝘮 𝘛𝘦𝘳𝘥𝘢𝘧𝘵𝘢𝘳 𝘋𝘪 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘉𝘰𝘵\n𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘋𝘢𝘧𝘵𝘢𝘳 𝘋𝘦𝘯𝘨𝘢𝘯 𝘊𝘢𝘳𝘢 𝘒𝘭𝘪𝘬 𝘛𝘰𝘮𝘣𝘰𝘭 𝘋𝘪 𝘉𝘢𝘸𝘢𝘩 𝘐𝘯𝘪!`
const daftar2 = '𝘜𝘯𝘵𝘶𝘬 𝘗𝘦𝘯𝘨𝘨𝘶𝘯𝘢 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘔𝘰𝘥\𝘯𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘒𝘦𝘵𝘪𝘬 #verify'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `𝗩𝗘𝗥𝗜𝗙𝗬 ✅`,},type: 1,}]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//━━━━━━━━━━━━━━━[ Fake Fakean ]━━━━━━━━━━━━━━━\\
        const fakestatus = (teks) => {
            hydra.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        hydra.updatePresence(from, Presence.composing)
        hydra.chatRead(from, "read")
        const fakegroup = (teks) => {
            hydra.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 169,
                            status: 1,
                            surface : 1,
                            message: `Jangan Spam:(`, 
                            orderTitle: `Donate Donk:(`,
                            thumbnail: tamnel, //thumb
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }        

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━\\

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hydra.sendMessage(to, media, MessageType.sticker,{quoted:kir})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hydra.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }              
//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━\\

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        if (!kir.key.fromMe && isSelf === true) return
///Antilink
if (isGroup && !kir.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return replly('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
replly(`「 *LINK GRUP TERDETEKSI* 」\n\n_Kamu Akan Di Kick Dari Group!!_`)
setTimeout(() => {
hydra.groupRemove(from, [sender])
}, 2000);
}
}
//━━━━━━━━━━━━━━━[ WELCOME TO MENU ]━━━━━━━━━━━━━━━\\
switch (command) {             
//
case 'ssweb':
case 'ss':
                if (args.length < 1) return replly('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					hydra.sendMessage(from, buff, image, {quoted: fgi, caption : teks})
					break
//
case 'daftar':
case 'verify':
if (isRegistered) return reply('𝘒𝘢𝘮𝘶 𝘚𝘶𝘥𝘢𝘩 𝘛𝘦𝘳𝘥𝘢𝘧𝘵𝘢𝘳 𝘋𝘪 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘉𝘰𝘵 !')
namaUser = args.join(" ")
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
            fs.writeFileSync('./database/user.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
const jancok =`「  𝖵𝖾𝗋𝗂𝖿𝗂𝗄𝖺𝗌𝗂 𝖡𝖾𝗋𝗁𝖺𝗌𝗂𝗅  」 
• 𝑵𝒂𝒎𝒂 : *${pushname}*
•  𝑵𝒐𝒎𝒆𝒓 : *@${sender.split('@')[0]}*
• 𝑺𝒆𝒓𝒊 : *${serialUser}*
• 𝑷𝒆𝒏𝒈𝒈𝒖𝒏𝒂: *${_registered.length}*
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦
𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝖪𝖾𝗍𝗂𝗄 #𝗆𝖾𝗇𝗎 𝖴𝗇𝗍𝗎𝗄 𝖬𝖾𝗅𝖺𝗇𝗃𝗎𝗍𝗄𝖺𝗇 !

𝖩𝖺𝗇𝗀𝖺𝗇 𝖫𝗎𝗉𝖺 𝖩𝗈𝗂𝗇 𝖦𝗋𝗎𝖻 : https://chat.whatsapp.com/JycwVlfX2OvG3xQbKMHQli
𝖴𝗇𝗍𝗎𝗄 𝖬𝖾𝗅𝗂𝗁𝖺𝗍 𝖴𝗉𝖽𝖺𝗍𝖾 𝖳𝖾𝗋𝖻𝖺𝗋𝗎 𝖣𝖺𝗋𝗂 𝖢𝗈𝖽𝖾𝖷𝖡𝗈𝗍 
𝖠𝗋𝗂𝗀𝖺𝗍𝗈𝗎`
jancok2 =`${creator}`
but = [
{buttonId:`${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1},
{buttonId:`${prefix}info`, buttonText: {displayText: 'INFO'}, type: 1}
]
sendButMessage(from, jancok, jancok2, but)
hh = fs.readFileSync('./vn/bndr.mp3')
await hydra.sendMessage(from, hh, MessageType.audio, {qouted: mek, mimetype: 'audio/mp4', ptt:true})  
break
case 'menu':
case 'help':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
thu = await hydra.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `𝘏𝘢𝘭𝘭𝘰 𝘒𝘢𝘬 ${pushname} 👋
𝘚𝘢𝘺𝘢 𝘊𝘰𝘥𝘦𝘟𝘉𝘰𝘵 𝘠𝘢𝘯𝘨 𝘚𝘪𝘢𝘱 𝘔𝘦𝘮𝘣𝘢𝘯𝘵𝘶 𝘈𝘯𝘥a
𝘋𝘢𝘭𝘢𝘮 𝘔𝘦𝘮𝘣𝘶𝘢𝘵 𝘚𝘵𝘪𝘤𝘬𝘦𝘳 , 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥 , 𝘋𝘭𝘭 
𝘑𝘪𝘬𝘢 𝘈𝘯𝘥𝘢 𝘔𝘦𝘮𝘣𝘶𝘵𝘶𝘩𝘬𝘢𝘯 𝘚𝘢𝘺𝘢 𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘗𝘪𝘭𝘪𝘩 𝘉𝘶𝘵𝘵𝘰𝘯 𝘋𝘪 𝘉𝘢𝘸𝘢𝘩 𝘐𝘯𝘪
𝘛𝘳𝘪𝘮𝘢𝘬𝘢𝘴𝘪𝘩👋`
hydra.sendMessage(from, { contentText: `${menuh}`, footerText: `𝘑𝘪𝘬𝘢 𝘒𝘢𝘭𝘪𝘢𝘯 𝘔𝘦𝘯𝘨𝘨𝘶𝘯𝘢𝘬𝘢𝘯 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘔𝘰𝘥
𝘒𝘢𝘭𝘪𝘢𝘯 𝘉𝘪𝘴𝘢 𝘔𝘦𝘯𝘨𝘦𝘵𝘪𝘬𝘢𝘯 #𝘢𝘭𝘭𝘮𝘦𝘯𝘶 𝘶𝘯𝘵𝘶𝘬 𝘮𝘦𝘭𝘪𝘩𝘢𝘵 𝘧𝘪𝘵𝘶𝘳
̵`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📒MENU' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '👤OWNER' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirtod, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'allmenu':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
	menunyai = `Hai Kak *${pushname}* ${ucapanWaktu}
	
❏ 「 \`\`\`Creator Info\`\`\` 」

• Nama Owner : *${ownerName}*
• Nomor Owner : *62857785356307*
• Api : *wa.me/62857785356307*
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`About Bot\`\`\` 」

• Nama Bot : *${botName}*
• Runtime : ${runtime(process.uptime())}
• Total Chat : *${totalchat.length}*
• Link Group : https://chat.whatsapp.com/JycwVlfX2OvG3xQbKMHQli
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`Waktu\`\`\` 」

• WIB :  ${wib} 
• WITA : ${wita}
• WIT : ${wit}
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦
𝘕𝘰𝘵𝘦 : 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘉𝘰𝘵 𝘚𝘦𝘣𝘢𝘪𝘬 𝘔𝘶𝘯𝘨𝘬𝘪𝘯, 𝘑𝘢𝘯𝘨𝘢𝘯 𝘋𝘪 𝘚𝘱𝘢𝘮
𝘒𝘢𝘳𝘯𝘢 𝘈𝘬𝘢𝘯 𝘔𝘦𝘯𝘨𝘢𝘬𝘪𝘣𝘢𝘵𝘬𝘢𝘯 𝘓𝘢𝘨 𝘗𝘢𝘥𝘢 𝘚𝘺𝘴𝘵𝘦𝘮 𝘉𝘰𝘵
𝘒𝘢𝘴𝘪𝘩 𝘞𝘢𝘬𝘵𝘶 3 𝘋𝘦𝘵𝘪𝘬 𝘜𝘯𝘵𝘶𝘬 𝘑𝘦𝘥𝘢 𝘉𝘰𝘵 𝘚𝘶𝘱𝘢𝘺𝘢 𝘛𝘪𝘥𝘢𝘬 𝘛𝘦𝘳𝘫𝘢𝘥𝘪𝘓𝘢𝘨!  

❏ 「 \`\`\`MENU OWNER\`\`\` 」
• ${prefix}owner
• ${prefix}mute 
• ${prefix}unmute
• ${prefix}spam [ _teks|jumlah_ ]
• ${prefix}spamsw [ _teks|jumlah_ ] 
• ${prefix}upswteks [ _teks_ ] 
• ${prefix}upswlokasi [ _teks_ ]
• ${prefix}upswaudio [ _reply audio_ ] 
• ${prefix}upswvoice [ _reply audio_ ]
• ${prefix}upswsticker [ _reply sticker_ ]
• ${prefix}upswimage [ _reply image with caption_ ]
• ${prefix}upswgif  [ _reply gif with caption_ ]
• ${prefix}upswvideo [ _reply video with caption_ ]
• ${prefix}bc [  _teks/reply gif/image/video with caption_ ]
• ${prefix}public
• ${prefix}self
• ${prefix}join
• ${prefix}term
• ${prefix}shutdown
• ${prefix}leaveall
• ${prefix}setprefix
• ${prefix}cekapikey
• ${prefix}setcmd
• ${prefix}delcmd
• ${prefix}listcmd
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`GROUP MENU\`\`\` 」

• ${prefix}welcome
• ${prefix}antilink
• ${prefix}tagall
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`MAKER MENU\`\`\` 」

• ${prefix}sticker
• ${prefix}toimg
• ${prefix}tourl
• ${prefix}telestick
• ${prefix}tomp3
• ${prefix}tovideo
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`TAG MENU\`\`\` 」

• ${prefix}kontag
• ${prefix}sticktag
• ${prefix}totag
• ${prefix}hidetag
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`DOWNLOAD MENU\`\`\` 」

• ${prefix}play
• ${prefix}ytmp3
• ${prefix}ytmp4
• ${prefix}tiktok
• ${prefix}nhdl [ _masukan code_ ]
• ${prefix}igdl [ _url_ ]
• ${prefix}igstory [ _url_ ]
• ${prefix}tiktokdl [ _url_ ]
• ${prefix}mediafire [ _url_ ]
• ${prefix}facebook [ _url_ ]
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`SOUND MENU\`\`\` 」

• ${prefix}sound
• ${prefix}sound 1 s/d 60
• ${prefix}arrahman
• ${prefix}sholawat
• ${prefix}araara
• ${prefix}baka
• ${prefix}susu
• ${prefix}home
• ${prefix}ngaji
• ${prefix}ngaji2
• ${prefix}tilawah
• ${prefix}yasin
• ${prefix}ayatkursi2
• ${prefix}playdate
• ${prefix}iri
• ${prefix}pale
• ${prefix}beautiful
• ${prefix}menyukaiku
• ${prefix}hallo
• ${prefix}magic
• ${prefix}loosinggame
• ${prefix}loosinginterest
• ${prefix}yourskin
• ${prefix}cutmeoff
• ${prefix}up
• ${prefix}wanna
• ${prefix}sowell
• ${prefix}lucas
• ${prefix}allnight
• ${prefix}aeshtetic
• ${prefix}aeshtetic2
• ${prefix}aeshtetic3
• ${prefix}aeshtetic4
• ${prefix}sad
• ${prefix}sad2
• ${prefix}sad3
• ${prefix}sad4
• ${prefix}gettinggold
• ${prefix}beb
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`WIBU MENU\`\`\` 」

• ${prefix}cry
• ${prefix}kill
• ${prefix}hug
• ${prefix}pat
• ${prefix}lick
• ${prefix}kiss
• ${prefix}bite
• ${prefix}yeet
• ${prefix}neko
• ${prefix}bully
• ${prefix}bonk
• ${prefix}wink
• ${prefix}poke
• ${prefix}nom
• ${prefix}slap
• ${prefix}waifu
• ${prefix}smile
• ${prefix}wave
• ${prefix}awoo
• ${prefix}blush
• ${prefix}smug
• ${prefix}glomp
• ${prefix}happy
• ${prefix}dance
• ${prefix}cringe
• ${prefix}cuddle
• ${prefix}highfive
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}handhold
• ${prefix}waifu
• ${prefix}loli
• ${prefix}husbu
• ${prefix}milf
• ${prefix}cosplay
• ${prefix}wallml
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`RANDOM MENU\`\`\` 」

• ${prefix}faktaunik
• ${prefix}katabijak
• ${prefix}pantun
• ${prefix}bucin
• ${prefix}randomnama
• ${prefix}asmaulhusna
• ${prefix}jadwalsholat
• ${prefix}quotes
• ${prefix}cerpen
• ${prefix}xnxxsearch
• ${prefix}xnxx
• ${prefix}nulis
• ${prefix}nuliskanan
• ${prefix}nuliskiri
• ${prefix}foliokanan
• ${prefix}foliokiri
• ${prefix}ssweb
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`ASUPAN MENU\`\`\` 」
• ${prefix}cogan
• ${prefix}cecan
• ${prefix}cecanvietnam
• ${prefix}cecanrandom
• ${prefix}hijaber
• ${prefix}santuy
• ${prefix}ukhti
• ${prefix}bocil
• ${prefix}ghea
• ${prefix}rika
• ${prefix}cecanmalaysia
• ${prefix}cecankorea
• ${prefix}cecanthailand
• ${prefix}cecanjapan
• ${prefix}cecanindonesia
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

🎉𝘚𝘱𝘦𝘴𝘪𝘢𝘭 𝘛𝘩𝘹 𝘛𝘰
- 𝘔𝘩𝘢𝘯𝘬𝘉𝘢𝘳𝘉𝘢𝘳 ( 𝘉𝘢𝘴𝘦 𝘖𝘳𝘪 )
- 𝘒𝘪𝘳𝘉𝘰𝘵𝘻 ( 𝘚𝘊 𝘖𝘙𝘐 )
- 𝘞𝘰𝘭𝘧𝘊𝘰𝘥𝘦𝘟 ( 𝘒𝘢𝘯𝘨 𝘒𝘰𝘱𝘢𝘴 )
- 𝘍𝘰𝘹𝘺𝘊𝘰𝘥𝘦𝘟 ( 𝘔𝘺 𝘛𝘦𝘢𝘮 )
- 𝘊𝘰𝘥𝘦𝘟 𝘛𝘦𝘢𝘮
- 𝘈𝘭𝘭 𝘊𝘳𝘦𝘢𝘵𝘰𝘳 𝘉𝘰𝘵
	`
var imgs = await hydra.prepareMessage('0@c.us', tamnel, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await hydra.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "𝘔𝘦𝘯𝘶 𝘊𝘰𝘥𝘦𝘟𝘉𝘰𝘵",
                        "title": `𝘔𝘦𝘯𝘶 𝘊𝘰𝘥𝘦𝘟𝘉𝘰𝘵`,
                        "description": menunyai,
                        "footerText": `𝘐𝘮 𝘞𝘰𝘭𝘧𝘊𝘰𝘥𝘦𝘟`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "𝘑𝘢𝘯𝘨𝘢𝘯 𝘓𝘶𝘱𝘢 𝘋𝘰𝘯𝘢𝘴𝘪 𝘒𝘢𝘬!",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "𝘏𝘪𝘪 𝘒𝘢𝘬!",
                        "retailerId": `𝘐𝘮 𝘞𝘰𝘭𝘧𝘊𝘰𝘥𝘦𝘟`,
                        "url": "OWNER : https://wa.me/62857785356307\nGROUP : https://bit.ly/3Ene2TO"
                    },
                    "businessOwnerJid": "62857785356307@s.whatsapp.net",
                }
            }, { quoted: fgi, mimetype: 'image/jpeg' })
            hydra.relayWAMessage(ctlg)
            break
case 'rules':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
thu = await hydra.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*RULES AND FAQ*

1. Jangan spam bot
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot
Sanksi: *PERMANENT BLOCK*`
hydra.sendMessage(from, { contentText: `${menuh}`, footerText: `
𝘑𝘪𝘬𝘢 𝘈𝘯𝘥𝘢 𝘔𝘦𝘭𝘢𝘯𝘨𝘨𝘢𝘳 𝘚𝘢𝘭𝘢𝘩 𝘚𝘢𝘵𝘶 𝘙𝘶𝘭𝘦𝘴 𝘛𝘦𝘳𝘴𝘦𝘣𝘶𝘵
𝘔𝘢𝘬𝘢 𝘖𝘸𝘯𝘦𝘳 𝘛𝘪𝘥𝘢𝘬 𝘈𝘬𝘢𝘯 𝘚𝘦𝘨𝘢𝘯 𝘚𝘦𝘨𝘢𝘯 𝘶𝘯𝘵𝘶𝘬 𝘔𝘦𝘯𝘨𝘣𝘢𝘯 𝘮𝘶
𝘢𝘵𝘢𝘶 𝘮𝘦𝘯𝘨𝘣𝘭𝘰𝘤𝘬 𝘬𝘢𝘮𝘶!!
̵`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '📒Menu' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'cogan':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
replly(`⏳Cotto A Minute...`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=codexteam`)
wmn = `CodeXBot`
trans = `Jangan Lupa Donasi!`
but = [
          { buttonId: `${prefix}cogan`, buttonText: { displayText: '🌹 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecan':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
replly(`⏳Cotto A Minute...`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=codexteam`)
wmn = `CodeXBot`
trans = `Jangan Lupa Donasi!`
but = [
          { buttonId: `${prefix}cecan`, buttonText: { displayText: '🌹 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecanvietnam':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
huft = await fetchJson(`https://Alphabot-api.herokuapp.com/api/cewe/vietnam?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hydra.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Lupa Subscribe YT : KirBotz×'})
break
case 'cecanrandom':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/cecan?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, image, {quoted: fgi, caption: ''})
break
case 'hijaber':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/hijaber?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'santuy':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/santuy?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, video, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'ukhti':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/ukty?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, video, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'bocil':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/bocil?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, video, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'ghea':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/ghea?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, video, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'rika':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://Alphabot-api.herokuapp.com/api/asupan/rikagusriani?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hydra.sendMessage(from, buffer, video, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanmalaysia':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
huft = await fetchJson(`https://Alphabot-api.herokuapp.com/api/cewe/malaysia?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hydra.sendMessage(from, goo, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecankorea':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
huft = await fetchJson(`https://Alphabot-api.herokuapp.com/api/cewe/korea?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hydra.sendMessage(from, goo, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanindonesia':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
huft = await fetchJson(`https://Alphabot-api.herokuapp.com/api/cewe/indonesia?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hydra.sendMessage(from, goo, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanjapan':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
huft = await fetchJson(`https://Alphabot-api.herokuapp.com/api/cewe/japan?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hydra.sendMessage(from, goo, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanthailand':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
huft = await fetchJson(`https://Alphabot-api.herokuapp.com/api/cewe/thailand?apikey=Alphabot`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hydra.sendMessage(from, goo, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'xnxxsearch':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
    if (args.length == 0) return replly(`Example: ${prefix + command} Japanese`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=KemolX7&query=${query}`)
    get_result = get_result.result
    ini_txt = ""
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Views : ${x.views}\n`
        ini_txt += `Duration : ${x.duration}\n`
        ini_txt += `Uploader : ${x.uploader}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
    }
    replly(ini_txt)
    break
case 'quotes':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=codexteam`)
    quotes = quotes.result
    author = quotes.by
    quotes = quotes.quote
    replly(`_${quotes}_\n\n*â€• ${author}*`)
    break
case 'quotesanime':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=codexteam`)
    quotes = quotes.result
    quote = quotes.quote
    char = quotes.character
    episode = quotes.episode
    replly(`_${quote}_\n\n*• ${char}*\n*${episode}*`)
    break
case 'xnxx':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
    if (args.length == 0) return replly(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=KemolX7&url=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `View : ${get_result.view}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Like : ${get_result.like}\n`
    ini_txt += `Dislike : ${get_result.dislike}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
    ini_txt += `Description : ${get_result.description}\n`
    ini_txt += "Link : \n"
    ini_link = get_result.link
    for (var x of ini_link) {
        ini_txt += `${x.type} - ${x.link}\n\n`
    }
    thumbnail = await getBuffer(get_result.thumbnail)
    await hydra.sendMessage(from, thumbnail, image, { quoted: kir , caption: ini_txt })
    break
         case 'cry':
        case 'kill':
        case 'hug':
        case 'pat':
        case 'lick':
        case 'kiss':
        case 'bite':
        case 'yeet':
        case 'neko':
        case 'bully':
        case 'bonk':
        case 'wink':
        case 'poke':
        case 'nom':
        case 'slap':
        case 'waifu':
        case 'smile':
        case 'wave':
        case 'awoo':
        case 'blush':
        case 'smug':
        case 'glomp':
        case 'happy':
        case 'dance':
        case 'cringe':
        case 'cuddle':
        case 'highfive':
        case 'shinobu':
        case 'megumin':
        case 'handhold':
        if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            reply(mess.wait)
            anu = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
            buffer = await getBuffer(anu.url)
            hydra.sendMessage(from, buffer, image, {quoted: kir, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
            break
case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `�️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'👤OWNER'},type:1}]
              imageMsg = ( await hydra.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Hii Kak!!', imageMessage: imageMsg,
              contentText:`WolfCodeX`,buttons,headerType:4}
              prep = await hydra.prepareMessageFromContent(from,{buttonsMessage},{quoted: kir})
              hydra.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'kontag':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (!kir.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hydra.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
    if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if ((isMedia && !kir.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: kir
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
    if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if ((isMedia && !kir.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: kir
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !kir.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: kir
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !kir.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: kir
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !kir.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
            file = await hydra.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hydra.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: kir
            }
            ini_buffer = fs.readFileSync(file)
            hydra.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
    if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = kir.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            hydra.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
    if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
    if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = kir.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hydra.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hydra.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
case 'nulis':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
               if (args.length < 1) return replly('Yang mau di tulis apaan?')
               teks = args.join(' ')
               replly(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               hydra.sendMessage(from, buff, image, {quoted: fgi, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
case 'nuliskiri':{
	if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    hydra.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'nuliskanan':{
	if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    hydra.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'foliokiri':{
	if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    hydra.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'foliokanan':{
	if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    hydra.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
//━━━━━━━━━━━━━━━[ Owner Menu ]━━━━━━━━━━━━━━━\\  
 case 'delchat':
 if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                   if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                hydra.modifyChat(from, ChatModification.delete)
                break
                case 'mute':
                if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
			    if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./storage/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
                case 'spam':
                if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
				if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					hydra.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
				if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
		if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                hydra.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
                if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                hydra.groupMakeAdmin(from, members_id)
                break
                case 'spamsw':
                if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					hydra.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
                    case 'upswteks':
                    if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                    if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    hydra.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
                    if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    hydra.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NameBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                       if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)                 
                    if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !kir.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await hydra.downloadMediaMessage(encmedia)
						hydra.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                    case 'upswaudio':
                    if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                    if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !kir.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await hydra.downloadMediaMessage(encmedia)
						hydra.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !kir.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await hydra.downloadMediaMessage(encmedia)
						hydra.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
						case 'upswvideo':
if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await hydra.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    hydra.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                        case 'upswgif':
if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hydra.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    hydra.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !kir.key.fromMe) return reply(mess.only.owner)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hydra.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    hydra.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: ftrol, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break 
case 'lolkey':
          case 'cekapikey':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://rama-ganz.herokuapp.com`
              hydra.sendMessage(from, teks, text, {quoted: kir})
              break   
case 'addcmd': 
           case 'setcmd':
           if (!isOwner) return  reply(mess.only.owner)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = kir.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
       if (!isOwner) return  reply(mess.only.owner)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = kir.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
             _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
       if (!isOwner) return  reply(mess.only.owner)
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
case 'ping':
          case 'speed':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏𝙄𝙉𝙂* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
          case 'exif':
              if (!isOwner) return  reply(mess.only.owner)
              if (!q) return reply(mess.wrongFormat)
              if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
              exif.create(arg.split('|')[0], arg.split('|')[1])
              reply('sukses')
              break	
          case 'join': 
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (!q) return reply('Linknya?')
              if (!isOwner) return reply(mess.only.owner)
              if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
              link = args[0].replace('https://chat.whatsapp.com/','')
              fak = hydra.query({ json: ['action', 'invite', link],
              expect200: true })
              reply('Berhasil Masuk Grup')
              break
          case 'term':
              if (!isOwner) return
              if (!q) return
              exec(q, (err, stdout) => {
              if (err) return reply(`${err}`)
              if (stdout) {
              reply(stdout)
}
})
              break
case 'bc':
case 'bcbut':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
if (!isOwner && !kir.key.fromMe) return reply(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Teksnya?')
anu = await hydra.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await hydra.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break
case 'bc2':
             if(!isOwner && !kir.key.fromMe) return reply('Anda Bukan Owner')
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return reply('teks?')
             anu = await hydra.chats.all()
             if (isMedia && !kir.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kir
             bc = await hydra.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	hydra.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             hydra.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*Broadcast Botz*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break 
             if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
          case 'shutdown':
              if (!isOwner) return 
              reply(`CodeXBot Off Dulu Ya...`)
              await sleep(3000)
              process.exit()
              break
          case 'leaveall':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (!isOwner) return  
              let totalgroup = hydra.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
              for (let id of totalgroup) {
              sendMess(id, 'Byee', null)
              await sleep(3000)
              hydra.groupLeave(id)
}
              break
          case 'culik':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (!isOwner) return
              if (args.length < 1) return reply('Masukin id grupnya tolol')
              let pantek = []
              for (let i of groupMembers) {
              pantek.push(i.jid)
}
              hydra.groupAdd(args[0], pantek)
              break                                        
case 'runtime':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            run = process.uptime() 
            teks = `${kyun(run)}`
            replly(teks)
            break  
case 'owner':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
let inilist = []
for (let i of ownerNumber) {
const vname = hydra.contacts[i] != undefined ? hydra.contacts[i].vname || hydra.contacts[i].notify : undefined
inilist.push({
"displayName": 'WolfCodeX',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${hydra.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await hydra.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: fgi })
button = [
  {buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1}
]
 buttons = {
    contentText: 'Nih Kak Owner ku >_<',
    footerText: `*𝘐𝘮 𝘞𝘰𝘭𝘧𝘊𝘰𝘥𝘦𝘟*`,
    buttons: button,
    headerType: 1
}
await hydra.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: fgi})
break
//Sound Menu
case 'sad':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
const sad1 = fs.readFileSync('./mp3/sad.mp3')
hydra .sendMessage(from, sad1, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
const sad2 = fs.readFileSync('./mp3/sad2.mp3')
hydra .sendMessage(from, sad2, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
const sad3 = fs.readFileSync('./mp3/sad3.mp3')
hydra .sendMessage(from, sad3, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
const sad4 = fs.readFileSync('./mp3/sad4.mp3')
hydra .sendMessage(from, sad4, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
const tetik = fs.readFileSync('./mp3/aeshtetic.mp3')
hydra .sendMessage(from, tetik, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
const tetik2 = fs.readFileSync('./mp3/aeshtetic2.mp3')
hydra .sendMessage(from, tetik3, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
const tetik3 = fs.readFileSync('./mp3/aeshtetic3.mp3')
hydra .sendMessage(from, tetik3, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
const tetik4 = fs.readFileSync('./mp3/aeshtetic4.mp3')
hydra .sendMessage(from, tetik4, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
const allnight = fs.readFileSync('./mp3/allnight.mp3')
hydra .sendMessage(from, allnight, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'baka':
const baka = fs.readFileSync('./mp3/baka.mp3')
hydra .sendMessage(from, baka, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'lucas':
const lucas = fs.readFileSync('./mp3/lucas.mp3')
hydra .sendMessage(from, lucas, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'araara':
const prii = fs.readFileSync('./mp3/AraAra.mp3')
hydra.sendMessage(from, prii, MessageType.audio, {quoted:kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sowell':
const well = fs.readFileSync('./mp3/sowell.mp3')
hydra .sendMessage(from, well, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('./mp3/wanna.mp3')
hydra .sendMessage(from, wanna, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('./mp3/up.mp3')
hydra .sendMessage(from, ups, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('./mp3/yourskin.mp3')
hydra .sendMessage(from, skin, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('./mp3/cutmeoff.mp3')
hydra .sendMessage(from, moff, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('./mp3/beautiful.mp3')
hydra .sendMessage(from, ful, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('./mp3/loosinggame.mp3')
hydra .sendMessage(from, gam, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('./mp3/loosinginterest.mp3')
hydra .sendMessage(from, rest, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('./mp3/playdate.mp3')
hydra .sendMessage(from, date, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'yasin':
yasin = fs.readFileSync('mp3/yasin.mp3')
hydra.sendMessage(from, yasin, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'arrahman':
arrahman = fs.readFileSync('mp3/arrahman.mp3')
hydra.sendMessage(from, arrahman, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('./mp3/ayatkursi2.mp3')
hydra.sendMessage(from, kursi, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('./mp3/tilawah.mp3')
hydra.sendMessage(from, tilawah, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawat':
const nabi = fs.readFileSync('./mp3/sholawatnabi.mp3')
hydra.sendMessage(from, nabi, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('./mp3/ngaji.mp3')
hydra.sendMessage(from, ngaji1, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('./mp3/ngaji2.mp3')
hydra.sendMessage(from, ngaji2, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
hydra.sendMessage(from, irimp3, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./mp3/pale.mp3')
hydra.sendMessage(from, pa, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'hallo':
const hallo = fs.readFileSync('./mp3/hallo.mp3')
hydra.sendMessage(from, hallo, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'magic':
const magic = fs.readFileSync('mp3/magic.mp3')
hydra.sendMessage(from, magic, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'menyukaiku':
const menyukaiku = fs.readFileSync('mp3/menyukaiku.mp3')
hydra.sendMessage(from, menyukaiku, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./mp3/sound.mp3')
hydra.sendMessage(from, soun, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
hydra.sendMessage(from, satu, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
hydra.sendMessage(from, dua, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
hydra.sendMessage(from, tiga, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
hydra.sendMessage(from, empat, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
hydra.sendMessage(from, lima, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
hydra.sendMessage(from, enam, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
hydra.sendMessage(from, tujuh, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
delapan = fs.readFileSync('./mp3/sound8.mp3');
hydra.sendMessage(from, delapan, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./mp3/sound9.mp3');
hydra.sendMessage(from, sembilan, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./mp3/sound10.mp3');
hydra.sendMessage(from, sepuluh, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./mp3/sound11.mp3');
hydra.sendMessage(from, sebelas, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./mp3/sound12.mp3');
hydra.sendMessage(from, duabelas, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./mp3/sound13.mp3');
hydra.sendMessage(from, tigabelas, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./mp3/sound14.mp3');
hydra.sendMessage(from, empatbelas, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./mp3/sound15.mp3');
hydra.sendMessage(from, limabelas, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./mp3/sound16.mp3');
hydra.sendMessage(from, enambelas, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./mp3/sound17.mp3');
hydra.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound118':
delapanbelas = fs.readFileSync('./mp3/sound18.mp3');
hydra.sendMessage(from, delapanbelas, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./mp3/sound19.mp3');
hydra.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./mp3/sound20.mp3');
hydra.sendMessage(from, duapuluh, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./mp3/sound21.mp3');
hydra.sendMessage(from, duasatu, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./mp3/sound22.mp3');
hydra.sendMessage(from, duadua, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./mp3/sound23.mp3');
hydra.sendMessage(from, duatiga, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./mp3/sound24.mp3');
hydra.sendMessage(from, duaempat, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./mp3/sound25.mp3');
hydra.sendMessage(from, dualima, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./mp3/sound26.mp3');
hydra.sendMessage(from, duaenam, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./mp3/sound27.mp3');
hydra.sendMessage(from, duatujuh, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./mp3/sound28.mp3');
hydra.sendMessage(from, duadelapan, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./mp3/sound29.mp3');
hydra.sendMessage(from, duasembilan, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./mp3/sound30.mp3');
hydra.sendMessage(from, tigapuluh, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./mp3/sound31.mp3');
hydra.sendMessage(from, tigasatu, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./mp3/sound32.mp3');
hydra.sendMessage(from, tigadua, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./mp3/sound33.mp3');
hydra.sendMessage(from, tigatiga, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./mp3/sound34.mp3');
hydra.sendMessage(from, tigaempat, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
hydra.sendMessage(from, tigalima, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
hydra.sendMessage(from, tigalima, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./mp3/sound36.mp3');
hydra.sendMessage(from, tigaenam, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./mp3/sound37.mp3');
hydra.sendMessage(from, tigatujuh, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./mp3/sound38.mp3');
hydra.sendMessage(from, tigadelapan, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./mp3/sound39.mp3');
hydra.sendMessage(from, tigasembilan, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./mp3/sound40.mp3');
hydra.sendMessage(from, empatpuluh, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./mp3/sound41.mp3');
hydra.sendMessage(from, empatsatu, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./mp3/sound42.mp3');
hydra.sendMessage(from, empatdua, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./mp3/sound43.mp3');
hydra.sendMessage(from, empattiga, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./mp3/sound44.mp3');
hydra.sendMessage(from, empatempat, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./mp3/sound45.mp3');
hydra.sendMessage(from, empatlima, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./mp3/sound46.mp3');
hydra.sendMessage(from, empatenam, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./mp3/sound47.mp3');
hydra.sendMessage(from, empattujuh, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./mp3/sound48.mp3');
hydra.sendMessage(from, empatdelapan, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./mp3/sound49.mp3');
hydra.sendMessage(from, empatsembilan, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./mp3/sound50.mp3');
hydra.sendMessage(from, limapuluh, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('./mp3/Kecewa.mp3');
hydra.sendMessage(from, limasatu, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('./mp3/Jarak.mp3');
hydra.sendMessage(from, limadua, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('./mp3/Bisa.mp3');
hydra.sendMessage(from, limatiga, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('./mp3/Disini.mp3');
hydra.sendMessage(from, limaempat, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('./mp3/Batu.mp3');
hydra.sendMessage(from, limalima, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'desah':
delapansatu = fs.readFileSync('./mp3/desahan4.mp3');
hydra.sendMessage(from, delapansatu, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('./mp3/Adanya.mp3');
hydra.sendMessage(from, limaenam, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('./mp3/Pelangi.mp3');
hydra.sendMessage(from, limatujuh, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('./mp3/sound58.mp3');
hydra.sendMessage(from, limadelapan, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('./mp3/sound59.mp3');
hydra.sendMessage(from, limasembilan, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('./mp3/sound60.mp3');
hydra.sendMessage(from, enampuluh, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('./mp3/sound61.mp3');
hydra.sendMessage(from, enamsatu, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('./mp3/sound62.mp3');
hydra.sendMessage(from, enamdua, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('./mp3/sound63.mp3');
hydra.sendMessage(from, enamtiga, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('./mp3/sound64.mp3');
hydra.sendMessage(from, enamempat, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('./mp3/chruch.mp3');
hydra.sendMessage(from, enamlima, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('./mp3/gemes.mp3');
hydra.sendMessage(from, enamenam, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('./mp3/hujan.mp3');
hydra.sendMessage(from, enamtujuh, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('./mp3/Masih.mp3');
hydra.sendMessage(from, enamdelapan, MessageType.audio, {quoted: kir, mimetype: 'audio/mp4', ptt:true})
break
//━━━━━━━━━━━━━━━[ ISI PAKE CASE/FITUR LU ]━━━━━━━━━━━━━━━\\                                           
case 'cerpen':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=KemolX7`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Creator : ${get_result.creator}\n`
    ini_txt += `Story :\n${get_result.cerpen}`
    titid = ini_txt
   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `� NEXT `,
            },
            type: 1,
          },]);
        break
case 'asmaulhusna':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=KemolX7`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
case 'jadwalsholat':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=KemolX7`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=KemolX7`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
        break
case 'randomnama':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=codexteam`)
                    dasi = anu.result
                   sendButMessage(from, dasi, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT `,
            },
            type: 1,
          },]);
        break
case 'attp':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (args.length == 0) return reply(`Example: ${prefix + command} hydra`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              hydra.sendMessage(from, buffer, sticker, { quoted: kir })
              break
          case 'sticker': 
case 'stiker':
case 's':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if ((isMedia && !kir.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
            const media = await hydra.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                hydra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fgi})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && kir.message.videoMessage.seconds < 11 || isQuotedVideo && kir.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
                const media = await hydra.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            hydra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fgi})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break
case 'toimg':
case 'tomedia':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (kir.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await hydra.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await hydra.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply('error')
							buffer = fs.readFileSync(ran)
							hydra.sendMessage(from, buffer, image, {quoted: fgi})
							fs.unlinkSync(ran)
						})
					}
					break
case 'tourl':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if ((isMedia && !kir.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kir
            owgi = await hydra.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'telesticker': 
          case 'telestiker':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=codexteam&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              hydra.sendMessage(from, ini_buffer, sticker, {})
}
              break
case 'tovideo':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if ((isMedia && !kir.message.videoMessage || isQuotedSticker) && args.length == 0) {
              encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kir
              mediaaa = await hydra.downloadAndSaveMediaMessage(encmediaaa)
              a = await webp2gifFile(mediaaa)
              mp4 = await getBuffer(a.result)
              hydra.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: kir, caption: mess.success})
              fs.unlinkSync(mediaaa)
              } else {
              reply(mess.wrongFormat)
}
              break
          case 'tomp3':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (isQuotedVideo || isQuotedAudio){
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
              media = await hydra.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply(`Err: ${err}`)
              buffer453 = fs.readFileSync(ran)
              hydra.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: kir })
              fs.unlinkSync(ran)
})
              } else {
              reply(mess.wrongFormat)
}
              break	
case 'play':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
             reply(mess.wait)
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•� ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await hydra.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await hydra.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break              
case 'ytmp3':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
             if(!q) return reply('linknya?')              
             res = await yta(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${res.dl_link}`,{quoted:fgi})
             break         
case 'ytmp4':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
             if(!q) return reply('linknya?')            
             res = await ytv(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break  
case 'tiktok': 
case 'tiktokdl':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break  
case 'nhentaipdf':
          case 'nhdl':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (!q) return reply('kodenya?')
              reply('Please wait, data is being processed')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${q}?apikey=codexteam`)
              ini_image = await getBuffer(get_result.result.image[0])
              data = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${q}?apikey=codexteam`)
              pdf = await getBuffer(data.result)
              hydra.sendMessage(from, pdf, document, { quoted: kir, mimetype: Mimetype.pdf, filename: `${get_result.result.title_romaji}.pdf`, thumbnail: ini_image })
              break
case 'igdl':
          case 'instagram':          
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              try {
              if (!isUrl(q)) return reply('Linknya?')
              res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=codexteam&url=${args[0]}`)
              data = res.data.result
              for (let i = 0; i < data.media.length; i++) {
              sendMediaURL(from, data.media[i], data.caption, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break
          case 'igstory': 
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if(!q) return reply('Usernamenya?')
              hx.igstory(q)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              hydra.sendMessage(from,link,video,{quoted: kir,caption: `Type : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              hydra.sendMessage(from,link,image,{quoted: kir,caption: `Type : ${i.type}`})                  
}
}
});
              break
          case 'mediafire':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (args.length < 1) return reply('Link Nya Mana? ')
              if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await mediafireDl(teks)
              result = `*MediaFire Downloader*
               
📜 Nama : ${res[0].nama}
🚀 Ukuran : ${res[0].size}
🖇️ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
              reply(result)
              sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: kir})
              break
          case 'fb':
          case 'facebook':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (!q) return reply('Link Nya?')
              reply(mess.wait)
              data = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=codexteam&url=${args[0]}`)
              ini_video = await getBuffer(data.result)
              hydra.sendMessage(from, ini_video, video, { quoted: kir })
              break
          case 'twitter':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
              if (!q) return reply('Linknya?')
              ten = args[0]
              var res = await twitterGetUrl(`${ten}`)
             .then(g => {
              ren = `${g.download[2].url}`
              sendMediaURL(from,ren,'Done')
})
              break
///fitur group
case 'bay':
      reply('Sayonara Buat Yang Pergi😔\nSemoga Harimu Suram👋')
      break
case 'selamatdatang':
      reply('Welcome Kak Jangan Lupa Patuhi Peraturan  Grup Ya Kak \nSemoga Betah👏')
      break
case 'welcome':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'antilink':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
case 'tagall':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
       if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL BY KIRBOTZ ]*\n${q ? q : ''}\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
case 'hidetag':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
      if (!isGroupAdmins && !isOwner) return 
      if (!isGroup) return reply(mess.only.group)
             try {
             quotedText = kir.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
//━━━━━━━━━━━━━━━[ AKHIR  ]━━━━━━━━━━━━━━━\\
default:
        if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 8 gak mabar kak?', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(kir.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(kir.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return hydra.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
