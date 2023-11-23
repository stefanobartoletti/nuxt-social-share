export interface Options {
  network: string
  url?: string
  title?: string
  user?: string
  hashtags?: string
  image?: string
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
  iconName: string
  color: string
};

export interface NetworksIndex {
  [key: string]: Network
};
