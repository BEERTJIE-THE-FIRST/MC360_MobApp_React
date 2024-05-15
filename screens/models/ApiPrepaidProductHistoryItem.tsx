interface ApiPrepaidProductHistoryItem {
    productUuid: string;
    payerCategory1: string;
    payerCategory2: string;
    payerRefInfo: string;
    itemNumber: string;
    created: string;  // Use string for DateTime, convert when necessary
    formattedDate: string;
    amount: number;
  }
  
  export default ApiPrepaidProductHistoryItem;
  