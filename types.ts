import React from 'react';

export enum SongStatus {
  DRAFT = 'Draft',
  PUBLISHED = 'Released',
  DISTRIBUTING = 'In Review',
  ON_CHAIN = 'On-Chain',
  ISSUE = 'Issue found'
}

// Social & Feed Types
export interface UserProfile {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  badges: string[]; // e.g., "Top Mentor", "Producer"
}

export interface FeedPost {
  id: string;
  user: UserProfile;
  content: string;
  type: 'COLLAB_REQUEST' | 'SHOWCASE' | 'QUESTION' | 'TUTORIAL';
  mediaUrl?: string; // Audio or Image
  likes: number;
  comments: number;
  isRewardEligible: boolean; // If answering this gives points
  timestamp: string;
}

// Reward Types
export interface Reward {
  id: string;
  title: string;
  provider: 'Leonardo.ai' | 'SeedDance' | 'Suno' | 'The Music Machine';
  cost: number;
  imageUrl: string;
  description: string;
}

// Help Center Types
export interface HelpArticle {
  id: string;
  title: string;
  category: 'Basics' | 'Distribution' | 'Collaboration' | 'Tech';
  content: string;
}

// Existing Types (Simplified)
export interface Song {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  createdAt: string;
  duration: string;
  status: SongStatus;
  isPrivate: boolean;
}

export interface WalletState {
  isConnected: boolean;
  accountId: string | null;
  balance: number;
  karmaPoints: number; // New currency for kindness
}

export type ViewState = 'FEED' | 'PROJECTS' | 'REWARDS' | 'HELP';

export interface NavItem {
  id: ViewState;
  label: string;
  icon: React.ElementType;
}