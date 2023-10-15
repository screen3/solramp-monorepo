import React, { useState } from "react";
import { Select } from "antd";
// import countries from "world_countries_lists/data/countries/en/world.json";

const { Option } = Select;

const CountrySelect = ({ onUpdate }) => {
    const [selectedCountry, setSelectedCountry] = useState(undefined);

    const handleChange = (value) => {
        setSelectedCountry(value);
        onUpdate(limited.find((country) => country.name === value));
    };

    const limited = [
        {
            alpa2: "AE",
            alpa3: "are",
            id: 1,
            currency: "AED",
            name: "United Arab Emirates",
        },
        {
            alpa2: "ng",
            alpa3: "nga",
            id: 1,
            currency: "NGN",
            name: "Nigeria",
        },
        {
            alpa2: "us",
            alpa3: "usa",
            id: 1,
            currency: "USD",
            name: "United States of America",
        },
    ];

    return (
        <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Select a country"
            optionFilterProp="children"
            onChange={handleChange}
            value={selectedCountry}
            className="h-[42px]"
        >
            {limited.map((country) => (
                <Option key={country.id} value={country.name}>
                    {country.name}
                </Option>
            ))}
        </Select>
    );
};

export default CountrySelect;
