// Utility types
type ObjectValues<T> = T[keyof T]

type Order = "asc" | "desc";

type HeadCell<T> = {
  disablePadding: boolean;
  id: keyof T & string;
  label: string;
  numeric: boolean;
}

type Ads = {
  status: string;
  id: number;
  position: string;
  quantity: number;
  endTime: string;
  adsForm: string;
  description: string;
}

type Payment = {
  id: number;
  posName: string;
  adsForm: string;
  contractLength: number;
  paid: number;
  total: number;
  method: string;
}

type Proposal = {
  status: string;
  id: number;
  position: string;
  quantity: number;
  length: string;
  startDate: string;
  adsForm: string;
}

interface RowWithId {
  id: number;
  status?: string;
}