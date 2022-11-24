type SequelizeBalance = {
  client?: string;
  amount?: number;
  cryptocurrency?: string;
};

type SequelizeClient = {
  name?: string;
  lastName?: string;
  email?: string;
  dni?: number;
  phone?: number;
};

type SequelizeCryptocurrency = {
  name?: string;
  price?: number;
  anualRevenue?: number;
  description?: string;
};

type SequelizeMovement = {
  from?: string;
  type?: string;
  amount?: number;
  fee?: number;
  to?: string;
  cryptocurrency?: string;
};

type SequelizeWallet = {
  name?: string;
  discount?: number;
  maxRefund?: number;
  vigency?: string;
};

export {
  SequelizeBalance,
  SequelizeClient,
  SequelizeCryptocurrency,
  SequelizeMovement,
  SequelizeWallet,
};
