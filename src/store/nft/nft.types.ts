export interface NftCard {
  id: number;
  name: string;
  image: string;
  currentBid: number;
  countdownMs: number;
}

export interface NftState {
  cards: NftCard[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  isBlocked: boolean;
}
