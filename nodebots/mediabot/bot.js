const { Telegraf } = require('telegraf');
const bot = new Telegraf('5106902170:AAFLqDyIE8Bz4ADjMRq7SIg_IKq5w-7UERc');

bot.command('test', () => {

});

bot.launch();