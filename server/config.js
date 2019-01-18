import Props from './resources/properties';

let Config = {
  get sectorUrl() {
    return this.avQueryUrl('SECTOR');
  },

  avTimeSeriesUrl: (symbol) => {
    return this.avQueryUrl('TIME_SERIES_DAILY') + `&symbol=${symbol}`;
  },

  avBatchTimeSeriesUrl: (symbols) => {
    if (symbols.length > 100) {
      console.error("Cannot call AlphaVantage Batch stock quotes API with greater than 100 symbols");
      return
    }
    return this.avQueryUrl('BATCH_STOCK_QUOTES') + `&symbols=${symbols.join(",")}`;
  },

  avQueryUrl: (queryFunc) => {
    return `https://www.alphavantage.co/query?function=${queryFunc}&apikey=${Props.AlphaVantage.ApiKey}`;

  }
};

export default Config