import API from './api'; // Eğer api.ts aynı klasördeyse (değilse yolu güncelle)

export const RandevuService = {
  randevuAl: async (veri: any) => {
    const response = await API.post('/Randevular', veri);
    return response.data;
  },
};
