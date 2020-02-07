import { Rules } from 'libraries'

export const swapiBase: string = 'https://swapi.co/api'

interface ResourceProps {
    api: string, // path to get the cards
    display: string[], // field to display in card
    rules: Rules, // criteria to win
    maxId: number, // maximum existing identifier
    icon: string, // which icon to use
}

interface ResourcesProps {
    [key: string]: ResourceProps,
}

interface ConfigProps {
    resources: ResourcesProps, // managed resources
    minPlayers: number, // how many players min in game
    maxPlayers: number, // how many players max in game
}

export const config: ConfigProps = {
    resources: {
        character: {
            api: '/people/{id}/',
            display: [ 'name', 'height', 'mass', 'birth_year', 'gender' ],
            rules: {
                mass: 'bigger',
                height: 'bigger',
                birth_year: 'bigger',
            },
            maxId: 87,
            icon: 'person',
        },
        starship: {
            api: '/starships/{id}/',
            display: [ 'name', 'model', 'length', 'crew', 'passengers' ],
            rules: {
                crew: 'bigger',
                passengers: 'bigger',
                length: 'bigger',
            },
            maxId: 37,
            icon: 'flight',
        }
    },
    minPlayers: 2,
    maxPlayers: 4,
}