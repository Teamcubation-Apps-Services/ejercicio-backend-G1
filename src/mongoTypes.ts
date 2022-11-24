type MongoBenefit = {
  name: string;
  discountPercentage: number;
  maxRefund: number;
  vigency: string;
};

type MongoClient = {
  name: string;
  lastName: string;
  dni: string;
  MongoMovements: MongoMovement[];
};

type MongoCryptocurrency = {
  name: string;
  referencePrice: number;
  description: string;
  anualReturns: number;
};

type MongoMovement = {
  MongoCryptocurrency: string;
  MongoMovementType: string;
  amount: number;
  date: Date;
  from: string;
  to: string;
};

export { MongoBenefit, MongoClient, MongoCryptocurrency, MongoMovement };
