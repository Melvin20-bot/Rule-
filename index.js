const Discord = require('discord.js')
const bot = new Discord.Client
const token = 'NzA3NTc5MjAxMDA3Mzg2NjQ1.XrK2rA.bZhpdSZOnp6o4lOriEL37EiRN3U'

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === '?help') {
        message.reply("Dies ist ein Bot, Es gibt ein paar Commands es werden immer mehr. !Regeln dieser Command ist dazu da die Allgemeinen Regeln anzuschauen und verweißt danach auf #regeln wo noch mehr regeln vom eigenen Server drin stehen. Der Bot kann auch schon eine kleine Unterhaltung machen, diese ist jetzt noch nicht gut aber sie wird immer besser! Anfangen der Unterhaltung mit Hallo, Hey oder Moin. Viel Spaß!")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'Hallo') {
        message.reply("Hallo wie geht es dir?")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'Hey') {
        message.reply("Hallo wie geht es dir?")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'Moin') {
        message.reply("Hallo wie geht es dir?")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === '!regeln') {
        message.reply("Hallo erstmals du willst die Regeln durch lesen dann antworte mit !ja wenn nicht dann schreib einfach !nein.")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === '!Regeln') {
        message.reply("Hallo erstmals du willst die Regeln durch lesen dann antworte mit !ja wenn nicht dann schreib einfach !nein.")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === '!ja') {
        message.reply("Regeln: Verhalte dich normal nett gegenüber allen. Respektier jeden egal wie er ist. Bei Problemen melde dich bitte beim Support oder einem anderen der dir helfen kann. Benutz nur Commands die erlaubt sind. Schreib keine Ausdrücke oder Beleidigungen. Wer gegen diese Sachen verstößt wird entweder gekickt oder gebannt. Dies Entscheidet aber das Team vom Server. Also halte dich an die Regeln. Das sind die allgemeinen Regeln weiter findest du unter #regeln .")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === '!Ja') {
        message.reply("Regeln: Verhalte dich normal nett gegenüber allen. Respektier jeden egal wie er ist. Bei Problemen melde dich bitte beim Support oder einem anderen der dir helfen kann. Benutz nur Commands die erlaubt sind. Schreib keine Ausdrücke oder Beleidigungen. Wer gegen diese Sachen verstößt wird entweder gekickt oder gebannt. Dies Entscheidet aber das Team vom Server. Also halte dich an die Regeln. Das sind die allgemeinen Regeln weiter findest du unter #regeln .")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === '!nein') {
        message.reply("OK, schade. Bitte halte dich trotzdem an die Regeln, wenn nicht gibt es strafen.")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === '!Nein') {
        message.reply("OK, schade. Bitte halte dich trotzdem an die Regeln, wenn nicht gibt es strafen.")
    }
});


bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'Gut') {
        message.reply("OK, das hört sich sehr gut an. ")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'gut') {
        message.reply("OK, das hört sich sehr gut an. ")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'Gut und dir') {
        message.reply("OK, das hört sich sehr gut an. Mir sehr gut werde gut gepflegt!")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'Gut und dir?') {
        message.reply("OK, das hört sich sehr gut an. Mir sehr gut werde gut gepflegt! ")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'gut und dir?') {
        message.reply("OK, das hört sich sehr gut an. Mir sehr gut werde gut gepflegt! ")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'gut dir?') {
        message.reply("OK, das hört sich sehr gut an. Mir sehr gut werde gut gepflegt!")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'gut dir') {
        message.reply("OK, das hört sich sehr gut an. Mir sehr gut werde gut gepflegt!")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'ok') {
        message.reply("Ja, ich mache mich mal weiter an meine Arbeit gibt viel zu tun!")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'okay') {
        message.reply("Ja, ich mache mich mal weiter an meine Arbeit gibt viel zu tun!")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'Okay') {
        message.reply("Ja, ich mache mich mal weiter an meine Arbeit gibt viel zu tun!")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'OK') {
        message.reply("Ja, ich mache mich mal weiter an meine Arbeit gibt viel zu tun!")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'Ok') {
        message.reply("Ja, ich mache mich mal weiter an meine Arbeit gibt viel zu tun!")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'Kk') {
        message.reply("Ja, ich mache mich mal weiter an meine Arbeit gibt viel zu tun!")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'KK') {
        message.reply("Ja, ich mache mich mal weiter an meine Arbeit gibt viel zu tun!")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'kk') {
        message.reply("Ja, ich mache mich mal weiter an meine Arbeit gibt viel zu tun!")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'Bye') {
        message.reply("Bis bald")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'Tschüs') {
        message.reply("Bis bald")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'bye') {
        message.reply("Bis bald")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'tschüs') {
        message.reply("Bis bald")
    }
});

bot.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content === 'Bis bald') {
        message.reply("Bis bald")
    }
});



bot.on('ready', () => {
    console.log("Bot ist gestartet")
})

bot.login(token)