import {Observable} from '@nativescript/core';
import {
    CurrencyRatesGet,
    CurrencyRatesGetLastUpdateDate,
    CurrencyRatesSetBase,
    CurrencyRatesUpdate
} from "~/Model/Currency/CurrencyRates";
import {CURRENCY_CODE_DOGE} from "~/Model/Currency/currency_codes";

const viewModel = new Observable();

async function setCurrencyBase(currencyCode)
{
    CurrencyRatesSetBase(currencyCode);
    await CurrencyRatesUpdate();
    viewModel.set('currencyRates', CurrencyRatesGet());
    viewModel.set('currencyRatesRelevanceDate', new Date());
}

async function onCurrencyTap(args)
{
    let currencyCode =  args.object.items[args.index].code;
    await setCurrencyBase(currencyCode);
}

export async function createViewModel()
{
    viewModel.set('onCurrencyTap', onCurrencyTap);
    await setCurrencyBase(CURRENCY_CODE_DOGE);
    return viewModel;
}
