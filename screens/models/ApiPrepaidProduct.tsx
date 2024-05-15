import CurrencyConverter from './CurrencyConverter';

class ApiPrepaidProduct {
  uuid: string;
  productType: string;
  amount: string | number | null;
  approvedDescription: string;

  constructor(uuid: string, productType: string, amount: string | number | null, approvedDescription: string) {
    this.uuid = uuid;
    this.productType = productType;
    this.amount = amount;
    this.approvedDescription = approvedDescription;
  }

  get formattedAmount(): number {
    const amount = this.amount != null ? this.amount : 0;
    return CurrencyConverter.convert(amount.toString());
  }
}

export default ApiPrepaidProduct;
