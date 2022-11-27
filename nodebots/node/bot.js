const { Telegraf } = require('telegraf');

const bot = new Telegraf('5132964397:AAHz-4dP4HNMZ99qv8RyIWECdTz9vsaXV0U');

const getMessageType = (message) => {
  let message_type = "";
  const keys = Object.keys(message);
  if (keys.includes("text")) {
    message_type = "text";
  } else if (keys.includes("sticker")) {
    message_type = "sticker";
  } else if (keys.includes("photo")) {
    message_type = "photo";
  }
  return message_type;
};

// //start

bot.use((ctx, next) => {
  ctx.state.apple = 5;
  ctx.reply('You used botuse method');
  next(ctx);
});

bot.start((ctx) => {
  ctx.reply(`Welcome ${ctx.from.first_name} AKA ${ctx.chat.username} you typed ${ctx.message.text} type ${getMessageType(ctx.message)} and you have ${ctx.state.apple}!`);
});

bot.help((ctx) => {
  ctx.reply('Help');
});

bot.settings((ctx) => {
  ctx.reply('Settings');
});

bot.command(['test', 'Test'], (ctx) => {
  ctx.reply('Hello World!');
});

bot.hears('cat', (ctx) => {
  ctx.reply('Meow!');
})

bot.on('sticker', (ctx) => {
  ctx.reply("This is a sticker message");
})

bot.mention('botfather', (ctx) => {
  ctx.reply('mention method');
});

bot.phone('+380989812123', (ctx) => {
  ctx.reply('phone method');
});

bot.hashtag('hash', (ctx) => {
  ctx.reply('hash method');
});

bot.use((ctx) => {
  ctx.reply('You used botuse method');
});

bot.launch();