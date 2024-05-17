interface ApiPrepaidProductHistoryItem {
  ProductUuid: string;
  PayerCategory1: string;
  PayerCategory2: string;
  PayerRefInfo: string;
  ItemNumber: string;
  Created: string;  // Use string for DateTime, convert when necessary
  FormattedDate: string;
  Amount: number;
}

export default ApiPrepaidProductHistoryItem;
