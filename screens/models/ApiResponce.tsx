import ApiCashFundingTokenResponse from "./ApiCashFundingTokenResponse";
import ApiCashWithdrawal from "./ApiCashWithdrawal";
import ApiFeeResponse from "./ApiFeeResponse";
import ApiLinkBank from "./ApiLinkBank";
import ApiLinkResponse from "./ApiLinkResponse";
import ApiMobilePrepaidMerchant from "./ApiMobilePrepaidMerchant";
import ApiPaymentRequest from "./ApiPaymentRequest";
import {ApiPocket} from "./ApiPocket";
import ApiPrepaidProduct from "./ApiPrepaidProduct";
import ApiPrepaidProductHistoryItem from "./ApiPrepaidProductHistoryItem";
import ApiTransaction from "./ApiTransaction";
import ApiUserResponse from "./ApiUserResponse";
import Limits from "./Limits";
import User from "./User";

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
    Fees: ApiFeeResponse;
    CashFundingToken: ApiCashFundingTokenResponse;
    Transactions: ApiTransaction[];
    Transaction: ApiTransaction;
    Pockets: ApiPocket[];
    PaymentRequest: PaymentRequest;
    PaymentRequests: ApiPaymentRequest[];
    Links: ApiLinkResponse[];
    ReferralCount: number;
    Referral: string;
    WithdrawToken: ApiCashWithdrawal;
    Banks: ApiLinkBank[];
    PrepaidMerchants: ApiMobilePrepaidMerchant[];
    PrepaidMerchantProducts: ApiPrepaidProduct[];
    Limits: Limits;
    MobilePrepaidProductHistory: ApiPrepaidProductHistoryItem[];
}

export default ApiResponce;
