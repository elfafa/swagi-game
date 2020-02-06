const swapiBase = 'https://swapi.co/api'
const getUrl = (path: string) => swapiBase + path

export default {
    // base url for SWAPI apis
    swapiBase,
    // paths for each kind of resources
    apis: {
        character: getUrl('/people'),
        starship: getUrl('/starships')
    },
    // managed resources
    resources: {
        character: {
            // field to display in card
            display: [ 'name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender' ],
            // criteria to win
            rules: {
                mass: 'bigger',
                height: 'bigger',
                birth_year: 'bigger',
            },
        },
        starship: {
            // field to display in card
            display: [ 'name', 'model', 'manufacturer', 'starship_class', 'length', 'crew', 'passengers', 'cargo_capacity' ],
            // criteria to win
            rules: {
                crew: 'bigger',
                passengers: 'bigger',
                length: 'bigger',
            },
        }
    },
    // how many players min
    minPlayers: 2,
    // how many players max
    maxPlayers: 4,
}