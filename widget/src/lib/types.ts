export interface SolOptions {
  amount?: number;
  recipient: string;
  splToken?: string;
  reference?: string;
  label?: string;
  message?: string;
  memo?: string;
}

export type SupportedFiatCode = "AED" | "USD" | "NGN";
export type SupportedMethods = "wise" | "bank" | "qr"

export interface ShowPopupOptions {
  fiat: SupportedFiatCode;
  customer_email?: string;
  amount?: number;
}

export interface PopupProps extends SolOptions, ShowPopupOptions {
  show: boolean;
}

export type Keys = 'bank' | 'qr' | 'wise'
