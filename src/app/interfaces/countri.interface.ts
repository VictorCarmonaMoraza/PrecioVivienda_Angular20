export interface CountrieIndividual {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [code: string]: Currency;
  };
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    eng: Gendered;
    fra: Gendered;
  };
  cca3: string;
  translations: {
    [key: string]: Translation;
  };
  flag: string;
  maps: Maps;
  population: number;
  gini: {
    [year: string]: number;
  };
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: FlagInfo;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: PostalCode;
}

export interface Name {
  common: string;
  official: string;
  nativeName: {
    [lang: string]: Translation;
  };
}

export interface Translation {
  official: string;
  common: string;
}

export interface Currency {
  symbol: string;
  name: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Gendered {
  f: string;
  m: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface FlagInfo {
  png: string;
  svg: string;
  alt: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}
