interface User {
    ID: number;
    E_ID: string;
    Name: string;
    MaidenName: string;
    DisplayName: string;
    agreement: string;
    Surname: string;
    CellNum: string;
    Email: string;
    IdentificationType: string;
    IDNumber: string;
    CountryOfBirth: string;
    CountryOfCitizenship: string;
    DateOfBirth: Date | null;
    DateOfIssue: Date | null;
    Gender: string;
    PassportNumber: string;
    PassportExpiryDate: Date | null;
    Selfie: string;
    ID_PassCopy: string;
    PassCode: string;
    WalletAmmount: number | null;
    Role: string;
    otp: string;
    pin: string;
  }

  export default User;
  