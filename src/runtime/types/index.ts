export interface Options {
  network: string
  url?: string
  title?: string
  user?: string
  hashtags?: string
  image?: string
  prompt?: string
};

export interface Network {
  name: string
  shareUrl: string
  args?: {
    title?: string
    user?: string
    hashtags?: string
    image?: string
  }
  icon: {
    viewBox: string
    path: string
  }
  color: string
  category: 'social' | 'messaging' | 'ai' | 'bookmark' | 'other'
};

export interface NetworksIndex {
  [key: string]: Network
};
