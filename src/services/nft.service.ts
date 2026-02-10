const API_URL = 'https://api.coingecko.com/api/v3/nfts/list';

export interface NftApiItem {
  id: string;
  name: string;
}

export const fetchNftList = async (
  page = 1,
  perPage = 10,
): Promise<NftApiItem[]> => {
  const url = new URL(API_URL);
  url.searchParams.set('page', String(page));
  url.searchParams.set('per_page', String(perPage));

  const res = await fetch(url.toString());

  if (!res.ok) throw new Error(`API error: ${res.status}`);

  return res.json();
};
