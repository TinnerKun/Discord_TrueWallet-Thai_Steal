const url = require('url')
const Discord = require("discord.js");

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on('ready', async () => {
  console.log(client.user.username + ' * TrueWallet Steal Now *')
  console.log('================================')
  console.log()
})

client.on('message', message => {
  if(message.author.bot !== true) {
    let result = message.content.match(/(?:(?:https?|http):\/\/|gift\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm);
    
    if(result !== null) {
        let data = url.parse(result[0]);
        
        if(data.hostname === 'gift.truemoney.com' || data.pathname === 'gift.truemoney.com/campaign/') {
            console.log(data)
            
            let query = data.query.split("v=")[1].slice(0,18)
            if(query.length < 18 && query.length > 18) return;

            console.log(query)
        }
    }
    
    
}
})

client.login("");
