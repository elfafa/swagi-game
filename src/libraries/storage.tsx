import { Game, Round, Stats } from 'libraries'

const swapiUniqKey: string = 'SWAPI_GAMES'

export const loadGames = () => {
    let games
    games = localStorage.getItem(swapiUniqKey)
    if (!games) {
        return []
    }
    return JSON.parse(games)
}

const saveGames = (games: Game[]) => {
    localStorage.setItem(swapiUniqKey, JSON.stringify(games))
}

export const saveGame = (stats: Stats, rounds: Round[], id?: number) => {
    let games: Game[] = loadGames()
    let game: Game
    if (id) {
        let index: number = games.findIndex(game => game.id === id)
        games[index].stats = stats
        games[index].rounds = rounds
        if (close) {
            games[index].times.end = + new Date()
        }
    } else {
        id = games.length + 1
        games.push({
            id,
            stats,
            rounds,
            times: {
                start: + new Date()
            }
        })
    }
    saveGames(games)
    return id
}

export const closeGame = (id: number) => {
    let games: Game[] = loadGames()
    let index: number = games.findIndex(game => game.id === id)
    games[index].times.end = + new Date()
    saveGames(games)
}