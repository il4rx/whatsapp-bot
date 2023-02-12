const { Client, LocalAuth } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Walabi Walabom');

    const number = "xxxxxxxxx"; // Change to the number will send the message when the bot goes online
    const text = "..."; // The Message
    const chatId = number.substring(1) + "@c.us";

    // Kirim Pesan.
    client.sendMessage(chatId, text);
});



client.on('message', message => {
	if(message.body === '!help') {
		message.reply(`There's no commands available, then read the message bellow to see the *problem* \n \n Message From *Developer* :- \n \n Dear, Users.\n We couldn't add command before update 1.2.5, some problematics happens when try to send a message, please wait the next update to see the next features! \n - Regards, Developers`);
	}
});

client.on('disconnected', (reason) => {
    console.log('disconnect Whatsapp-bot', reason);
});

client.initialize();
