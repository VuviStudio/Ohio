const { Client } = require('discord.js-selfbot-v13');

const client = new Client();

const PREFIX = '!';
let rizzPoints = 100;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.id !== client.user.id) return;

  if (message.content.startsWith(`${PREFIX}shoot girl`)) {
    if (rizzPoints >= 10) {
      rizzPoints -= 10;
      simulateShooting(message);
    } else {
      message.channel.send("You don't have enough Rizz points to shoot!");
    }
  }

  if (message.content === `${PREFIX}stats`) {
    message.channel.send(`Rizz Points: ${rizzPoints}`);
  }
});

function simulateShooting(message) {
  message.channel.send('Shooting in progress...').then((sentMessage) => {
    const shootingFrames = [
      '🔫💥          ',
      '🔫 💥        ',
      '🔫  💥      ',
      '🔫   💥     ',
      '🔫    💥🔥   ',
      '🔫     💥🔥💀 '
    ];

    let frame = 0;
    const interval = setInterval(() => {
      sentMessage.edit(shootingFrames[frame++ % shootingFrames.length]);
      if (frame === shootingFrames.length) {
        clearInterval(interval);
      }
    }, 500);
  });
}


client.login('');
