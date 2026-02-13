import { Song, SongStatus, FeedPost, Reward, HelpArticle } from './types';

export const MOCK_PROJECTS: Song[] = [
  {
    id: 'p1',
    title: 'The Outer Realms of Sanity',
    artist: 'DJ Dixie Delight',
    coverUrl: 'https://picsum.photos/seed/sanity/200/200',
    createdAt: '2025-07-10',
    duration: '3:22',
    status: SongStatus.DRAFT,
    isPrivate: true
  },
  {
    id: 'p2',
    title: 'Weedzilla',
    artist: 'Ray Baughman',
    coverUrl: 'https://picsum.photos/seed/weedzilla/200/200',
    createdAt: '2025-06-04',
    duration: '4:10',
    status: SongStatus.PUBLISHED,
    isPrivate: false
  },
  {
    id: 'p3',
    title: 'Ascension Symptoms (Remix)',
    artist: 'Jonny Potseed',
    coverUrl: 'https://picsum.photos/seed/ascension/200/200',
    createdAt: '2025-05-27',
    duration: '2:58',
    status: SongStatus.ON_CHAIN,
    isPrivate: false
  },
  {
    id: 'p4',
    title: 'Untitled May 26, 2025',
    artist: 'Ray Baughman',
    coverUrl: '',
    createdAt: '2025-05-26',
    duration: '1:12',
    status: SongStatus.DRAFT,
    isPrivate: true
  }
];

export const MOCK_FEED: FeedPost[] = [
  {
    id: 'f1',
    user: { id: 'u1', name: 'Ray Baughman', handle: '@rayb', avatarUrl: 'https://i.pravatar.cc/150?u=ray', badges: ['Pro'] },
    content: 'Struggling with the mix on "Weedzilla". The bass is clashing with the kick. Anyone have 5 minutes to lend an ear? 👂',
    type: 'QUESTION',
    mediaUrl: 'https://picsum.photos/seed/waveform/600/100',
    likes: 12,
    comments: 4,
    isRewardEligible: true, // Answering this gives points
    timestamp: '2 hours ago'
  },
  {
    id: 'f2',
    user: { id: 'u2', name: 'Dixie Delight', handle: '@dixie', avatarUrl: 'https://i.pravatar.cc/150?u=dixie', badges: ['Mentor'] },
    content: 'Just dropped a tutorial on how to use the new Suno stems in The Music Machine. Check it out in the Help Center! 📚',
    type: 'TUTORIAL',
    likes: 45,
    comments: 0,
    isRewardEligible: false,
    timestamp: '5 hours ago'
  },
  {
    id: 'f3',
    user: { id: 'u3', name: 'Donnie Morrison', handle: '@donnie', avatarUrl: 'https://i.pravatar.cc/150?u=donnie', badges: [] },
    content: 'Looking for a vocalist for a Bluegrass/Trap fusion track. I have the credits to pay for your time!',
    type: 'COLLAB_REQUEST',
    likes: 8,
    comments: 12,
    isRewardEligible: false,
    timestamp: '1 day ago'
  }
];

export const MOCK_REWARDS: Reward[] = [
  {
    id: 'r1',
    title: 'Leonardo.ai - 500 Credits',
    provider: 'Leonardo.ai',
    cost: 1000,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png', // Placeholder
    description: 'Generate amazing album art for your next release.'
  },
  {
    id: 'r2',
    title: 'SeedDance Promo Package',
    provider: 'SeedDance',
    cost: 2500,
    imageUrl: 'https://picsum.photos/seed/dance/100/100',
    description: 'Get your song featured on the main playlist for 1 week.'
  },
  {
    id: 'r3',
    title: 'Mentor Badge',
    provider: 'The Music Machine',
    cost: 5000,
    imageUrl: 'https://picsum.photos/seed/badge/100/100',
    description: 'Unlock the Mentor badge and earn double points for helping others.'
  }
];

export const HELP_ARTICLES: HelpArticle[] = [
  {
    id: 'h1',
    title: 'Getting Started: The Basics',
    category: 'Basics',
    content: 'Welcome! This is a collaborative space. To start, click the red "Create" button in the top right. You can upload stems or start a fresh project.'
  },
  {
    id: 'h2',
    title: 'How to Earn Karma Points',
    category: 'Collaboration',
    content: 'We reward kindness. Look for posts with the "Help Needed" tag. If the author marks your comment as helpful, you earn 50 Karma Points instantly.'
  },
  {
    id: 'h3',
    title: 'Distributing to Spotify',
    category: 'Distribution',
    content: 'Once your track is mixed, go to the Projects tab, click the three dots (...), and select "Distribute". We handle the ISRC and UPC for you.'
  }
];