import API from './api';

const RandevuService = {
  randevuAl: async (veri: any) => {
    const response = await API.post('/Randevular', veri);
    return response.data;
  },
};

export default RandevuService; // ✅ default export eklendi
