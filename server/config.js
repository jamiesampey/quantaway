import Props from './resources/properties';

let Config = {

  avQueryUrl: (queryFunc, symbol) => {
    let funcUrl = `https://www.alphavantage.co/query?function=${queryFunc}&apikey=${Props.AlphaVantage.ApiKey}`;
    if (symbol) funcUrl.append(`&symbol=${symbol}`);
    return funcUrl;
  },

  get sectorUrl() {
    return this.avQueryUrl('SECTOR');
  },

  timeSeriesDailyUrl: (symbol) => this.avQueryUrl('TIME_SERIES_DAILY', symbol),
};

export default Config