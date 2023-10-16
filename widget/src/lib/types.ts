import {IconNames} from "./components/icons";

export interface SolOptions {
  amount?: number;
  business: string;
  recipient: string;
  splToken?: string;
  reference?: string;
  label?: string;
  message?: string;
  memo?: string;
  onSuccess?: () => void
  onCancel?: () => void
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
  handleClose?: () => void;
  handleSuccess?: () => void;
}

export type MethodId = 'bank' | 'qr' | 'wise'

export type Method = {
  id: MethodId;
  name: string;
  icon: IconNames;
  iconActive: IconNames;
  active?: boolean
  handleClick?: () => void
};
