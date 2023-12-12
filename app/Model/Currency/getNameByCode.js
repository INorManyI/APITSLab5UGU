import {
    CURRENCY_CODE_AMD, CURRENCY_CODE_BTC, CURRENCY_CODE_DOGE, CURRENCY_CODE_FILECOIN, CURRENCY_CODE_RUB,
    CURRENCY_CODE_KGS,
    CURRENCY_CODE_KZT, CURRENCY_CODE_LEO, CURRENCY_CODE_OKB,
    CURRENCY_CODE_USD, CURRENCY_CODE_UZS
} from "~/Model/Currency/currency_codes";

const currencyNames = new Map();

function init()
{
    currencyNames.set(CURRENCY_CODE_USD, 'Вечно зелёная бумажка');
    currencyNames.set(CURRENCY_CODE_KZT, 'Казахстанский тенге');
    currencyNames.set(CURRENCY_CODE_AMD, 'Армянский драм');
    currencyNames.set(CURRENCY_CODE_KGS, 'Кыргызский сом');
    currencyNames.set(CURRENCY_CODE_RUB, 'НАШ Деревянный');
    currencyNames.set(CURRENCY_CODE_UZS, 'Узбекские тугрики');
    currencyNames.set(CURRENCY_CODE_BTC, 'Bitcoin');
    currencyNames.set(CURRENCY_CODE_DOGE, 'Dogecoin');
    currencyNames.set(CURRENCY_CODE_LEO, 'Unus Sed');
    currencyNames.set(CURRENCY_CODE_OKB, 'OKB');
    currencyNames.set(CURRENCY_CODE_FILECOIN, 'Filecoin');
}

init();

export function currencyGetNameByCode(currencyCode)
{
    return currencyNames.get(currencyCode);
}
