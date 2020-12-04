const Discord = require('discord.js');
const Canvas = require('canvas');
const client = new Discord.Client();
var auth = require('./auth.json');
const ytdl = require('ytdl-core');
const { search, streamURL } = require('iheart');
var http = require('http');
var fs = require('fs');
var protect =false;
const queue = new Map();
var key = "lolkey";
var champs1=["Азир","Акали","Алистар","Амуму","Анивия","Ари","Атрокс","Аурелион Сол","Бард","Блицкранк","Браум","Брэнд","Вай","Варвик","Варус","Вейгар","Вейн","Вел'Коз","Виктор","Владимир","Волибир","Вуконг","Галио","Гангпланк","Гарен","Гекарим","Гнар","Грагас","Грейвз","Дариус","Джакс","Джарван IV","Джейс","Джин","Джинкс","Диана","Доктор Мундо","Дрейвен","Жанна","Зайра","Зак","Зед","Зерат","Зиггс","Зилеан","Зои","Иверн","Иллаой","Ирелия","Йорик","Ка'Зикс","Каин","Кай'Са","Калиста","Камилла","Карма","Картус","Кассадин","Кассиопея","Катарина","Квинн","Кейл","Кейтлин","Кеннен","Киана","Киндред","Клед","Ког'Мао","Корки","Ксин Жао","Ле Блан","Леона","Ли Син","Лиссандра","Лулу","Люкс","Люциан","Мальзахар","Мальфит","Маокай","Мастер Йи","Мисс Фортуна","Моргана","Мордекайзер","Нами","Насус","Наутилус","Нидали","Нико","Ноктюрн","Нуну и Виллумп","Олаф","Орианна","Орн","Пайк","Пантеон","Поппи","Райз","Рамбл","Раммус","Рек'Сай","Ренгар","Ренектон","Ривен","Рэйкан","Сайлас","Свейн","Седжуанни","Сенна","Сивир","Синджед","Синдра","Сион","Скарнер","Сона","Сорака","Таам Кенч","Талия","Талон","Тарик","Твистед Фэйт","Твич","Тимо","Трандл","Треш","Триндамир","Тристана","Удир","Ургот","Фиддлстикс","Физз","Фиора","Хеймердингер","Чо'Гат","Шако","Шая","Шен","Шивана","Эвелинн","Эзреаль","Экко","Элиза","Энни","Эш","Юми","Ясуо","Сетт","Афелий","Лиллия","Ёнэ","Самира"];
var champs2=["Azir","Akali","Alistar","Amumu","Anivia","Ahri","Aatrox","AurelionSol","Bard","Blitzcrank","Braum","Brand","Vi","Warwick","Varus","Veigar","Vayne","Velkoz","Viktor","Vladimir","Volibear","MonkeyKing","Galio","Gangplank","Garen","Hecarim","Gnar","Gragas","Graves","Darius","Jax","JarvanIV","Jayce","Jhin","Jinx","Diana","DrMundo","Draven","Janna","Zyra","Zac","Zed","Xerath","Ziggs","Zilean","Zoe","Ivern","Illaoi","Irelia","Yorick","Khazix","Kayn","Kaisa","Kalista","Camille","Karma","Karthus","Kassadin","Cassiopeia","Katarina","Quinn","Kayle","Caitlyn","Kennen","Qiyana","Kindred","Kled","KogMaw","Corki","XinZhao","Leblanc","Leona","LeeSin","Lissandra","Lulu","Lux","Lucian","Malzahar","Malphite","Maokai","MasterYi","MissFortune","Morgana","Mordekaiser","Nami","Nasus","Nautilus","Nidalee","Neeko","Nocturne","Nunu","Olaf","Orianna","Ornn","Pyke","Pantheon","Poppy","Ryze","Rumble","Rammus","RekSai","Rengar","Renekton","Riven","Rakan","Sylas","Swain","Sejuani","Senna","Sivir","Singed","Syndra","Sion","Skarner","Sona","Soraka","TahmKench","Taliyah","Talon","Taric","TwistedFate","Twitch","Teemo","Trundle","Thresh","Tryndamere","Tristana","Udyr","Urgot","Fiddlesticks","Fizz","Fiora","Heimerdinger","Chogath","Shaco","Xayah","Shen","Shyvana","Evelynn","Ezreal","Ekko","Elise","Annie","Ashe","Yuumi","Yasuo","Sett","Aphelios","Lillia","Yone","Samira"];
const fetch = require("node-fetch");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('расчленение человеков');
});
function ChIDToName(id)
{
    switch(id){
	case 876: return "Лиллия"; break;
	case 360: return "Самира"; break;
	case 777: return "Ёнэ"; break;
	case 523: return "Афелий"; break;
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
	case 235: return "Сенна"; break;
    case 10: return "Кейл"; break;
    case 39: return "Ирелия"; break;
    case 64: return "Ли Син"; break;
    case 420: return "Иллаой"; break;
    case 60: return "Элиза"; break;
    case 106: return "Волибир"; break;
    case 20: return "Нуну и Виллумп"; break;
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
    case 222: return "Джинкс"; break;
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
	case 875: return "Сетт"; break;
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
    msg.reply(champs1[Math.floor(number)], {files:["https://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/"+champs2[Math.floor(number)]+".png"]});
  }
	  if(msg.content===('Yakuza')&&msg.author.id!='610855836914548737')
	  {
		msg.channel.send('-play baka mitai yakuza 0');
		msg.channel.send('-play friday night yakuza 0');
	  }
  if (msg.content === '*off'){
	  if(msg.author.id==='177782703284813844'&&protect===true)
	  {
	 msg.channel.send('Защита отключена');
	protect=false;
	}
	  else
		 {
		  const kekw = client.emojis.find(emoji => emoji.name === "KEKW");
		 msg.channel.send(`Ты не адмен ${kekw}`);
	  }
  }
  if(msg.channel.id==='678918742373040128')
  {
	  if(protect===true&&msg.author.id!='610855836914548737')
		  msg.delete(1000);
  }
  if (msg.content === '*on'){
	 if(msg.author.id==='177782703284813844'&&protect===false)
	  { 
	 msg.channel.send('Защита включена');
	 protect=true;
	  }
	  else
	  {
		  const kekw = client.emojis.find(emoji => emoji.name === "KEKW");
		 msg.channel.send(`Ты не адмен ${kekw}`);
	  }
  }
  if (msg.content.includes('*check')) {
	let page=(msg.content).slice(7,8);
	let name=(msg.content).slice(9,33);
	console.log(page);
	console.log(name);
	getchampid(page,name);
  }
  async function getchampid(page,name)
  {
	  name1=encodeURIComponent(name);
	  console.log('https://ru.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+name1+'?api_key='+key);
	  let matchid = await fetch('https://ru.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+name1+'?api_key='+key)
  .then(response => response.json())
  .then(commits =>
  fetch('https://ru.api.riotgames.com/lol/match/v4/matchlists/by-account/'+commits.accountId+'?api_key='+key)
  .then(response => response.json())
  );
  //console.log(championid.matches[0].champion);
  let matches=[];
  for(let i=0;i<5;i++)
	matches.push(matchid.matches[i+((page-1)*5)].gameId);
console.log(matches)
let MatchInfo=[];
for(let i=0;i<5;i++){
	let a=await fetch('https://ru.api.riotgames.com/lol/match/v4/matches/'+matches[i]+'?api_key='+key).
	then(response=>response.json());
	for(let f=0;f<10;f++)
	{
		//console.log(a.participantIdentities[f].player.summonerName);
		if(name.toLowerCase()===a.participantIdentities[f].player.summonerName.toLowerCase())
		{
			let champname=ChIDToName(a.participants[f].championId);
			for(let z=0;z<champs1.length;z++)
			{
				if(champname===champs1[z])
				{
					champname=champs2[z];
				}
			}
			MatchInfo.push(
				{
					ChampName:champname,
					GameMode:a.gameMode,
					Win:a.participants[f].stats.win,
					Kills:a.participants[f].stats.kills,
					Deaths:a.participants[f].stats.deaths,
					Assists:a.participants[f].stats.assists
				}
			);
		}
	}
	console.log('Чемпион:',MatchInfo[i].ChampName,'K/D/A:',MatchInfo[i].Kills,'/',MatchInfo[i].Deaths,'/',MatchInfo[i].Assists);
	}
	
	const canvas = Canvas.createCanvas(500, 375);
	const ctx = canvas.getContext('2d');
	const background= await Canvas.loadImage('./background.png');
	const lose=await Canvas.loadImage('./lose.png');
	const high=await Canvas.loadImage('./high.png');
	const hyperlose=await Canvas.loadImage('./hyperlose.png');
	ctx.drawImage(background,0,0);
	for(let i=0;i<5;i++){
	let kda=((MatchInfo[i].Kills+MatchInfo[i].Assists)/MatchInfo[i].Deaths);
	MatchInfo[i].Win==true?0:ctx.drawImage(lose, 0, i*75);
	kda>8?ctx.drawImage(high, 0, i*75):0;
	kda<=0.9?ctx.drawImage(hyperlose, 0, i*75):0;
	const avatar = await Canvas.loadImage("https://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/"+MatchInfo[i].ChampName+".png");
	ctx.drawImage(avatar, 425, i*75,75,75);
	ctx.font='25px sans-serif';
	ctx.fillStyle = '#000000';
	let ifwin=MatchInfo[i].Win==true?'Победа':'Поражение';
	ctx.fillText((i+1).toString()+': '+MatchInfo[i].GameMode,5,(i*75)+50);
	if(kda>0.9)
	ctx.fillText('K/D/A: '+MatchInfo[i].Kills+'/'+MatchInfo[i].Deaths+'/'+MatchInfo[i].Assists,200,(i*75)+50);
	else
		ctx.fillText('Слив',200,(i*75)+50);
	}
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'check.png');
	msg.channel.send(name,attachment);
  }
  if (msg.content === '*invade') {
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => {
		  const dispatcher = connection.playFile('jojo.mp3');
		dispatcher.setVolume(0.5); 
        })
        .catch(console.log);
    } else {
      msg.reply('You need to join a voice channel first!');
    }
  }
  if (msg.content.includes('*rotation')) {
  getrotation();
  }
   if (msg.content.includes('*spam')) {
		var page=(msg.content).slice(9,60);
	for(let i=0;i<10;i++)
	{
		msg.channel.send(page);
	}
  }
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)+1);
}
  if (msg.content.includes('*numroll')) {
	  msg.reply(getRandomInt(100));
  }
  if(msg.content.includes('*add'))
  {
	  let a=client.users.get(msg.author.id);
	let roles=a.lastMessage.member._roles;
	let role=(msg.content).slice(5,20);
	let count=0;
	let roleid;
	if(role==='Лесник'||role==='Мидер'||role==='Саппорт'||role==='Топер'||role==='АДК')
	{
		for(let i=0;i<roles.length;i++)
		{
			if(roles[i]==='652830614503948288'||roles[i]==='652830624528465940'||roles[i]==='652830627409952777'||roles[i]==='652830635144249354'||roles[i]==='652830637631471660')
			{
				count++;
			}
		}
		if(count>=2)
			return msg.reply('У вас уже есть две роли, удалите старые, чтобы добавить новые');
		else{
			switch(role){
				case 'Лесник':
					roleid='652830614503948288';
					break;
				case 'Мидер':
					roleid='652830624528465940';
				break;
				case 'Саппорт':
					roleid='652830627409952777';
				break;
				case 'Топер':
					roleid='652830637631471660';
				break;
				case 'АДК':
					roleid='652830635144249354';
				break;
			}
			msg.member.addRole(roleid);
			msg.reply('Вам добавлена роль: '+role);
		}
	}
	else
		msg.reply('Возможные роли: Лесник,Саппорт,АДК,Топер,Мидер')
  }
  if(msg.content.includes('*delete'))
  {
	  let roleid=' ';
	  let role=(msg.content).slice(8,25);
	  switch(role){
				case 'Лесник':
					roleid='652830614503948288';
					break;
				case 'Мидер':
					roleid='652830624528465940';
				break;
				case 'Саппорт':
					roleid='652830627409952777';
				break;
				case 'Топер':
					roleid='652830637631471660';
				break;
				case 'АДК':
					roleid='652830635144249354';
				break;
			}
		if(roleid!=' ')
		{
			msg.member.removeRole(roleid);
			msg.reply('У вас удалена роль: '+role);
		}
		else
			msg.reply('Такой роли нету, возможные роли: Лесник,Саппорт,АДК,Топер,Мидер');
  }
  if(msg.content==='*help')
  {
	  const richember=new Discord.RichEmbed()
	.setColor('#00FFFF')
	.setTitle('Команды: ')
	.addField('*add АДК/Саппорт/Лесник/Мидер/Топер',  'добавляет роль')
	.addField('*delete АДК/Саппорт/Лесник/Мидер/Топер',  'удаляет роль')
	.addField('*play ссылка на ютуб','играет музыку с ютуба')
	.addField('*skip',  'пропуск музыки')
	.addField('*stop',  'конец музыки')
	.addField('*rotation',  'ротация этой недели на ру серве')
	.addField('*roll',  'случайный чемпион')
	msg.channel.send(richember);
  }
  if(msg.content.includes('*АДК'))
  {
	  msg.channel.send(msg.guild.roles.get('652830635144249354').members.map(m=>m.user.tag).join('\n'));
  }
  if(msg.content.includes('*Саппорт'))
  {
	  msg.channel.send(msg.guild.roles.get('652830627409952777').members.map(m=>m.user.tag).join('\n'));
  }
  if(msg.content.includes('*Лесник'))
  {
	  msg.channel.send(msg.guild.roles.get('652830614503948288').members.map(m=>m.user.tag).join('\n'));
  }
  if(msg.content.includes('*Топер'))
  {
	  msg.channel.send(msg.guild.roles.get('652830637631471660').members.map(m=>m.user.tag).join('\n'));
  }
  if(msg.content.includes('*Мидер'))
  {
	  msg.channel.send(msg.guild.roles.get('652830624528465940').members.map(m=>m.user.tag).join('\n'));
  }
  if(msg.content.includes('*say'))
  {
	  var slovo=(msg.content).slice(5,60);
	  msg.delete(1000);
	  client.channels.get('237175686903627777').send(slovo);
  }
  async function getrotation(){
	var rotationid=await fetch('https://ru.api.riotgames.com/lol/platform/v3/champion-rotations'+'?api_key='+key)
  .then(response => response.json());
  var champions=[];
  for(let i=0;i<15;i++)
  {
	  for(let f=0;f<champs1.length;f++)
	  {
		if(ChIDToName(rotationid.freeChampionIds[i])===champs1[f])
		{
			champions.push(champs2[f]);
		}
	  }
  }
 const canvas = Canvas.createCanvas(750, 450);
	const ctx = canvas.getContext('2d');

	for(let i=0;i<15;i++){
	const avatar = await Canvas.loadImage("https://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/"+champions[i]+".png");
	ctx.drawImage(avatar, (i%5)*150, parseInt((i/5))*150,150,150);
	}
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'rotation.png');
	const richember=new Discord.RichEmbed()
	.setColor('#00FFFF')
	.addField('Дорогой кожаный мешок','По имени '+`<@${msg.author.id}>`+' вот ротация этой недели: ')
	.attachFile(attachment)
	.setImage('attachment://rotation.png')
	msg.channel.send(richember);
  }
  
   if (msg.content === 'комар') {
	   client.channels.get('237175686903627777').send('<@!231080431771058176>');
  }
  

	if (msg.content.startsWith('*play')) {
		const serverQueue = queue.get(msg.guild.id);
		execute(msg, serverQueue);
		return;
	} else if (msg.content.startsWith('*skip')) {
		const serverQueue = queue.get(msg.guild.id);
		skip(msg, serverQueue);
		return;
	} else if (msg.content.startsWith('*stop')) {
		const serverQueue = queue.get(msg.guild.id);
		stop(msg, serverQueue);
		return;
	} 
  function getUserFromMention(mention) {
	const matches = mention.match(/^<@!?(\d+)>$/);
	if (!matches) return;
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

	ctx.beginPath();
	//ctx.arc(475, 475, 500, 0, Math.PI * 2, true);
	ctx.save();
	ctx.arc(365,375, 95, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
	
	let avatar;
	if(msg.content.includes('png')||msg.content.includes('jpg')||msg.content.includes('jpeg'))
	{
		let pngurl=(msg.content).slice(8, 200);
		avatar = await Canvas.loadImage(pngurl);
	}
	else{
		avatar = await Canvas.loadImage(user.avatarURL);
	}
	msg.delete(1000);
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
	if(msg.content.includes('*math'))
	{
		msg.channel.send(1/0);
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
      msg.reply('Зайди и включи');
    }
  }
  if (msg.content.includes('*stream')) {
	var name=(msg.content).slice(8,80);
    playstream(name);
  }
  async function playstream(neurl)
  {
		const matches = await iheart.search(process.argv[2] || '1077 the bone')
		const station = matches.stations[0]
		const url = await iheart.streamURL(station)
		console.log(url)
	  if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => {	
		console.log(stationURL);
		  const dispatcher = connection.playStream(stationURL);
		dispatcher.setVolume(0.5); 
        })
        .catch(console.log);
    } else {
      msg.reply('Зайди и включи');
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
      msg.reply('Зайди и включи');
    }
	setTimeout(function(){
    msg.guild.me.voiceChannel.leave();
}, 4000);
  }
});
async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('Зайди и включи');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('У МЕНЯ НЕТ РТА, НО Я ХОЧУ ОРАТЬ');
	}
	if(!(message.content.includes('https://www.yout')))
	{
		return message.channel.send('Только ссылки');
	}
	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
			message.channel.send('Сейчас играет '+song.title);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(song.title + ' добавлена в очередь');
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('В канал зайди и скипни');
	if (!serverQueue) return message.channel.send('Скипать нечего');
	serverQueue.connection.dispatcher.end();
	message.channel.send('Скипнул');
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('В канал зайди и выключи');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
	message.channel.send('Ну и зачем');
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}
client.login(auth.token);