
## Schemas

businesses
- id (primary key)
- business_name
- representative_firstname
- representative_lastname
- representative_email
- representative_phone
- business_id (6 digits unique)
- default_currency (AED | USD | NGN)
- preferred_channel (WISE | BANK | QR)
- callback_url
- webhook_url
- created_at

users
- id (primary key)
- company_id (foreign key)
- email (same as representative_email)
- password
- created_at

transactions
- id (primary key)
- business_id (foreign key)
- channel (WISE | BANK | QR)
- status (COMPLETED | DISPUTED | CANCELED | REJECTED)
- start_time
- end_time
- created_at
- amount
- customer_id (foreign key)

customers
- name
- email (unique)
- created_at

## API Endpoints

/api/v1/account/new

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


