'use client';

import { Provider } from 'react-redux';
import { store } from './index';
import type { ReactNode } from 'react';

export const StoreProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);
