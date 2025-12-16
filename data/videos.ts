export interface Video {
  id: string;
  title: string;
  channel: string;
  channelUrl: string;
  subscribers: string;
  videoId: string;
  thumbnail: string;
  duration: string;
  views: string;
  description: string;
}

export const featuredVideos: Video[] = [
  {
    id: 'mkbhd-tech-2025',
    title: 'Top Tech of 2025: The Best Gadgets',
    channel: 'Marques Brownlee',
    channelUrl: 'https://www.youtube.com/@mkbhd',
    subscribers: '19M',
    videoId: 'Yb9ZTCI2chg',
    thumbnail: 'https://img.youtube.com/vi/Yb9ZTCI2chg/maxresdefault.jpg',
    duration: '12:03',
    views: '2.1M',
    description: 'Top 10 tech channels and gadgets you need to follow in 2025'
  },
  {
    id: 'randomfrankp-favorite',
    title: 'My Favorite Tech Gadgets You Can Buy RIGHT NOW!',
    channel: 'randomfrankp',
    channelUrl: 'https://www.youtube.com/@randomfrankp',
    subscribers: '2.1M',
    videoId: 'SX6Mr1GwYj8',
    thumbnail: 'https://img.youtube.com/vi/SX6Mr1GwYj8/maxresdefault.jpg',
    duration: '17:08',
    views: '156K',
    description: 'Latest tech gadgets for gamers and tech enthusiasts'
  },
  {
    id: 'gaming-gear-esports',
    title: 'The #1 eSports Gaming Gear & Peripherals',
    channel: 'randomfrankp',
    channelUrl: 'https://www.youtube.com/@randomfrankp',
    subscribers: '2.1M',
    videoId: 'd1B2qU8m5kE',
    thumbnail: 'https://img.youtube.com/vi/d1B2qU8m5kE/maxresdefault.jpg',
    duration: '14:49',
    views: '234K',
    description: 'Best gaming peripherals used by professional eSports players'
  },
  {
    id: 'jon-gadget-50',
    title: 'My 50 Favorite Tech Gadgets (2025 Ultimate Gift Guide)',
    channel: 'Jon Gadget New',
    channelUrl: 'https://www.youtube.com/@JonGadgetNew',
    subscribers: '112K',
    videoId: 'EI7gxC_iI5A',
    thumbnail: 'https://img.youtube.com/vi/EI7gxC_iI5A/maxresdefault.jpg',
    duration: '27:52',
    views: '68K',
    description: 'Ultimate 2025 tech gift guide with 50 amazing gadgets'
  },
  {
    id: 'harris-heller-gaming',
    title: 'Awesome Gaming Tech That You Will Love',
    channel: 'Harris Heller',
    channelUrl: 'https://www.youtube.com/@HarrisHeller',
    subscribers: '891K',
    videoId: 'vwrtKgcDGpA',
    thumbnail: 'https://img.youtube.com/vi/vwrtKgcDGpA/maxresdefault.jpg',
    duration: '15:23',
    views: '89K',
    description: 'Gaming tech and streaming gear recommendations'
  },
  {
    id: 'jon-gadget-tech',
    title: 'Tech & Items I Don\'t Regret Buying',
    channel: 'Jon Gadget New',
    channelUrl: 'https://www.youtube.com/@JonGadgetNew',
    subscribers: '112K',
    videoId: 'OnJlposSP6Y',
    thumbnail: 'https://img.youtube.com/vi/OnJlposSP6Y/maxresdefault.jpg',
    duration: '16:36',
    views: '112K',
    description: 'Long-term tech reviews and recommendations'
  }
];
