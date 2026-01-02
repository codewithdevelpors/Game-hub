const mongoose = require('mongoose');
const Game = require('./models/Game');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gamehub')
.then(() => console.log('MongoDB connected for seeding'))
.catch(err => console.log(err));

const games = [
  {
    title: 'The Witcher 3: Wild Hunt',
    description: 'An open-world RPG with deep storytelling and monster hunting.',
    downloadLinks: [
      { name: 'Direct Download', url: 'http://localhost:5000/downloads/witcher3.zip' },
      { name: 'Torrent', url: 'http://localhost:5000/downloads/witcher3.torrent' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=Witcher+3',
    screenshots: [
      'https://via.placeholder.com/800x600?text=Screenshot+1',
      'https://via.placeholder.com/800x600?text=Screenshot+2',
    ],
    systemRequirements: {
      os: 'Windows 7/8/10 (64-bit)',
      processor: 'Intel Core i5-2500K or AMD FX-8350',
      memory: '6 GB RAM',
      graphics: 'NVIDIA GeForce GTX 660 or AMD Radeon HD 7870',
      storage: '35 GB available space',
    },
    size: '35 GB',
    releaseDate: new Date('2015-05-19'),
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt',
    genres: ['RPG', 'Action', 'Adventure'],
    version: '1.32',
    category: 'RPG',
  },
  {
    title: 'Grand Theft Auto V',
    description: 'An action-adventure game set in a fictional city with heists and open-world exploration.',
    downloadLinks: [
      { name: 'Direct Download', url: 'http://localhost:5000/downloads/gta5.zip' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=GTA+V',
    screenshots: [
      'https://via.placeholder.com/800x600?text=GTA+Screenshot+1',
    ],
    systemRequirements: {
      os: 'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
      processor: 'Intel Core 2 Quad CPU Q6600 @ 2.40GHz or AMD Phenom 9850 Quad-Core Processor @ 2.5GHz',
      memory: '4 GB RAM',
      graphics: 'NVIDIA 9800 GT 1GB or AMD HD 4870 1GB',
      storage: '65 GB available space',
    },
    size: '65 GB',
    releaseDate: new Date('2015-04-14'),
    developer: 'Rockstar North',
    publisher: 'Rockstar Games',
    genres: ['Action', 'Adventure', 'Open World'],
    version: '1.0.2699.0',
    category: 'Action',
  },
  {
    title: 'Minecraft',
    description: 'A sandbox game where players can build and explore in a blocky world.',
    downloadLinks: [
      { name: 'Direct Download', url: 'http://localhost:5000/downloads/minecraft.zip' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=Minecraft',
    screenshots: [],
    systemRequirements: {
      os: 'Windows 7 and up',
      processor: 'Intel Core i3-3210 or AMD A8-7600 APU',
      memory: '4 GB RAM',
      graphics: 'Integrated: Intel HD Graphics 4000 or AMD Radeon R5 series',
      storage: '1 GB available space',
    },
    size: '1 GB',
    releaseDate: new Date('2011-11-18'),
    developer: 'Mojang Studios',
    publisher: 'Mojang Studios',
    genres: ['Sandbox', 'Adventure', 'Survival'],
    version: '1.19.2',
    category: 'Sandbox',
  },
  {
    title: 'Cyberpunk 2077',
    description: 'An open-world, action-adventure RPG set in the dark future of Night City.',
    downloadLinks: [
      { name: 'Direct Download', url: 'http://localhost:5000/downloads/cyberpunk2077.zip' },
      { name: 'Torrent', url: 'http://localhost:5000/downloads/cyberpunk2077.torrent' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=Cyberpunk+2077',
    screenshots: [
      'https://via.placeholder.com/800x600?text=Cyberpunk+Screenshot+1',
      'https://via.placeholder.com/800x600?text=Cyberpunk+Screenshot+2',
      'https://via.placeholder.com/800x600?text=Cyberpunk+Screenshot+3',
    ],
    systemRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i7-4790 or AMD Ryzen 3 3200G',
      memory: '12 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 580 8GB',
      storage: '70 GB available space',
    },
    size: '70 GB',
    releaseDate: new Date('2020-12-10'),
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt',
    genres: ['RPG', 'Action', 'Open World'],
    version: '2.0',
    category: 'RPG',
  },
  {
    title: 'The Elder Scrolls V: Skyrim',
    description: 'An epic fantasy RPG with dragons, magic, and endless adventure.',
    downloadLinks: [
      { name: 'Direct Download', url: 'http://localhost:5000/downloads/skyrim.zip' },
      { name: 'Torrent', url: 'http://localhost:5000/downloads/skyrim.torrent' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=Skyrim',
    screenshots: [
      'https://via.placeholder.com/800x600?text=Skyrim+Screenshot+1',
      'https://via.placeholder.com/800x600?text=Skyrim+Screenshot+2',
    ],
    systemRequirements: {
      os: 'Windows 7/8/10 (64-bit)',
      processor: 'Intel Core i5-750 or AMD Phenom II X4-945',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 260 or AMD Radeon HD 4890',
      storage: '12 GB available space',
    },
    size: '12 GB',
    releaseDate: new Date('2011-11-11'),
    developer: 'Bethesda Game Studios',
    publisher: 'Bethesda Softworks',
    genres: ['RPG', 'Fantasy', 'Adventure'],
    version: '1.9.32.0',
    category: 'RPG',
  },
  {
    title: 'FIFA 23',
    description: 'The latest installment in the FIFA soccer simulation series.',
    downloadLinks: [
      { name: 'Direct Download', url: 'http://localhost:5000/downloads/fifa23.zip' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=FIFA+23',
    screenshots: [
      'https://via.placeholder.com/800x600?text=FIFA+Screenshot+1',
    ],
    systemRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i3-6100 or AMD Athlon X4 880K',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 960 or AMD Radeon RX 460',
      storage: '100 GB available space',
    },
    size: '50 GB',
    releaseDate: new Date('2022-09-30'),
    developer: 'EA Sports',
    publisher: 'Electronic Arts',
    genres: ['Sports', 'Simulation'],
    version: '1.0',
    category: 'Sports',
  },
  {
    title: 'Call of Duty: Modern Warfare II',
    description: 'A first-person shooter with intense multiplayer action and campaign mode.',
    downloadLinks: [
      { name: 'Direct Download', url: 'http://localhost:5000/downloads/codmw2.zip' },
      { name: 'Torrent', url: 'http://localhost:5000/downloads/codmw2.torrent' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=COD+MW2',
    screenshots: [
      'https://via.placeholder.com/800x600?text=COD+Screenshot+1',
      'https://via.placeholder.com/800x600?text=COD+Screenshot+2',
    ],
    systemRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-3570K or AMD Ryzen 5 2600',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 960 or AMD Radeon RX 470',
      storage: '125 GB available space',
    },
    size: '125 GB',
    releaseDate: new Date('2022-10-28'),
    developer: 'Infinity Ward',
    publisher: 'Activision',
    genres: ['FPS', 'Action', 'Multiplayer'],
    version: '1.0',
    category: 'Action',
  },
  {
    title: 'Assassin\'s Creed Valhalla',
    description: 'Experience the Viking Age in this action RPG with exploration and combat.',
    downloadLinks: [
      { name: 'Direct Download', url: 'http://localhost:5000/downloads/acvalhalla.zip' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=AC+Valhalla',
    screenshots: [
      'https://via.placeholder.com/800x600?text=ACV+Screenshot+1',
      'https://via.placeholder.com/800x600?text=ACV+Screenshot+2',
    ],
    systemRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-4460 or AMD Ryzen 3 1200',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 960 or AMD Radeon RX 460',
      storage: '50 GB available space',
    },
    size: '50 GB',
    releaseDate: new Date('2020-11-10'),
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    genres: ['Action', 'RPG', 'Adventure'],
    version: '1.5.2',
    category: 'Action',
  },
  {
    title: 'The Sims 4',
    description: 'Create and control people in a simulation game with endless possibilities.',
    downloadLinks: [
      { name: 'Direct Download', url: 'http://localhost:5000/downloads/sims4.zip' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=The+Sims+4',
    screenshots: [
      'https://via.placeholder.com/800x600?text=Sims4+Screenshot+1',
    ],
    systemRequirements: {
      os: 'Windows 7 64-bit',
      processor: 'Intel Core 2 Duo E4300 or AMD Athlon 64 X2 4000+',
      memory: '4 GB RAM',
      graphics: 'NVIDIA GeForce 6600 or ATI Radeon X1300',
      storage: '18 GB available space',
    },
    size: '18 GB',
    releaseDate: new Date('2014-09-02'),
    developer: 'Maxis',
    publisher: 'Electronic Arts',
    genres: ['Simulation', 'Life Sim'],
    version: '1.96.77.1020',
    category: 'Simulation',
  },
  {
    title: 'League of Legends',
    description: 'A fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.',
    downloadLinks: [
      { name: 'Direct Download', url: 'http://localhost:5000/downloads/lol.zip' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=League+of+Legends',
    screenshots: [
      'https://via.placeholder.com/800x600?text=LOL+Screenshot+1',
    ],
    systemRequirements: {
      os: 'Windows 7 or newer',
      processor: '3 GHz processor',
      memory: '2 GB RAM',
      graphics: 'Shader version 2.0b capable video card',
      storage: '8 GB available space',
    },
    size: '8 GB',
    releaseDate: new Date('2009-10-27'),
    developer: 'Riot Games',
    publisher: 'Riot Games',
    genres: ['MOBA', 'Strategy', 'Multiplayer'],
    version: '12.23',
    category: 'Strategy',
  },
  {
    title: 'Fortnite',
    description: 'A free-to-play battle royale game with building and shooting mechanics.',
    downloadLinks: [
      { name: 'Epic Games Launcher', url: 'https://www.epicgames.com/fortnite' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=Fortnite',
    screenshots: [
      'https://via.placeholder.com/800x600?text=Fortnite+Screenshot+1',
    ],
    systemRequirements: {
      os: 'Windows 7/8/10 64-bit',
      processor: 'Intel Core i3-3225 or AMD Phenom II X4 940',
      memory: '4 GB RAM',
      graphics: 'NVIDIA GeForce GTX 640 or AMD Radeon HD 7870',
      storage: '20 GB available space',
    },
    size: '30 GB',
    releaseDate: new Date('2017-07-25'),
    developer: 'Epic Games',
    publisher: 'Epic Games',
    genres: ['Battle Royale', 'Shooter', 'Multiplayer'],
    version: '23.50',
    category: 'Action',
  },
  {
    title: 'Among Us',
    description: 'A multiplayer party game of teamwork and betrayal.',
    downloadLinks: [
      { name: 'Steam Download', url: 'https://store.steampowered.com/app/945360/Among_Us/' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=Among+Us',
    screenshots: [
      'https://via.placeholder.com/800x600?text=Among+Us+Screenshot+1',
    ],
    systemRequirements: {
      os: 'Windows 7 SP1+',
      processor: 'SSE2 instruction set support',
      memory: '1 GB RAM',
      graphics: 'Graphics card with DX10 (shader model 4.0) capabilities',
      storage: '250 MB available space',
    },
    size: '250 MB',
    releaseDate: new Date('2018-11-16'),
    developer: 'InnerSloth',
    publisher: 'InnerSloth',
    genres: ['Party', 'Multiplayer', 'Strategy'],
    version: '2023.3.31',
    category: 'Strategy',
  },
  {
    title: 'Rocket League',
    description: 'Soccer meets driving in this unique sports game.',
    downloadLinks: [
      { name: 'Steam Download', url: 'https://store.steampowered.com/app/252950/Rocket_League/' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=Rocket+League',
    screenshots: [
      'https://via.placeholder.com/800x600?text=Rocket+League+Screenshot+1',
    ],
    systemRequirements: {
      os: 'Windows 7 or newer',
      processor: 'Dual core from Intel or AMD at 2.4 GHz',
      memory: '4 GB RAM',
      graphics: 'NVIDIA GeForce 760, AMD Radeon R7 260X, or better',
      storage: '20 GB available space',
    },
    size: '20 GB',
    releaseDate: new Date('2015-07-07'),
    developer: 'Psyonix',
    publisher: 'Psyonix',
    genres: ['Sports', 'Racing', 'Multiplayer'],
    version: '1.95',
    category: 'Sports',
  },
  {
    title: 'Hades',
    description: 'A rogue-like dungeon crawler with Greek mythology themes.',
    downloadLinks: [
      { name: 'Direct Download', url: 'http://localhost:5000/downloads/hades.zip' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=Hades',
    screenshots: [
      'https://via.placeholder.com/800x600?text=Hades+Screenshot+1',
    ],
    systemRequirements: {
      os: 'Windows 7 or later',
      processor: 'Intel Core i5 or equivalent',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 960 or equivalent',
      storage: '15 GB available space',
    },
    size: '15 GB',
    releaseDate: new Date('2020-09-17'),
    developer: 'Supergiant Games',
    publisher: 'Supergiant Games',
    genres: ['Rogue-like', 'Action', 'Indie'],
    version: '1.0',
    category: 'Action',
  },
  {
    title: 'Stardew Valley',
    description: 'A farming simulation game with RPG elements.',
    downloadLinks: [
      { name: 'Direct Download', url: 'http://localhost:5000/downloads/stardew.zip' },
    ],
    imageUrl: 'https://via.placeholder.com/300x200?text=Stardew+Valley',
    screenshots: [
      'https://via.placeholder.com/800x600?text=Stardew+Screenshot+1',
    ],
    systemRequirements: {
      os: 'Windows 7 or later',
      processor: '2 GHz',
      memory: '2 GB RAM',
      graphics: '256 MB video memory',
      storage: '500 MB available space',
    },
    size: '500 MB',
    releaseDate: new Date('2016-02-26'),
    developer: 'ConcernedApe',
    publisher: 'ConcernedApe',
    genres: ['Farming Sim', 'RPG', 'Indie'],
    version: '1.5.6',
    category: 'Simulation',
  },
];

const seedDB = async () => {
  await mongoose.connection; // Wait for connection
  await Game.deleteMany({});
  await Game.insertMany(games);
  console.log('Database seeded!');
  mongoose.connection.close();
};

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gamehub')
.then(() => {
  console.log('MongoDB connected for seeding');
  seedDB();
})
.catch(err => console.log(err));