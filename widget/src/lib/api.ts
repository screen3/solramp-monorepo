import {SupportedFiatCode, SupportedMethods} from "./types";


export type Ad = {
  token: string,
  fiat: {
    code:string,
    country: string,
  },
  seller: {
    account_name:string,
    iban?:string,
    account_number: string,
    bank_name: string,
    email: string,
  },
  method: SupportedMethods,
  price: number,
}

export interface Token {
  symbol: string
  address: string
}

export interface Fiat {
  code: string,
  icon: string
}

export default class Api {
  private fiats: Record<SupportedFiatCode, Fiat> = {
    AED: {
      code: "AED",
      icon: "🇦🇪"
    },
    NGN: {
      code: "NGN",
      icon: "🇳🇬"
    },
    USD: {
      code: "USD",
      icon: "🇺🇸"
    }
  }
  private tokens: Token[] = [{symbol: "USDT", address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"}, {symbol: "USDC", address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"}]
  private ads: Ad[] = [
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "AED",
        country: "UAE",
      },
      seller: {
        account_name: "Emmanuel Joseph",
        iban: "0392892390230923",
        account_number: "9828328",
        bank_name: "Mashreq Bank",
        email: "emarjay921@gmail.com",
      },
      price: 3.65,
      method: "bank",
    },
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "AED",
        country: "UAE",
      },
      seller: {
        account_name: "Emmanuel Joseph",
        iban: "0392892390230923",
        account_number: "9828328",
        bank_name: "Mashreq Bank",
        email: "emarjay921@gmail.com",
      },
      price: 3.65,
      method: "wise",
    },
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "NGN",
        country: "NG",
      },
      seller: {
        account_name: "Emmanuel Joseph",
        account_number: "0126864523",
        bank_name: "GT Bank",
        email: "emarjay921@gmail.com",
      },
      method: "bank",
      price: 3.65,
    },
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "NGN",
        country: "NG",
      },
      seller: {
        account_name: "Emmanuel Joseph",
        account_number: "0126864523",
        bank_name: "GT Bank",
        email: "emarjay921@gmail.com",
      },
      method: "wise",
      price: 3.65,
    },
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "USD",
        country: "US",
      },
      seller: {
        account_name: "Emmanuel Joseph",
        account_number: "0126864523",
        bank_name: "GT Bank",
        email: "emarjay921@gmail.com",
      },
      method: "bank",
      price: 3.65,
    },
    {
      token: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      fiat: {
        code: "USD",
        country: "US",
      },
      seller: {
        account_name: "Emmanuel Joseph",
        account_number: "0126864523",
        bank_name: "GT Bank",
        email: "emarjay921@gmail.com",
      },
      method: "wise",
      price: 3.65,
    },
    {
      token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      fiat: {
        code: "AED",
        country: "UAE",
      },
      seller: {
        account_name: "Emmanuel Joseph",
        iban: "0392892390230923",
        account_number: "9828328",
        bank_name: "Mashreq Bank",
        email: "emarjay921@gmail.com",
      },
      price: 3.65,
      method: "bank",
    },
    {
      token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      fiat: {
        code: "AED",
        country: "UAE",
      },
      seller: {
        account_name: "Emmanuel Joseph",
        iban: "0392892390230923",
        account_number: "9828328",
        bank_name: "Mashreq Bank",
        email: "emarjay921@gmail.com",
      },
      price: 3.65,
      method: "wise",
    },
    {
      token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      fiat: {
        code: "NGN",
        country: "NG",
      },
      seller: {
        account_name: "Emmanuel Joseph",
        account_number: "0126864523",
        bank_name: "GT Bank",
        email: "emarjay921@gmail.com",
      },
      method: "bank",
      price: 3.65,
    },
    {
      token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      fiat: {
        code: "NGN",
        country: "NG",
      },
      seller: {
        account_name: "Emmanuel Joseph",
        account_number: "0126864523",
        bank_name: "GT Bank",
        email: "emarjay921@gmail.com",
      },
      method: "wise",
      price: 3.65,
    },
    {
      token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      fiat: {
        code: "USD",
        country: "US",
      },
      seller: {
        account_name: "Emmanuel Joseph",
        account_number: "0126864523",
        bank_name: "GT Bank",
        email: "emarjay921@gmail.com",
      },
      method: "bank",
      price: 3.65,
    },
    {
      token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      fiat: {
        code: "USD",
        country: "US",
      },
      seller: {
        account_name: "Emmanuel Joseph",
        account_number: "0126864523",
        bank_name: "GT Bank",
        email: "emarjay921@gmail.com",
      },
      method: "wise",
      price: 3.65,
    },
  ]

  async fetchAd(filter: {
    method: SupportedMethods;
    token?: string, amount?: string, fiat?: "AED"|"USD"|"NGN"}): Promise<Ad|undefined> {
    return this.ads.find((ad) => {
      let r = true;
      if (filter.fiat) { r = r && filter.fiat === ad.fiat.code }
      if (filter.token) { r = r && filter.token === ad.token }
      if (filter.method) { r = r && filter.method === ad.method }
      return r
    });
  }

  async fetchToken(address: string = "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB") {
    return this.tokens.find((token) => token.address === address)
  }

  async fetchFiat(code: SupportedFiatCode) {
    return this.fiats[code]
  }
}
