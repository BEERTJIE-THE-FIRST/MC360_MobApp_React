class ApiFeeResponseClass {
    externalAmount: number;
    internalAmount: number;
    vatAmount: number;
    totalAmount: number;
  
    constructor(externalAmount: number, internalAmount: number, vatAmount: number, totalAmount: number) {
      this.externalAmount = externalAmount;
      this.internalAmount = internalAmount;
      this.vatAmount = vatAmount;
      this.totalAmount = totalAmount;
    }
  
    get serviceFee(): number {
      return this.externalAmount + this.internalAmount;
    }
  }
  
 export default ApiFeeResponseClass;
  