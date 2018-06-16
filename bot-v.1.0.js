const eris = require('eris')
const bot = new eris('') //token

// Botの準備が出来たらconsoleにReady!と表示
bot.on('ready', () => {
    console.log('Ready!')
    bot.editStatus('dnd', {name: '.nicobot | ニコニコ動画', type: 3})
})

//---------ここから下にソースコードを書いていく----------
bot.on('messageCreate', (msg) => {
    if(msg.author.bot === false) {
        if(msg.content === '\.nicobot') {
            bot.createMessage(msg.channel.id, '===NicoBot Help===\n**.nicobot** このメッセージを再度表示させます\n**.nicobot invite** このボットの招待リンクを表示させます\n**.nico a <動画IDや放送ID(lv123456など)>**\n**.nico u <ユーザー番号>** ユーザーのプロフィールへのリンクを表示させます\n**.nico l <コミュニティ番号>** コミュニティの放送へのリンクを表示させます\n**.nico ml <マイリスト番号>** マイリストへのリンクを表示させます\n**.nico d <ページ番号>** 大百科へのリンクを表示させます\n製作者連絡先:``tenmusu0201#2150``')
        }
    }
    if(msg.author.bot === false) {
        if(msg.content === '\.nicobot invite') {
            bot.createMessage(msg.channel.id, 'サーバーに招待する:https://bit.ly/2Jy5HB1')
        }
    }
　  if(msg.author.bot === false) {
        if(msg.content.match(/\.nico a.*?/)) {
            var content = msg.content.replace('.nico a ', '')
                bot.createMessage(msg.channel.id, msg.author.mention + ' https://nico.ms/' + content)
        }
    }
    if(msg.author.bot === false) {
        if(msg.content.match(/\.nico u .*?/)) {
            var content = msg.content.replace('.nico u ', '')
                bot.createMessage(msg.channel.id, msg.author.mention + ' https://nico.ms/user/' + content)
        }
    }
    if(msg.author.bot === false) {
        if(msg.content.match(/\.nico l .*?/)) {
            var content = msg.content.replace('.nico l ', '')
                bot.createMessage(msg.channel.id, msg.author.mention + ' https://nico.ms/l/' + content)
        }
    }
    if(msg.author.bot === false) {
        if(msg.content.match(/\.nico d .*?/)) {
            var content = msg.content.replace('.nico d ', '')
                bot.createMessage(msg.channel.id, msg.author.mention + ' https://nico.ms/dic/' + content)
        }
    }
    if(msg.author.bot === false) {
        if(msg.content.match(/\.nico ml .*?/)) {
            var content = msg.content.replace('.nico ml ', '')
                bot.createMessage(msg.channel.id, msg.author.mention + ' https://nico.ms/mylist/' + content)
        }
    }
    if(msg.author.bot === false) {
        if(msg.content === 'ニコニコ、導入サーバー数は？') {
            bot.createMessage(msg.channel.id, 'ニコニコを導入しているサーバーの数は**' + Object.keys(bot.guildShardMap).length + 'サーバー**です')
        }
    }
    if(msg.author.bot === false) {
        if(msg.content.match(/<@455335910842564638>/)) {
            bot.createMessage(msg.channel.id, 'ヘルプが見たい人は **.nicobot** 、導入サーバー数が知りたい人は **ニコニコ、導入サーバー数は？** と言ってね＾＾')
    }}
})
//---------ここから上にソースコードを書くこと------------

bot.connect()