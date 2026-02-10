import { createSlice } from '@reduxjs/toolkit';
import type { NftState } from './nft.types';
import { fetchNfts } from './nft.thunks';

const PER_PAGE = 30;

const initialState: NftState = {
  cards: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
  isBlocked: false,
};

const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNfts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNfts.fulfilled, (state, action) => {
        state.loading = false;
        state.cards.push(...action.payload);
        state.page += 1;
        if (action.payload.length < PER_PAGE) {
          state.hasMore = false;
        }
      })
      .addCase(fetchNfts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch NFTs';
        state.isBlocked = true;
      });
  },
});

export const nftReducer = nftSlice.reducer;
