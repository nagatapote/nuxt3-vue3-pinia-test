import type { IncomingMessage, ServerResponse } from "http";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrse: string;
  bs: string;
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  const result: User[] = await $fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return result;
};
