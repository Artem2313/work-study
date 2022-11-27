const { Telegraf } = require('telegraf');

const bot = new Telegraf('5298395809:AAGWoB_khr5kNU-jmVfahsnYtdsf2Hppcsw');

const helpMessage = `
Say something to me
/start - start the bot
/help - command reference
/echo - say "You said echo"
/echo <msg> - echo a message
`;

bot.use((ctx, next) => {
  const messageArr = Object.keys(ctx.update.message);
  let type = messageArr.pop();
  if(type === 'text') {
    bot.telegram.sendMessage(-693825219, ctx.from.username + ' said ' + ctx.message.text);
  }
  if(type === 'entities') {
    type = ctx.update.message.entities[0].type;
    bot.telegram.sendMessage(-693825219, ctx.from.username + ' sent a ' + type);
  }
  if(type === 'sticker') {
    bot.telegram.sendMessage(-693825219, ctx.from.username + ' sent a ' + type);
  }
  next();
});

bot.start((ctx) => {
  ctx.reply('Hi I am Echo bot');
  ctx.reply(helpMessage);
});

bot.help((ctx) => {
  ctx.reply(helpMessage);
});

bot.command('echo', (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(' ');

  let message = '';

  if (inputArray.length === 1) {
    message = 'You said echo';
  } else {
    message = inputArray.splice(1).join(' ');
  }

  ctx.reply(message);
});

bot.launch();