export interface Options {
  network: string
  url?: string
};

export interface Network {
  name: string
  shareUrl: string
  urlArgs?: {
    title?: string
  }
  iconName: string
  color: string
};

export interface NetworksIndex {
  [key: string]: Network
};
