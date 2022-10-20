import { convertCurrencyAmount } from "./convertCurrencyAmount";

describe("convertCurrencyAmount", () => {
  it("converts an amount to a desired currency if that exchange rate is available", () => {
    const args = {
      amount: 10,
      desiredCurrency: "GBP",
      exchangeRates: { USD: 1, GBP: 1.1, EUR: 1.18 },
    };

    expect(convertCurrencyAmount(args)).toEqual(11);
  });

  it("returns the amount when no exchange rate for a desired currency is available", () => {
    const args = {
      amount: 10,
      desiredCurrency: "AUD",
      exchangeRates: { USD: 1, GBP: 1.1, EUR: 1.18 },
    };

    expect(convertCurrencyAmount(args)).toEqual(10);
  });
});
