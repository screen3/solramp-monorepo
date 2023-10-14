export {}
(window as Window).popup = class Popup {
	static instance: Popup;
	iframe: HTMLIFrameElement | undefined;

	/**
	 * @param options {{
	 *   recipient: string;
	 *   splToken?: string;
	 *   reference?: string;
	 *   label?: string;
	 *   message?: string;
	 *   memo?: string;
	 * }}
	 */
	options = {
		recipient: "",
	}
	/**
	 * @type {{amount: string, customer_email: string, fiat:  "AED" | "USD" | "NGN",}}
	 */
	data: {
		fiat: "AED" | "USD" | "NGN";
		customer_email?: string;
		amount?: string;
	} = {
		fiat: "AED",
		customer_email: "",
		amount: "",
	}


	/**
	 * @param options {{
	 *   recipient: string;
	 *   splToken?: string;
	 *   reference?: string;
	 *   label?: string;
	 *   message?: string;
	 *   memo?: string;
	 *   }}
	 */
	constructor(options: {
		recipient: string;
		splToken?: string;
		reference?: string;
		label?: string;
		message?: string;
		memo?: string;
	}) {
		this.options = options
	}

	/**
	 * @param options {{
	 *   recipient: string;
	 *   splToken?: string;
	 *   reference?: string;
	 *   label?: string;
	 *   message?: string;
	 *   memo?: string;
	 * }}
	 */
	static initialize(options: {
		recipient: string;
		splToken?: string;
		reference?: string;
		label?: string;
		message?: string;
		memo?: string;
	}) {
		if (!Popup.instance) {
			Popup.instance = new Popup(options)
			Popup.instance.loadIframe();
		}

		return Popup.instance
	}

	/**
	 * @param data {{
	 *   fiat: "AED" | "USD" | "NGN";
	 *   customer_email?: string;
	 *   amount?: string;
	 *   onSuccess: (trx) => void
	 *   failed: (err) => void
	 * }}
	 */
	open(data: {
		fiat: "AED" | "USD" | "NGN";
		customer_email?: string;
		amount?: string;
		onSuccess: (trx: any) => void
		failed: (err: Error) => void
	}) {
		if (!this.iframe) throw new Error("call initialize first")
		this.data = data

		this.iframe.contentWindow?.postMessage({
			data: this.data,
			action: "popup:data"
		}, "http://localhost:3000");

		// Set the width and height of the iframe
		this.iframe.setAttribute("style", "position: absolute; left: 0; top: 0; z-index: 100; border: none; outline: none;")
		this.iframe.width = "100%";
		this.iframe.height = "100%";
	}

	loadIframe() {
		this.iframe = document.createElement('iframe');

		// Set the source (src) of the iframe
		this.iframe.src = "http://localhost:3000";

		// Set the width and height of the iframe
		this.iframe.setAttribute("style", "position: absolute; left: -100; top: -100; z-index: 100; border: none; outline: none;")
		this.iframe.width = "0";
		this.iframe.height = "0";

		this.iframe.onload = () => this.iframe?.contentWindow?.postMessage({
			options: this.options,
			action: "popup:options"
		}, "http://localhost:3000");


		document.body.appendChild(this.iframe);
	}
}
