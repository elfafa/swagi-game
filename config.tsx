export const swapiBase: string = 'https://swapi.co/api'

export interface ObjectProps {
    [key: string]: string,
}

interface ResourceProps {
    api: string,
    display: string[],
    rules: ObjectProps,
    maxId: number,
}

interface ResourcesProps {
    [key: string]: ResourceProps,
}

interface ConfigProps {
    resources: ResourcesProps,
    minPlayers: number,
    maxPlayers: number,
}

export const config: ConfigProps = {
    // managed resources
    resources: {
        character: {
            // path to get the cards
            api: '/people/{id}/',
            // field to display in card
            display: [ 'name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender' ],
            // criteria to win
            rules: {
                mass: 'bigger',
                height: 'bigger',
                birth_year: 'bigger',
            },
            // maximum existing identifier
            maxId: 87,
        },
        starship: {
            // path to get the cards
            api: '/starships/{id}/',
            // field to display in card
            display: [ 'name', 'model', 'manufacturer', 'starship_class', 'length', 'crew', 'passengers', 'cargo_capacity' ],
            // criteria to win
            rules: {
                crew: 'bigger',
                passengers: 'bigger',
                length: 'bigger',
            },
            // maximum existing identifier
            maxId: 37,
        }
    },
    // how many players min
    minPlayers: 2,
    // how many players max
    maxPlayers: 4,
}