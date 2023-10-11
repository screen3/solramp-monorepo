## Schemas

businesses
- id (primary key)
- business_name
- representative_id (foreign key)
- business_id (6 digits unique)
- default_currency (AED | USD | NGN)  - enum field
- preferred_channels (json: WISE | BANK | QR) - more than one channel can be saved 
- recipient_address (44 string length)
- logo (url string)
- callback_url
- webhook_url
- created_at

users
- id (primary key)
- company_id (foreign key)
- firstname
- lastname
- email
- phone
- country_iso2_code (AE | US | NG) - enum field
- password
- created_at

transactions
- id (primary key)
- business_id (foreign key)
- reference (unique)
- channel (WISE | BANK | QR)
- status (COMPLETED | DISPUTED | CANCELED | REJECTED)
- fee
- start_time
- end_time
- created_at
- amount
- customer_id (foreign key)

customers
- name
- email (unique)
- created_at

ads
- base_currency (json:  AED | USD| NGN) more than one base currency can be selected
- quote_crypto (json:  USDC | USDT| NGN) more than one quote crypto can be selected
- minimum_amount (positive integer)
- maximum_amount (positive integer)

## API Endpoints

/api/v1/business/new

- POST
- Request body
```
{
  "business_name": "Business Name",
  "representative_firstname": "John",
  "representative_lastname": "Doe",
  "representative_email": "johndoe@gmail.com"
  "representative_phone": "2348123456789",
  "default_currency" : "AED" //Should be determined by phone number extension selected
}
```
- Response body
```
{
  business_name,
  representative_firstname,
  representative_lastname,
  representative_email,
  representative_phone,
  default_currency,
  business_id
}
```

/api/v1/account/login

- POST 
- Request body
```
username,
password
```
- Response body
```
session ...
```

/api/v1/business/upadate

- POST/PUT
- Request body
```
 {
  preferred_channels,
  logo,
  recipient_address,
  callback_url,
  webhook_url,
 }
```

- Response body : business public fields


/api/v1/account/update

- POST/PUT
- Request body
```
 {
  firstname,
  lastname,
  phone
 }
```

- Response body : account public fields

/api/v1/business/:business_id/profile

- GET
- Request body: session
- Response body: Company profile

/api/v1/business/:business_id/transaction/create

- POST
- Request body
```
{
  amount,
  fee,
  total_amount,
  customer_email,
  recipient,
  crypto, //USDT, USDC
  currency, //AED, NGN, USD
  business_id
}
```

/api/v1/business/:business_id/transaction/list

- GET

/api/v1/business/ads/:base_currency/:quote_crypto

- GET
