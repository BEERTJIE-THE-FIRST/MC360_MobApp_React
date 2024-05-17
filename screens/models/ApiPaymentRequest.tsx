interface ApiPaymentRequest {
    Amount: number;
    DisplayName: string;
    Selfie: string;
    Status: string;
    Reference: string;
    Description: string;
    Code: string;
    Date: string;  // Use string for DateTime, convert when necessary
  }
  
  export default ApiPaymentRequest;
  