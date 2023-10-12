const conn = require("../db/conn");

const run = async (req, res) => {
    conn.query(
        `
    CREATE TABLE IF NOT EXISTS users (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  company_id int(11) DEFAULT NULL,
  firstname varchar(255) DEFAULT NULL,
  lastname varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  phone varchar(25) DEFAULT NULL,
  country_iso2_code enum('AE','US','NG') DEFAULT NULL,
  password varchar(255) DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;`,
        (err, result) => {
            if (err) throw err;
        }
    );

    conn.query(
        `
        CREATE TABLE IF NOT EXISTS customers (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  email varchar(25) DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;`,
        (err, result) => {
            if (err) throw err;
        }
    );

    conn.query(
        `
        CREATE TABLE IF NOT EXISTS  businesses (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  business_name varchar(255) DEFAULT NULL,
  representative_id int(11) unsigned DEFAULT NULL,
  business_id int(15) DEFAULT NULL,
  default_currency enum('AED','NGN','USD') DEFAULT NULL,
  preferred_channels varchar(255) DEFAULT NULL,
  recipient_address varchar(44) DEFAULT NULL,
  logo varchar(255) DEFAULT NULL,
  callback_url varchar(255) DEFAULT NULL,
  webhook_url varchar(255) DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;`,
        (err, result) => {
            if (err) throw err;
        }
    );

    conn.query(
        `
        CREATE TABLE IF NOT EXISTS transactions (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  business_id int(11) DEFAULT NULL,
  reference varchar(10) DEFAULT NULL,
  channel enum('WISE','BANK','QR') DEFAULT NULL,
  status enum('COMPLETED','DISPUTED','CANCELED','REJECTED') DEFAULT NULL,
  fee float(15,6) DEFAULT NULL,
  amount float(15,6) DEFAULT NULL,
  start_time timestamp NULL DEFAULT NULL,
  end_time timestamp NULL DEFAULT NULL,
  customer_id int(11) DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY business_id (business_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;`,
        (err, result) => {
            if (err) throw err;
        }
    );

    conn.end();

    res.json({
        status: "ok",
    });
};

exports.run = run;
