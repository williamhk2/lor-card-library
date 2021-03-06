# lor-card-library
A simple tool for generate a single json file with all cards from Legends of Runeterra (per language)

### Instructions

- Copy all files of a specific set or all sets from a specific language, inside `cards` folder. You can get all card files at https://developer.riotgames.com/docs/lor.
- Execute the command `npm run dev language=en_us` (choose your language)
- The tool will generate a single file `en_us.json`, inside `cards/library` folder, with all cards from all files included. 

Example cards file:
```
{
    "cards": [
        {
            "associatedCardRefs": [
                "04SH049T1"
            ],
            "gameAsset": "http://dd.b.pvp.net/2_3_0/set4/en_us/img/cards/04SH049.png",
            "fullAsset": "http://dd.b.pvp.net/2_3_0/set4/en_us/img/cards/04SH049-full.png",
            "region": {
                "name": "Shurima",
                "shortCode": "SH"
            },
            "attack": 1,
            "cost": 1,
            "health": 1,
            "description": "<link=vocab.RoundStart><style=Vocab>Round Start</style></link>: If you've leveled a champion, transform me into <link=card.transform><style=AssociatedCard>Exalted Poro</style></link>.",
            "levelupDescription": "",
            "flavorText": "She didn't know what she had found, precisely... but it was shiny, and looked like a good snack.",
            "artistName": "Kudos Productions",
            "name": "Destined Poro",
            "cardCode": "04SH049",
            "keywords": [],
            "set": "4",
            "language": "en_us"
        },
        ...
    "count": 100,
    "page": 1,
    "total": 100
}
```