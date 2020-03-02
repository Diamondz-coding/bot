const {Client, RichEmbed} = require('discord.js')
const bot = new Client();

const token = 'NjgzNjc1NTY3NzQ0NDgzNTgw.XlvAhA.Evu00f9yc4w0tyKGKJohvhJzFE0';

const PREFIX ='-';

bot.on('ready', () =>{
    console.log('This Bot Is Online!');
}) 

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'memes':
            message.author.sendMessage('My Top Two FAVOURITE MEMES')
            message.author.sendMessage('1.Rick Roll (2007)  Link:https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            message.author.sendMessage('2.That Friday Song By Rebecca Black That Everyone HATED  Link:https://www.youtube.com/watch?v=kfVsfOSbJY0')
            break;
       case 'about': 
       message.author.sendMessage('Hi Im Wadia V3! I will help you with moderation, clearing text and making you laugh! my PREFIX is - to change it please DM my creator Diamondz#6478. If you have any requests for any commands, please let me know. Thank you!')
       message.channel.sendMessage('Hi Im Wadia V3! I will help you with moderation, clearing text and making you laugh! my PREFIX is - to change it please DM my creator Diamondz#6478. If you have any requests for any commands, please let me know. Thank you!')
       break;
       case 'info':
           if(-args[0] === 'version'){
               message.channel.sendMessgae('Invalid Args');
           }else{
               message.channel.sendMessage('Version 1.00.3')(args[1])
           }
           break;
           case 'clear':
           if(-args[0]) return message.reply('Error 101 Please Specify How Many')
           message.channel.bulkDelete(args[1])
           message.channel.sendMessage('Done ! :white_check_mark:')
           break;
           case 'play':
           message.channel.sendMessage('Visit https://www.youtube.com/playlist?list=PLaYN5xQCsfG8ss4X2DsrP0x-8oIudKmhG for some of my favourite songs right now :white_check_mark:')
           message.author.sendMessage('if the link i sent you did not work, please refer to this: https://www.youtube.com/playlist?list=PLaYN5xQCsfG8ss4X2DsrP0x-8oIudKmhG')
           break;

    
           case 'help':
           const Embed = new RichEmbed().setTitle("All Commands").setColor(0xFF0000).setDescription("-clear[amount], -play[youtube playlist], -about, memes[my favourite memes]") 

           message.author.send(Embed);
           break;

        client.on ("guildMemberAdd", member => {
        var role = member.guild.roles.find ("name", "Admin");
        member.addRole (role);
        
