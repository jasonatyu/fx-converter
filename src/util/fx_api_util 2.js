import $ from "jquery";

export const fetchFXRate = (base, target) => (
    $.ajax({
        method: 'GET',
        url: `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${base}&to_currency=${target}&apikey=H2UDZBMUUUPGC2DL`
    })
);

export const fetchHistoricalRates = (base, target) => {
    return $.ajax({
        method: 'GET',
        url: `https://www.alphavantage.co/query?function=FX_DAILY&outputsize=compact&from_symbol=${base}&to_symbol=${target}&apikey=H2UDZBMUUUPGC2DL`
    })
}

