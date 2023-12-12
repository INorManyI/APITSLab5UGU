import {Http} from "@nativescript/core";
import {currencyGetAllCodes} from "~/Model/Currency/getAllCodes";
import {currencyGetNameByCode} from "~/Model/Currency/getNameByCode";

//Курс валюты
export class CurrencyRate
{
    code;
    name;       //Название валюты
    rate;
}

let currencyRates = [];                 //Курсы валют
let convertionBase = undefined;     //Основная валюта

/**
 * Обновляет курсы валют данными из JSON-а.
 */
function updateCurrencyRateListByJson(json)
{
    currencyRates = [];
    let currencyCodes = currencyGetAllCodes();
    for (let code of currencyCodes)
    {
        let currencyRate = new CurrencyRate();
        currencyRate.code = code;
        currencyRate.name = currencyGetNameByCode(code);
        currencyRate.rate = json[convertionBase][code];
        currencyRates.push(currencyRate);
    }
}

export async function CurrencyRatesUpdate()
{
    let currencyRatesJSON = await Http.getJSON(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${convertionBase}.json`);
    updateCurrencyRateListByJson(currencyRatesJSON);
}

/**
 * Устанавливает основную валюту, относительно которой высчитываются курсы валют.
 */
export function CurrencyRatesSetBase(currencyCode)
{
    convertionBase = currencyCode;
}

export function CurrencyRatesGet()
{
    return currencyRates;
}
