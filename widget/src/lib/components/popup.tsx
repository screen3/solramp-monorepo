import {Method, MethodId, PopupProps} from "../types";
import '../popup.css'
import Icons from "./icons";
import {useEffect, useState} from "react";
import Api, {Ad, Fiat, Token} from "../api";

const api = new Api();

const methods: Method[] = [{
  name: "Transfer",
  icon: "bank",
  id: "bank",
  iconActive: "active-bank",
}, {
  name: "Solana Pay QR",
  icon: "qr",
  id: "qr",
  iconActive: "active-qr",
}, {
  name: "Wise",
  icon: "wise",
  id: "wise",
  iconActive: "active-wise",
}];

export default function Popup(props: PopupProps) {
  const [selectedMethod, setSelectedMethod] = useState<MethodId>('qr')
  const [token, setToken] = useState<Token>()
  const [fiat, setFiat] = useState<Fiat>()

  useEffect(() => {
    api.fetchToken(props.splToken).then(r => setToken(r))
    api.fetchFiat(props.fiat).then(r => setFiat(r))
  }, [props.fiat, props.splToken])

  return (
    <>
      {props.show ? (
        <div className={"solramp"}
             style={{
               backgroundColor: "rgba(0, 0, 0, 0.75)",
               position: "absolute",
               display: "flex",
               alignItems: "center",
               height: "100vh",
               width: "100vw",
               top: 0,
             }}
        >
          <div className="" style={{
            maxWidth: "480px",
            width: "100%",
            margin: "0 auto",
          }}>
            <div style={{
              backgroundColor: "#fff",
              margin: "auto",
              boxShadow: "0 4px 15px 0 rgba(0,0,0,.2)",
              borderRadius: "4px",
            }}>
              <div className="" style={{display: "flex"}}>
                <div className="" style={{
                  minWidth: "130px",
                  borderRadius: "4px 0 0 4px",
                  borderRight: "1px solid #eee",
                  padding: "10px 0 20px 15px",
                  background: "#f4f4f4",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                  <div className="">
                    <div className="">
                      <h3 style={{
                        color: "#4e4e4e",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        display: "block",
                      }}>pay with</h3>
                    </div>
                    <nav>
                      { methods.map((option) =>
                        <NavButton {...option} active={selectedMethod === option.id} key={option.id}
                                   handleClick={() => setSelectedMethod(option.id)}/>)}
                    </nav>
                  </div>

                  <div className="" style={{marginTop: "auto" }}>
                    <span className="">{fiat?.icon} <span className="" style={{fontSize: "12px", }}>{fiat?.code}</span></span>
                  </div>
                </div>
                <div className="main-container">
                  <div className="main">
                    <div className="main-header">
                      <svg width="96" height="30" viewBox="0 0 96 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7439 20.2926C22.7714 20.3757 22.7714 20.4655 22.7439 20.5485C22.7279 20.6314 22.6885 20.7079 22.6304 20.7689L18.8783 24.7144C18.7956 24.7995 18.6968 24.8672 18.5875 24.9134C18.478 24.9615 18.3595 24.9858 18.24 24.9845H0.444308C0.361894 24.9852 0.280888 24.9631 0.210248 24.9205C0.139655 24.8724 0.0833028 24.8061 0.0471156 24.7286C0.0221236 24.65 0.0221236 24.5655 0.0471156 24.4869C0.0618237 24.4051 0.0986193 24.3288 0.153506 24.2665L3.91265 20.3211C3.99533 20.2359 4.09422 20.1682 4.20346 20.122C4.31277 20.0733 4.43137 20.049 4.551 20.0509H22.3183C22.404 20.0493 22.4882 20.0741 22.5594 20.122C22.6393 20.155 22.7047 20.2155 22.7439 20.2926ZM18.8854 12.7998C18.8009 12.7169 18.7025 12.6495 18.5946 12.6008C18.484 12.556 18.3663 12.532 18.2471 12.5297H0.444308C0.360864 12.5309 0.27943 12.5555 0.209231 12.6008C0.139032 12.646 0.0828724 12.71 0.0471156 12.7856C0.0225831 12.8643 0.0225831 12.9486 0.0471156 13.0273C0.0590607 13.11 0.0962206 13.187 0.153506 13.2477L3.91265 17.2002C3.99717 17.2832 4.09561 17.3506 4.20346 17.3993C4.31383 17.4446 4.43173 17.4687 4.551 17.4704H22.3183C22.404 17.472 22.4882 17.4472 22.5594 17.3993C22.6311 17.3574 22.6861 17.2922 22.7155 17.2145C22.7518 17.1388 22.7639 17.0537 22.7499 16.971C22.7359 16.8882 22.6966 16.8118 22.6375 16.7524L18.8854 12.7998ZM0.210248 9.88512C0.280888 9.92772 0.361894 9.94982 0.444308 9.94912H18.2471C18.3666 9.95042 18.4851 9.92612 18.5946 9.87802C18.7038 9.83182 18.8027 9.76422 18.8854 9.67902L22.6375 5.73356C22.6956 5.6725 22.7349 5.59601 22.7509 5.51318C22.7755 5.43449 22.7755 5.35017 22.7509 5.27148C22.7216 5.19376 22.6665 5.12851 22.5949 5.08664C22.5237 5.03874 22.4395 5.01392 22.3538 5.01555H4.52263C4.403 5.01364 4.2844 5.0379 4.17509 5.08664C4.06585 5.13284 3.96696 5.20052 3.88428 5.28569L0.132229 9.24532C0.0727337 9.30542 0.0331119 9.38232 0.0187441 9.46572C-0.00624803 9.54432 -0.00624803 9.62882 0.0187441 9.70742C0.0647789 9.78342 0.131116 9.84502 0.210248 9.88512Z" fill="black"/>
                        <path d="M32.9295 23V5.36H36.3375V23H32.9295ZM43.6335 23L38.2575 15.368H42.0735L47.6175 23H43.6335ZM35.3295 17.144V14.384H39.7935C40.4175 14.384 40.9535 14.256 41.4015 14C41.8655 13.744 42.2255 13.384 42.4815 12.92C42.7375 12.456 42.8655 11.928 42.8655 11.336C42.8655 10.728 42.7375 10.192 42.4815 9.728C42.2255 9.264 41.8655 8.904 41.4015 8.648C40.9535 8.392 40.4175 8.264 39.7935 8.264H35.3295V5.36H39.4335C40.8415 5.36 42.0575 5.568 43.0815 5.984C44.1215 6.4 44.9215 7.032 45.4815 7.88C46.0415 8.728 46.3215 9.792 46.3215 11.072V11.456C46.3215 12.752 46.0335 13.816 45.4575 14.648C44.8975 15.48 44.1055 16.104 43.0815 16.52C42.0575 16.936 40.8415 17.144 39.4335 17.144H35.3295ZM55.555 23V19.136H55.003V14.84C55.003 14.088 54.819 13.528 54.451 13.16C54.083 12.792 53.515 12.608 52.747 12.608C52.347 12.608 51.867 12.616 51.307 12.632C50.747 12.648 50.179 12.672 49.603 12.704C49.043 12.72 48.539 12.744 48.091 12.776V9.944C48.459 9.912 48.875 9.88 49.339 9.848C49.803 9.816 50.275 9.8 50.755 9.8C51.251 9.784 51.715 9.776 52.147 9.776C53.491 9.776 54.603 9.952 55.483 10.304C56.379 10.656 57.051 11.208 57.499 11.96C57.963 12.712 58.195 13.696 58.195 14.912V23H55.555ZM51.355 23.336C50.411 23.336 49.579 23.168 48.859 22.832C48.155 22.496 47.603 22.016 47.203 21.392C46.819 20.768 46.627 20.016 46.627 19.136C46.627 18.176 46.859 17.392 47.323 16.784C47.803 16.176 48.467 15.72 49.315 15.416C50.179 15.112 51.187 14.96 52.339 14.96H55.363V16.952H52.291C51.523 16.952 50.931 17.144 50.515 17.528C50.115 17.896 49.915 18.376 49.915 18.968C49.915 19.56 50.115 20.04 50.515 20.408C50.931 20.776 51.523 20.96 52.291 20.96C52.755 20.96 53.179 20.88 53.563 20.72C53.963 20.544 54.291 20.256 54.547 19.856C54.819 19.44 54.971 18.88 55.003 18.176L55.819 19.112C55.739 20.024 55.515 20.792 55.147 21.416C54.795 22.04 54.299 22.52 53.659 22.856C53.035 23.176 52.267 23.336 51.355 23.336ZM59.4883 23V9.968H62.1283V15.56H61.8883C61.8883 14.248 62.0563 13.152 62.3923 12.272C62.7283 11.376 63.2243 10.704 63.8803 10.256C64.5523 9.792 65.3843 9.56 66.3763 9.56H66.5203C67.5283 9.56 68.3603 9.792 69.0163 10.256C69.6883 10.704 70.1843 11.376 70.5043 12.272C70.8403 13.152 71.0083 14.248 71.0083 15.56H70.1683C70.1683 14.248 70.3363 13.152 70.6723 12.272C71.0243 11.376 71.5283 10.704 72.1843 10.256C72.8563 9.792 73.6883 9.56 74.6803 9.56H74.8243C75.8323 9.56 76.6723 9.792 77.3443 10.256C78.0163 10.704 78.5203 11.376 78.8563 12.272C79.2083 13.152 79.3843 14.248 79.3843 15.56V23H76.0483V15.248C76.0483 14.432 75.8403 13.784 75.4243 13.304C75.0083 12.808 74.4163 12.56 73.6483 12.56C72.8803 12.56 72.2643 12.816 71.8003 13.328C71.3363 13.824 71.1043 14.496 71.1043 15.344V23H67.7683V15.248C67.7683 14.432 67.5603 13.784 67.1443 13.304C66.7283 12.808 66.1363 12.56 65.3683 12.56C64.6003 12.56 63.9843 12.816 63.5203 13.328C63.0563 13.824 62.8243 14.496 62.8243 15.344V23H59.4883ZM80.6693 27.8V9.968H83.3093V15.584L82.9013 15.56C82.9653 14.232 83.2373 13.12 83.7173 12.224C84.2133 11.328 84.8693 10.664 85.6853 10.232C86.5013 9.784 87.4133 9.56 88.4213 9.56C89.3493 9.56 90.1813 9.728 90.9173 10.064C91.6693 10.4 92.3093 10.872 92.8373 11.48C93.3813 12.088 93.7973 12.8 94.0853 13.616C94.3733 14.416 94.5173 15.28 94.5173 16.208V16.712C94.5173 17.656 94.3733 18.536 94.0853 19.352C93.8133 20.152 93.4053 20.864 92.8613 21.488C92.3333 22.096 91.6933 22.576 90.9413 22.928C90.1893 23.264 89.3493 23.432 88.4213 23.432C87.4453 23.432 86.5493 23.232 85.7333 22.832C84.9333 22.416 84.2853 21.784 83.7893 20.936C83.2933 20.072 83.0133 18.96 82.9493 17.6L84.0053 19.208V27.8H80.6693ZM87.5813 20.624C88.3013 20.624 88.9253 20.448 89.4533 20.096C89.9973 19.744 90.4213 19.256 90.7253 18.632C91.0293 17.992 91.1813 17.272 91.1813 16.472C91.1813 15.64 91.0293 14.92 90.7253 14.312C90.4213 13.704 89.9973 13.232 89.4533 12.896C88.9253 12.544 88.3013 12.368 87.5813 12.368C86.9253 12.368 86.3173 12.512 85.7573 12.8C85.2133 13.088 84.7653 13.512 84.4133 14.072C84.0773 14.632 83.9093 15.304 83.9093 16.088V17.048C83.9093 17.8 84.0853 18.44 84.4373 18.968C84.7893 19.496 85.2453 19.904 85.8053 20.192C86.3653 20.48 86.9573 20.624 87.5813 20.624Z" fill="black"/>
                      </svg>

                      <div className="customer">
                        <div className="" style={{marginBottom: "4px"}}>{props.customer_email}</div>
                        <div className="customer-pay">Pay: <span style={{fontWeight: 600, color: "green"}}>{token?.symbol} {numberFormat(props.amount)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="main-body">
                      <OptionsSwitcher type={selectedMethod} options={props}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function OptionsSwitcher(props: {type: MethodId, options: PopupProps}) {
  if (props.type === 'bank') {
    return <BankTransfer options={props.options} />;
  } else if (props.type === 'wise') {
    return <Wise options={props.options} />;
  } else {
    return <QR options={props.options} />;
  }
}

function QR({options}: {options: PopupProps}) {
  // useEffect(() => {
    // solPayQrDataUrl(options)
    //   .then(() => {
    //
    //   })
    //   .catch(() => {})
  // }, [])
  // const imageRef = useRef<HTMLImageElement>();
  return <>
    <div className="" style={{display: "flex", justifyContent: "center", margin: "20px 0"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="86" height="32" viewBox="0 0 86 32" fill="none">
        <path d="M77.1128 22.0065L72.1479 11.1583H68.027L75.1197 25.7956L74.9921 26.2364C74.8144 26.8223 74.4395 27.3282 73.9311 27.6679C73.4228 28.0076 72.8125 28.1599 72.2046 28.0989C71.493 28.0923 70.7948 27.9039 70.1761 27.5515L69.5165 30.6865C70.4684 31.0797 71.4871 31.2849 72.5167 31.2908C75.3538 31.2908 77.0702 30.2458 78.4888 27.1676L86 11.1583H82.021L77.1128 22.0065Z" fill="black"/>
        <path d="M42.0235 5.99011H30.1219V25.9306H34.0229V18.6013H42.0235C46.3713 18.6013 49.2297 16.4047 49.2297 12.2957C49.2297 8.18677 46.3713 5.99011 42.0235 5.99011ZM41.8107 15.1109H34.0087V9.42372H41.8107C44.0662 9.42372 45.357 10.4545 45.357 12.2673C45.357 14.0801 44.0662 15.1109 41.8107 15.1109Z" fill="black"/>
        <path d="M65.539 22.1487V16.1416C65.539 12.5872 62.9928 10.746 58.6236 10.746C55.0773 10.746 51.9706 12.4024 51.0982 14.9473L54.3042 16.0848C54.7794 14.8123 56.432 13.8739 58.4889 13.8739C60.9288 13.8739 61.9572 14.8691 61.9572 16.0848V16.4758L56.1554 17.1156C52.8147 17.471 50.6159 18.971 50.6159 21.6511C50.6159 24.587 53.1339 26.1652 56.4745 26.1652C58.6278 26.2325 60.7248 25.4691 62.3331 24.0325C62.9147 25.4543 63.5105 26.4069 67.4754 25.9022V22.9307C65.8866 23.3145 65.539 22.9307 65.539 22.1487ZM61.9927 20.2435C61.9927 22.1771 59.2903 23.2008 57.0278 23.2008C55.3042 23.2008 54.2687 22.6463 54.2687 21.5444C54.2687 20.4425 55.1198 20.0444 56.7653 19.8525L62.0069 19.2411L61.9927 20.2435Z" fill="black"/>
        <path d="M22.7439 21.253C22.7714 21.3361 22.7714 21.4259 22.7439 21.5089C22.7279 21.5918 22.6885 21.6683 22.6304 21.7293L18.8783 25.6748C18.7956 25.7599 18.6968 25.8276 18.5875 25.8738C18.478 25.9219 18.3595 25.9462 18.24 25.9449H0.444308C0.361894 25.9456 0.280888 25.9235 0.210248 25.8809C0.139655 25.8328 0.0833028 25.7665 0.0471156 25.689C0.0221236 25.6104 0.0221236 25.5259 0.0471156 25.4473C0.0618237 25.3655 0.0986193 25.2892 0.153506 25.2269L3.91265 21.2815C3.99533 21.1963 4.09422 21.1286 4.20346 21.0824C4.31277 21.0337 4.43137 21.0094 4.551 21.0113H22.3183C22.404 21.0097 22.4882 21.0345 22.5594 21.0824C22.6393 21.1154 22.7047 21.1759 22.7439 21.253ZM18.8854 13.7602C18.8009 13.6773 18.7025 13.6099 18.5946 13.5612C18.484 13.5164 18.3663 13.4924 18.2471 13.4901H0.444308C0.360864 13.4913 0.27943 13.5159 0.209231 13.5612C0.139032 13.6064 0.0828724 13.6704 0.0471156 13.746C0.0225831 13.8247 0.0225831 13.909 0.0471156 13.9877C0.0590607 14.0704 0.0962206 14.1474 0.153506 14.2081L3.91265 18.1606C3.99717 18.2436 4.09561 18.311 4.20346 18.3597C4.31383 18.405 4.43173 18.4291 4.551 18.4308H22.3183C22.404 18.4324 22.4882 18.4076 22.5594 18.3597C22.6311 18.3178 22.6861 18.2526 22.7155 18.1749C22.7518 18.0992 22.7639 18.0141 22.7499 17.9314C22.7359 17.8486 22.6966 17.7722 22.6375 17.7128L18.8854 13.7602ZM0.210248 10.8455C0.280888 10.8881 0.361894 10.9102 0.444308 10.9095H18.2471C18.3666 10.9108 18.4851 10.8865 18.5946 10.8384C18.7038 10.7922 18.8027 10.7246 18.8854 10.6394L22.6375 6.69394C22.6956 6.63288 22.7349 6.55639 22.7509 6.47356C22.7755 6.39487 22.7755 6.31055 22.7509 6.23186C22.7216 6.15414 22.6665 6.08889 22.5949 6.04702C22.5237 5.99912 22.4395 5.9743 22.3538 5.97593H4.52263C4.403 5.97402 4.2844 5.99828 4.17509 6.04702C4.06585 6.09322 3.96696 6.1609 3.88428 6.24607L0.132229 10.2057C0.0727337 10.2658 0.0331119 10.3427 0.0187441 10.4261C-0.00624802 10.5047 -0.00624802 10.5892 0.0187441 10.6678C0.0647789 10.7438 0.131116 10.8054 0.210248 10.8455V10.8455Z" fill="black"/>
      </svg>
    </div>

    <div className="">
      <p className="main-description text-description" style={{textAlign: "center", color: "#676d72"}}>Scan the QR code below in your Solana wallet to complete the payment.</p>
    </div>
    <div className="" style={{display: "flex", justifyContent: "center", margin: "20px 0"}}>
      {/*<img src={""} ref={imageRef} alt={"qr code"}/>*/}
    </div>
  </>;
}

function Wise({options}: {options: PopupProps}) {
  const [ad, setAd] = useState<Ad|undefined>()
  useEffect(() => {
    api.fetchAd({token: options.splToken, fiat: options.fiat, method: "wise"}).then((ad) => setAd(ad))
  }, [options.fiat, options.splToken])

  return <>
    <div className="main-body-title">Pay with Wise (formerly TransferWise)</div>
    <div className="main-account-details">
      <div className="field">
        <div className="field-label">EMAIL</div>
        <div className="field-value">{ad?.seller?.email}</div>
      </div>
      <div className="field">
        <div className="field-label">ACCOUNT NAME</div>
        <div className="field-value">{ad?.seller?.account_name}</div>
      </div>
    </div>
  </>;
}

function BankTransfer({options}: {options: PopupProps}) {
  const [ad, setAd] = useState<Ad|undefined>()
  useEffect(() => {
    api.fetchAd({token: options.splToken, fiat: options.fiat, method: "bank"}).then((ad) => setAd(ad))
  }, [options.fiat, options.splToken])
  return <>
    <div className="main-body-title">Pay with bank transfer</div>
    <div className="main-account-details">
      <div className="field">
        <div className="field-label">BANK NAME</div>
        <div className="field-value">{ad?.seller?.bank_name}</div>
      </div>
      <div className="field">
        <div className="field-label">ACCOUNT NUMBER</div>
        <div className="field-value">{ad?.seller?.account_number}</div>
      </div>
      <div className="field">
        <div className="field-label">ACCOUNT NAME</div>
        <div className="field-value">{ad?.seller?.account_name}</div>
      </div>
    </div>
    <div className="main-description">
      <p className="text-description">Use this account for this transaction only</p>
    </div>
    <button className="main-button-transparent">I've sent the money</button>
  </>;
}

function NavButton (props: Method) {
  return <button className={"payment-method-button"} onClick={props.handleClick}>
    <span className="icon small">
      <Icons name={props.active ? props.iconActive : props.icon}/>
    </span>
    <span className="payment-method-button-text">{props.name}</span>
  </button>
}

//  function solPayQrDataUrl(option: SolOptions) {
//   return new Promise(async (resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       if (typeof event.target?.result === 'string') {
//         resolve(event.target.result);
//       }
//     };
//
//     // const qrCode = createQR(encodeURL({
//     //   recipient: new PublicKey(option.recipient)
//     // }));
//     //
//     // const blob = await qrCode.getRawData('png');
//     // if (!blob) return;
//
//     // reader.readAsDataURL(blob);
//   })
// }

function numberFormat(amount?: number) {
  if (!amount) return
  return new Intl.NumberFormat().format(amount)
}
