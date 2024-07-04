const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
require("dotenv").config();

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const app = express();
const PORT = process.env.PORT || 3000;

// Configuración del servidor para mantener el bot activo
app.get("/", (req, res) => {
  res.send("El bot mario esta activísimo ");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const welcomeMessage = `
  ¡Hola! Soy Mario Bot Por Antolin
  Mis Comandos:
  /web = Te Doy La Web De Los Bots De Antolin
  /info = Te Doy Informacion
  `;
  bot.sendMessage(chatId, welcomeMessage);
});

// Comando /info
bot.onText(/\/info/, (msg) => {
  const chatId = msg.chat.id;
  const infoMessage = `
  Mario Bot
  `;
  bot.sendMessage(chatId, infoMessage);
});

// Comando /web
bot.onText(/\/web/, (msg) => {
  const chatId = msg.chat.id;
  const contactMessage = `
  La web de los bots de vdx es
  bots-vdx.vdxdev.es
  `;
  bot.sendMessage(chatId, contactMessage);
});
