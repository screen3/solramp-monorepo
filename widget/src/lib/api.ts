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
  symbol: string,
  icon: string
}

export default class Api {
  private fiats: Record<SupportedFiatCode, Fiat> = {
    AED: {
      code: "AED",
      symbol: "د.إ",
      icon: "🇦🇪"
    },
    NGN: {
      code: "NGN",
      symbol: "₦",
      icon: "🇳🇬"
    },
    USD: {
      code: "USD",
      symbol: "$",
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
    // const response = await fetch("http://159.65.213.14:7010/api/v1/ads/express");
    // const ad = await response.json();
    // console.log(ad)
    return this.ads.find((ad) => {
      let r = true;
      if (filter.fiat) { r = r && filter.fiat === ad.fiat.code }
      if (filter.token) { r = r && filter.token === ad.token }
      if (filter.method) { r = r && filter.method === ad.method }
      return r
    });
  }

  async fetchToken(address: string = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v") {
    return this.tokens.find((token) => token.address === address)
  }

  async fetchFiat(code: SupportedFiatCode) {
    return this.fiats[code]
  }

  async moneySent(business: string, data: {
    start_time: string;
    amount: number | undefined;
    customer_email: string | undefined;
    fee: number;
    channel: string;
    recipient: string;
    end_time: string;
    currency: "AED" | "USD" | "NGN";
    customer_name: string | undefined;
    token: string;
    status: string
  }) {
    console.log(data)
    const response = await fetch(`http://localhost:3001/api/v1/business/${business}/transaction/new`, {
      body: JSON.stringify(data),
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    return await response.json()
  }
}
