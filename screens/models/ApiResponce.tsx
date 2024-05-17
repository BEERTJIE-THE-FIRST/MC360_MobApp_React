import ApiCashFundingTokenResponse from "./ApiCashFundingTokenResponse";
import ApiCashWithdrawal from "./ApiCashWithdrawal";
import ApiFeeResponse from "./ApiFeeResponse";
import ApiLinkBank from "./ApiLinkBank";
import ApiLinkResponse from "./ApiLinkResponse";
import ApiMobilePrepaidMerchant from "./ApiMobilePrepaidMerchant";
import ApiPaymentRequest from "./ApiPaymentRequest";
import ApiPrepaidProduct from "./ApiPrepaidProduct";
import ApiPrepaidProductHistoryItem from "./ApiPrepaidProductHistoryItem";
import ApiTransaction from "./ApiTransaction";
import ApiUserResponse from "./ApiUserResponse";
import Limits from "./Limits";

export interface ApiResponce {
    success: boolean;
    error: string;
    authKey: string;
    new_device: boolean;
    user: ApiUserResponse;
    profileUser: User;
    reason: string;
    balance: string;
    response: string;
    reponseUrl: string;
    description: string;
    image: string;
    fees: ApiFeeResponse;
    cashFundingToken: ApiCashFundingTokenResponse;
    transactions: ApiTransaction[];
    transaction: ApiTransaction;
    pockets: ApiPocket[];
    paymentRequest: PaymentRequest;
    paymentRequests: ApiPaymentRequest[];
    links: ApiLinkResponse[];
    referralCount: number;
    referral: string;
    withdrawToken: ApiCashWithdrawal;
    banks: ApiLinkBank[];
    prepaidMerchants: ApiMobilePrepaidMerchant[];
    prepaidMerchantProducts: ApiPrepaidProduct[];
    limits: Limits;
    mobilePrepaidProductHistory: ApiPrepaidProductHistoryItem[];
}

export default ApiResponce;
