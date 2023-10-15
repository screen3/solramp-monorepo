"use client";
import React, { useState } from "react";
import {
    ConfigProvider,
    CountryPhoneInput,
    CountryPhoneInputProps,
    CountryPhoneInputValue,
} from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";

const CountryPhoneInputSelect = ({
    name,
    itemProps,
    label,
    onUpdate,
    ...rest
}) => {
    const [phoneVal, setPhoneVal] = useState({ code: 971, phone: "" });

    const handleChange = (value, phoneInfo) => {
        if (phoneInfo) setPhoneVal(phoneInfo);
    };

    return (
        <div {...itemProps}>
            <ConfigProvider locale={en}>
                <CountryPhoneInput
                    onChange={(val) => {
                        handleChange(`+${val.code}${val.phone}`, val);
                        onUpdate(val);
                    }}
                    value={phoneVal}
                    {...rest}
                />
            </ConfigProvider>
        </div>
    );
};

export default CountryPhoneInputSelect;
