export type Region = {
    name: string;
    shortCode: string;
}

export type Card = {
    associatedCardRefs: Array<string>;
    gameAsset: string;
    fullAsset: string;
    region: Region;
    attack: number;
    cost: number;
    health: number;
    description: string;
    levelupDescription: string;
    flavorText: string;
    artistName: string;
    name: string;
    cardCode: string;
    keywords: Array<string>;
    set: number;
    language: string;
}