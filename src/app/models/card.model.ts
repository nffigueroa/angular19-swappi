export interface ICard {
  title: string;
  labels?: Record<string, string>[]
}

export interface IPeople {
  name: string;
  gender: string;
  skin_color: string;
  hair_color: string;
  height: string;
  eye_color: string;
  mass: string;
  birth_year: string;
}

export interface IPeopleResponse{
  total_records: number;
  total_pages: number;
  previous: string;
  next: string;
  results: IPeopleResponseResults[]
}

export interface IPeopleResponseResults {
  uid: string;
  name: string;    
  url: string;
}
 
export interface IPeopleDetailsResponse {
  result: IPeopleDetailsProperties[]
}

export interface IPeopleDetailsProperties{
  properties: IPeople
}
