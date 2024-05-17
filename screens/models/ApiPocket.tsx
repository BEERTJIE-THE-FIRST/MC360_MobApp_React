export interface Pockets {
    PocketID: number;
    UserID: string;
    PocketName: string;
    PocketAmount?: number | null;
    DateCreated?: Date | null;
    ModifiedDate?: Date | null;
}

export interface ApiPocket {
    Id: number;
    Name: string;
    Amount?: number | null;
    isMain: boolean;
}
