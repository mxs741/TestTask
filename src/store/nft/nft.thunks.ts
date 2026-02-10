import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNftList } from '@/services/nft.service';
import type { NftCard } from './nft.types';
import { RootState } from '..';

const IMAGE_COUNT = 5;

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const fetchNfts = createAsyncThunk<
  NftCard[],
  { page: number; perPage: number },
  { state: RootState }
>(
  'nft/fetchNfts',
  async ({ page, perPage }) => {
    const data = await fetchNftList(page, perPage);

    return data.map((item, i) => ({
      id: i * perPage + i,
      name: item.name,
      image: `/images/${rand(1, IMAGE_COUNT)}.png`,
      currentBid: Number((Math.random() * 4.5 + 0.5).toFixed(2)),
      countdownMs: rand(3600, 43200) * 1000,
    }));
  },
  {
    condition: (_, { getState }) => {
      const { loading, hasMore } = getState().nft;

      if (loading) return false;
      if (!hasMore) return false;

      return true;
    },
  },
);
