const Discord = require('discord.js');
const Canvas = require('canvas');
const client = new Discord.Client();
var auth = require('./auth.json');
var key = "your lol api key";
var champs1=["Азир","Акали","Алистар","Амуму","Анивия","Ари","Атрокс","Аурелион Сол","Бард","Блицкранк","Браум","Брэнд","Вай","Варвик","Варус","Вейгар","Вейн","Вел'Коз","Виктор","Владимир","Волибир","Вуконг","Галио","Гангпланк","Гарен","Гекарим","Гнар","Грагас","Грейвз","Дариус","Джакс","Джарван IV","Джейс","Джин","Джинкс","Диана","Доктор Мундо","Дрейвен","Жанна","Зайра","Зак","Зед","Зерат","Зиггс","Зилеан","Зои","Иверн","Иллаой","Ирелия","Йорик","Ка'Зикс","Каин","Кай'Са","Калиста","Камилла","Карма","Картус","Кассадин","Кассиопея","Катарина","Квинн","Кейл","Кейтлин","Кеннен","Киана","Киндред","Клед","Ког'Мао","Корки","Ксин Жао","Ле Блан","Леона","Ли Син","Лиссандра","Лулу","Люкс","Люциан","Мальзахар","Мальфит","Маокай","Мастер Йи","Мисс Фортуна","Моргана","Мордекайзер","Нами","Насус","Наутилус","Нидали","Нико","Ноктюрн","Нуну и Виллумп","Олаф","Орианна","Орн","Пайк","Пантеон","Поппи","Райз","Рамбл","Раммус","Рек'Сай","Ренгар","Ренектон","Ривен","Рэйкан","Сайлас","Свейн","Седжуанни","Сивир","Синджед","Синдра","Сион","Скарнер","Сона","Сорака","Таам Кенч","Талия","Талон","Тарик","Твистед Фэйт","Твич","Тимо","Трандл","Треш","Триндамир","Тристана","Удир","Ургот","Фиддлстикс","Физз","Фиора","Хеймердингер","Чо'Гат","Шако","Шая","Шен","Шивана","Эвелинн","Эзреаль","Экко","Элиза","Энни","Эш","Юми","Ясуо"];
var champs2=["Azir","Akali","Alistar","Amumu","Anivia","Ahri","Aatrox","AurelionSol","Bard","Blitzcrank","Braum","Brand","Vi","Warwick","Varus","Veigar","Vayne","Velkoz","Viktor","Vladimir","Volibear","MonkeyKing","Galio","Gangplank","Garen","Hecarim","Gnar","Gragas","Graves","Darius","Jax","JarvanIV","Jayce","Jhin","Jinx","Diana","DrMundo","Draven","Janna","Zyra","Zac","Zed","Xerath","Ziggs","Zilean","Zoe","Ivern","Illaoi","Irelia","Yorick","Khazix","Kayn","Kaisa","Kalista","Camille","Karma","Karthus","Kassadin","Cassiopeia","Katarina","Quinn","Kayle","Caitlyn","Kennen","Qiyana","Kindred","Kled","KogMaw","Corki","XinZhao","Leblanc","Leona","LeeSin","Lissandra","Lulu","Lux","Lucian","Malzahar","Malphite","Maokai","MasterYi","MissFortune","Morgana","Mordekaiser","Nami","Nasus","Nautilus","Nidalee","Neeko","Nocturne","Nunu","Olaf","Orianna","Ornn","Pyke","Pantheon","Poppy","Ryze","Rumble","Rammus","RekSai","Rengar","Renekton","Riven","Rakan","Sylas","Swain","Sejuani","Sivir","Singed","Syndra","Sion","Skarner","Sona","Soraka","TahmKench","Taliyah","Talon","Taric","TwistedFate","Twitch","Teemo","Trundle","Thresh","Tryndamere","Tristana","Udyr","Urgot","Fiddlesticks","Fizz","Fiora","Heimerdinger","Chogath","Shaco","Xayah","Shen","Shyvana","Evelynn","Ezreal","Ekko","Elise","Annie","Ashe","Yuumi","Yasuo"];
const fetch = require("node-fetch");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
function ChIDToName(id)
{
    switch(id){
    case 266: return "Атрокс"; break;
    case 412: return "Треш"; break;
    case 23: return "Триндамир"; break;
    case 79: return "Грагас"; break;
    case 69: return "Кассиопея"; break;
    case 136: return "Аурелион Сол"; break;
    case 13: return "Райз"; break;
    case 78: return "Поппи"; break;
    case 14: return "Сион"; break;
	case 142: return "Зои"; break;
	case 145: return "Кай'Са"; break;
	case 555: return "Пайк"; break;
	case 517: return "Сайлас"; break;
	case 350: return "Юми"; break;
	case 246: return "Киана"; break;
	case 518: return "Нико"; break;
    case 1: return "Энни"; break;
	case 516: return "Орн"; break;
    case 202: return "Джин"; break;
    case 43: return "Карма"; break;
	case 164: return "Камилла"; break;
	case 497: return "Рэйкан"; break;
	case 498: return "Шая"; break;
	case 141: return "Каин"; break;
    case 111: return "Наутилус"; break;
    case 240: return "Клед"; break;
    case 99: return "Люкс"; break;
    case 103: return "Ари"; break;
    case 2: return "Олаф"; break;
    case 112: return "Виктор"; break;
    case 34: return "Анивия"; break;
    case 27: return "Синджед"; break;
    case 86: return "Гарен"; break;
    case 127: return "Лиссандра"; break;
    case 57: return "Маокай"; break;
    case 25: return "Моргана"; break;
    case 28: return "Эвелинн"; break;
    case 105: return "Физз"; break;
    case 74: return "Хеймердингер"; break;
    case 238: return "Зед"; break;
    case 68: return "Рамбл"; break;
    case 82: return "Мордекайзер"; break;
    case 37: return "Сона"; break;
    case 96: return "Ког'Мао"; break;
    case 55: return "Катарина"; break;
    case 117: return "Лулу"; break;
    case 22: return "Эш"; break;
    case 30: return "Картус"; break;
    case 12: return "Алистар"; break;
    case 122: return "Дариус"; break;
    case 67: return "Вейн"; break;
    case 110: return "Варус"; break;
    case 77: return "Удир"; break;
    case 89: return "Леона"; break;
    case 126: return "Джейс"; break;
    case 134: return "Синдра"; break;
    case 80: return "Пантеон"; break;
    case 92: return "Ривен"; break;
    case 121: return "Ка'Зикс"; break;
    case 42: return "Корки"; break;
    case 268: return "Азир"; break;
    case 51: return "Кейтлин"; break;
    case 76: return "Нидали"; break;
    case 85: return "Кеннен"; break;
    case 3: return "Галио"; break;
    case 45: return "Вейгар"; break;
    case 432: return "Бард"; break;
    case 150: return "Гнар"; break;
    case 90: return "Мальзахар"; break;
    case 104: return "Грейвз"; break;
    case 254: return "Вай"; break;
    case 10: return "Кейл"; break;
    case 39: return "Ирелия"; break;
    case 64: return "Ли Син"; break;
    case 420: return "Иллаой"; break;
    case 60: return "Элиза"; break;
    case 106: return "Волибир"; break;
    case 20: return "Нуну"; break;
    case 4: return "Твистед Фэйт"; break;
    case 24: return "Джакс"; break;
    case 102: return "Шивана"; break;
    case 429: return "Калиста"; break;
    case 36: return "Доктор Мундо"; break;
    case 427: return "Иверн"; break;
    case 131: return "Диана"; break;
    case 223: return "Таам Кенч"; break;
    case 63: return "Брэнд"; break;
    case 113: return "Седжуанни"; break;
    case 8: return "Владимир"; break;
    case 154: return "Зак"; break;
    case 421: return "Рек'Сай"; break;
    case 133: return "Квинн"; break;
    case 84: return "Акали"; break;
    case 163: return "Талия"; break;
    case 18: return "Тристана"; break;
    case 120: return "Гекарим"; break;
    case 15: return "Сивир"; break;
    case 236: return "Люциан"; break;
    case 107: return "Ренгар"; break;
    case 19: return "Варвик"; break;
    case 72: return "Скарнер"; break;
    case 54: return "Мальфит"; break;
    case 157: return "Ясуо"; break;
    case 101: return "Зерат"; break;
    case 17: return "Тимо"; break;
    case 75: return "Насус"; break;
    case 58: return "Ренектон"; break;
    case 119: return "Дрейвен"; break;
    case 35: return "Шако"; break;
    case 50: return "Свейн"; break;
    case 91: return "Талон"; break;
    case 40: return "Жанна"; break;
    case 115: return "Зиггс"; break;
    case 245: return "Экко"; break;
    case 61: return "Орианна"; break;
    case 114: return "Фиора"; break;
    case 9: return "Фиддлстикс"; break;
    case 31: return "Чо'Гат"; break;
    case 33: return "Раммус"; break;
    case 7: return "Ле Блан"; break;
    case 16: return "Сорака"; break;
    case 26: return "Зилеан"; break;
    case 56: return "Ноктюрн"; break;
    case 222: return "Джикс"; break;
    case 83: return "Йорик"; break;
    case 6: return "Ургот"; break;
    case 203: return "Киндред"; break;
    case 21: return "Мисс Фортуна"; break;
    case 62: return "Вуконг"; break;
    case 53: return "Блицкранк"; break;
    case 98: return "Шен"; break;
    case 201: return "Браум"; break;
    case 5: return "Ксин Жао"; break;
    case 29: return "Твич"; break;
    case 11: return "Мастер Йи"; break;
    case 44: return "Тарик"; break;
    case 32: return "Амуму"; break;
    case 41: return "Гангпланк"; break;
    case 48: return "Трандл"; break;
    case 38: return "Кассадин"; break;
    case 161: return "Вел'Коз"; break;
    case 143: return "Зайра"; break;
    case 267: return "Нами"; break;
    case 59: return "Джарван IV"; break;
    case 81: return "Эзреаль"; break;
	return id;
    }
}

client.on('message', msg => {
	const withoutPrefix = msg.content.slice(1);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	const args = split.slice(1);
  if (msg.content === '*roll') {
	var number= Math.random()*champs1.length;
    msg.reply(champs1[Math.floor(number)], {files:["https://ddragon.leagueoflegends.com/cdn/9.15.1/img/champion/"+champs2[Math.floor(number)]+".png"]});
  }
  if (msg.content.includes('*check')) {
	  var name=(msg.content).slice(6,30);
	fetch('https://ru.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+name+'?api_key='+key)
  .then(response => response.json())
  .then(commits =>
  fetch('https://ru.api.riotgames.com/lol/match/v4/matchlists/by-account/'+commits.accountId+'?api_key='+key)
  .then(response => response.json())
  .then(commits =>msg.reply(name+' играл последнюю игру на '+ChIDToName(commits.matches[0].champion)))
  );
  }
  if (msg.content === '*invade') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
		  const dispatcher = connection.playFile('jojo.mp3');
		dispatcher.setVolume(0.5); 
        })
        .catch(console.log);
    } else {
      msg.reply('You need to join a voice channel first!');
    }
  }
   if (msg.content === 'комар') {
	   client.channels.get('237175686903627777').send('<@!231080431771058176>');
  }
  function getUserFromMention(mention) {
	// The id is the first and only match found by the RegEx.
	const matches = mention.match(/^<@!?(\d+)>$/);

	// If supplied variable was not a mention, matches will be null instead of an array.
	if (!matches) return;

	// However the first element in the matches array will be the entire mention, not just the ID,
	// so use index 1.
	const id = matches[1];

	return client.users.get(id);
}

  async function f(){
	const canvas = Canvas.createCanvas(470, 470);
	const ctx = canvas.getContext('2d');
	let user;
	if(msg.content[8]!='<')
		user=msg.author;
	else
	{
	if (args[0]) {
		user = getUserFromMention(args[0]);
		if (!user) {
			return message.reply('Please use a proper mention if you want to see someone else\'s avatar.');
		}
	}
	}
	//client.channels.get('626998541025411086').send(name);
	const background = await Canvas.loadImage('./dog.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	// Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	//ctx.arc(475, 475, 500, 0, Math.PI * 2, true);
	ctx.save();
	ctx.arc(365,375, 95, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	ctx.clip();
	
	// Clip off the region you drew on

	const avatar = await Canvas.loadImage(user.avatarURL);
	ctx.drawImage(avatar, 270, 280, 190, 190);
	ctx.restore();
	const background1 = await Canvas.loadImage('./hand.png');
	ctx.drawImage(background1, 0, 0, canvas.width, canvas.height);
	let todd = client.users.get('461265486655520788');
	if(user===todd)
	{
	const background2 = await Canvas.loadImage('./toddskyrim.png');
	ctx.drawImage(background2, 0, 0, canvas.width, canvas.height);
	}
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	msg.channel.send(attachment);
	  
  }

  if (msg.content.includes('*avatar')) {
	  f();
}

  if (msg.content === '*kebab') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
		  const dispatcher = connection.playFile('kebab.mp3');
		dispatcher.setVolume(0.5); 
        })
        .catch(console.log);
    } else {
      msg.reply('You need to join a voice channel first!');
    }
  }
  if(msg.content.includes('ЖОЖО'.toLowerCase()))
  {
	   if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
		  const dispatcher = connection.playFile('kono.mp3');
		dispatcher.setVolume(0.5); 
        })
        .catch(console.log);
    } else {
      msg.reply('You need to join a voice channel first!');
    }
	setTimeout(function(){
    msg.guild.me.voiceChannel.leave();
}, 4000);
  }
});
client.login(auth.token);