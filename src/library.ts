import { Card, Region } from "./types";
import * as fs from 'fs';
import * as path from 'path';

export class Library {
    cards: Array<Card>;
    language: string;
    count: number;
    page: number;
    total: number;

    static fromFiles(dir: string, language: string) {
        let cards = new Array<Card>();
        let count: number = 0;

        fs.unlinkSync(dir + '/library.json');

        fs.readdirSync(dir).forEach(file => {
            if (path.extname(file).toLowerCase() === '.json') {
                let cardsFromJson = fs.readFileSync(path.resolve(dir + '/' + file),'utf8');
                JSON.parse(cardsFromJson).map((card: any) => {
                    cards.push(Library.getCard(card, language));
                    count++;
                });
            }
        });

        let library: any = {
            cards,
            count,
            page: 1,
            total: count
        }

        if (cards.length > 0) {
            fs.writeFileSync(dir + '/library.json', JSON.stringify(library));
        }
    }

    static getCard(card: any, language: string): Card {
        return {
            associatedCardRefs: card.associatedCardRefs,
            gameAsset: card.assets[0].gameAbsolutePath,
            fullAsset: card.assets[0].fullAbsolutePath,
            region: Library.getRegion(card.region),
            attack: card.attack,
            cost: card.cost,
            health: card.health,
            description: card.description,
            levelupDescription: card.levelupDescription,
            flavorText: card.flavorText,
            artistName: card.artistName,
            name: card.name,
            cardCode: card.cardCode,
            keywords: card.keywords,
            set: card.set.replace('Set',''),
            language: language
        };
    }

    static getRegion(regionName: string): Region {
        switch (regionName) {
            case 'Bilgewater':
                return {
                    name: regionName,
                    shortCode: 'BW'
                }
            case 'Demacia':
                return {
                    name: regionName,
                    shortCode: 'DE'
                }
            case 'Freljord':
                return {
                    name: regionName,
                    shortCode: 'FR'
                }
            case 'Ionia':
                return {
                    name: regionName,
                    shortCode: 'IO'
                }
            case 'Targon':
                return {
                    name: regionName,
                    shortCode: 'MT'
                }
            case 'Noxus':
                return {
                    name: regionName,
                    shortCode: 'NX'
                }
            case 'Piltover & Zaun':
                return {
                    name: regionName,
                    shortCode: 'PZ'
                }
            case 'Shurima':
                return {
                    name: regionName,
                    shortCode: 'SH'
                }
            case 'Shadow Isles':
                return {
                    name: regionName,
                    shortCode: 'SI'
                }
            default:
                throw new Error('Region card not found: ' + regionName);
        }
    }
}