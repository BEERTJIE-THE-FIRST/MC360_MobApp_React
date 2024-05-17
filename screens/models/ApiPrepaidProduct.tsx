import CurrencyConverter from './CurrencyConverter';

class ApiPrepaidProduct {
  Uuid: string;
  ProductType: string;
  Amount: string | number | null;
  ApprovedDescription: string;

  constructor(uuid: string, productType: string, amount: string | number | null, approvedDescription: string) {
    this.Uuid = uuid;
    this.ProductType = productType;
    this.Amount = amount;
    this.ApprovedDescription = approvedDescription;
  }

  get FormattedAmount(): number {
    const amount = this.Amount != null ? this.Amount : 0;
    return CurrencyConverter.convert(amount.toString());
  }
}

export default ApiPrepaidProduct;
