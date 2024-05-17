class ApiFeeResponseClass {
  ExternalAmount: number;
  InternalAmount: number;
  VatAmount: number;
  TotalAmount: number;

  constructor(externalAmount: number, internalAmount: number, vatAmount: number, totalAmount: number) {
      this.ExternalAmount = externalAmount;
      this.InternalAmount = internalAmount;
      this.VatAmount = vatAmount;
      this.TotalAmount = totalAmount;
  }

  get ServiceFee(): number {
      return this.ExternalAmount + this.InternalAmount;
  }
}

export default ApiFeeResponseClass;
