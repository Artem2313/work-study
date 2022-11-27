// currencyLoft_bot
const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5107417206:AAFCzGtNu5fYz_fmaGuP4wxYCmKb7JUihfc';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/rate/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Choose your currency', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '€ EUR',
            callback_data: 'EUR'
          },
          {
            text: '$ USD',
            callback_data: 'USD'
          },
          {
            text: '₽ RUR',
            callback_data: 'RUR'
          },
          {
            text: '₿ BTC',
            callback_data: 'BTC'
          }
        ]
      ]
    }
  });
});

bot.on('callback_query', query => {
  console.log(query);
  const id = query.message.chat.id;
  request('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11', (error, response, body) => {
    const data = JSON.parse(body);
    const result = data.find(item => item.ccy === query.data);
    const flag = {
      'EUR': '🇪🇺',
      'USD': '🇺🇸',
      'RUR': '🇷🇺',
      'UAH': '🇺🇦',
      'BTC': '₿',
    }
    let md = `
      *${flag[result.ccy]} ${result.ccy} 💱 ${result.base_ccy} ${flag[result.base_ccy]}*
      Buy: _${result.buy}_
      Sale: _${result.sale}_
    `;
    bot.sendMessage(id, md, {parse_mode: 'Markdown'});
  })
});




//////////
// // Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });