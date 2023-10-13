import React, { useState } from "react";
import { Select } from "antd";
import countries from "world_countries_lists/data/countries/en/world.json";

const { Option } = Select;

const CountrySelect = ({ handleChange }) => {
  const [selectedCountry, setSelectedCountry] = useState(undefined);

  // const handleChange = (value) => {
  //   setSelectedCountry(value);
  // };

  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      placeholder="Select a country"
      optionFilterProp="children"
      onChange={handleChange}
      value={selectedCountry}
      className="h-[42px]"
      name="country"
    >
      {countries.map((country) => (
        <Option key={country.id} value={country.name}>
          {country.name}
        </Option>
      ))}
    </Select>
  );
};

export default CountrySelect;
