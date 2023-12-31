import { createEffect } from 'effector';
import api from '@/app/api/axiosClient';
import { toast } from 'react-toastify';

export const getBestsellersOrNewProductsFx = createEffect(async (url: string) => {
  const { data } = await api.get(url);

  return data;
});

export const getProductsFx = createEffect(async (url: string) => {
  const { data } = await api.get(url);

  return data;
});

export const getProductFx = createEffect(async (url: string) => {
  const { data } = await api.get(url);

  return data;
});

export const searchProductsFx = createEffect(
  async ({ url, search }: { url: string; search: string }) => {
    const { data } = await api.post(url, { search });

    return data.rows;
  },
);

export const getProductByNameFx = createEffect(
  async ({ url, name }: { url: string; name: string }) => {
    try {
      const { data } = await api.post(url, { name });

      return data;
    } catch (error) {
      toast.error((error as Error).message);
    }
  },
);
