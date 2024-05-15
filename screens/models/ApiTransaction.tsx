import ApiFeeResponse from './ApiFeeResponse';

class ApiTransaction {
  TransactionType: string;
  Created: string | null;  // Use string for DateTime, convert when necessary
  Amount: string;
  Description: string;
  Reference: string;
  Message: string;
  Fees: ApiFeeResponse;

  constructor(
    transactionType: string,
    created: string | null,
    amount: string,
    description: string,
    reference: string,
    message: string,
    fees: ApiFeeResponse
  ) {
    this.TransactionType = transactionType;
    this.Created = created;
    this.Amount = amount;
    this.Description = description;
    this.Reference = reference;
    this.Message = message;
    this.Fees = fees;
  }

  get FormattedDate(): string | null {
    if (this.Created) {
      const date = new Date(this.Created);
      return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    return null;
  }
}

export default ApiTransaction;
