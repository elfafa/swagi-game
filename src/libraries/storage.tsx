import { Game, Round, Stats } from 'libraries'

const swapiUniqKey = 'SWAPI_GAMES'

export const loadGames = () => {
    const games = localStorage.getItem(swapiUniqKey)
    if (!games) {
        return []
    }
    return JSON.parse(games)
}

const saveGames = (games: Game[]) => {
    localStorage.setItem(swapiUniqKey, JSON.stringify(games))
}

export const saveGame = (resource: string, stats: Stats, rounds: Round[], id?: number) => {
    const games: Game[] = loadGames()
    if (id) {
        const index: number = games.findIndex((game) => game.id === id)
        games[index].stats = stats
        games[index].rounds = rounds
    } else {
        id = games.length + 1
        games.push({
            id,
            resource,
            stats,
            rounds,
            times: {
                start: +new Date(),
            },
        })
    }
    saveGames(games)
    return id
}

export const closeGame = (id: number) => {
    const games: Game[] = loadGames()
    const index: number = games.findIndex((game) => game.id === id)
    games[index].times.end = +new Date()
    saveGames(games)
}
