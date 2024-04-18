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

type Proposal = {
  status: string;
  id: number;
  position: string;
  quantity: number;
  length: string;
  startDate: string;
  adsForm: string;
}

type Company = {
  id: number;
  name: string;
  email: string;
  taxNumber: string;
  address: string;
}

type Contract = {
  id: number;
  companyName: string;
  phone: string;
  taxNumber: string;
  position: string;
  expiredDate: string;
}

interface RowWithId {
  id: number;
  status?: string;
}

type Candidate = {
  id: number;
  name: string;
  email: string;
  phone: string;
  resumeID: string;
}
