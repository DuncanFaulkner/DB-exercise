export interface Nace {
  Code: string;
  Description: string;
  Level: string;
  Order: string;
  Parent: string;
  ReferenceToISICRev: string;
  ThisItemAlsoIncludes: string;
  ThisItemExcludes: string;
  RndNumbers: number;
}

export interface RawNace {
  Code: string;
  Description: string;
  Level: string;
  Order: string;
  Parent: string;
  'Reference to ISIC Rev. 4': string;
  'This item also includes': string;
  'This item excludes': string;
  RndNumbers: number;
}
