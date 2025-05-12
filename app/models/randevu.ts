export interface Randevu {
  kullaniciId: number;
  tarih: string;        // ISO 8601 string olmalı: "2025-05-13T14:30:00"
  saat?: string;
  aciklama?: string;
}

