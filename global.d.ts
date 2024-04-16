// Utility types
type ObjectValues<T> = T[keyof T]

type ads = {
  status: string;
  id: number;
  position: string;
  quantity: number;
  endTime: string;
  adsForm: string;
  description: string;
}