export interface ObjectProps {
    [key: string]: string,
}

/** Configuration of the game */
export interface Setup {
    resource: string,
    players: number,
}

/** Timestamps of the game */
export interface Times {
    start: number,
    end: number | null,
}

/** One player details */
export interface Player {
    card: object,
    loading: boolean,
    winner: boolean,
}

/** One round details */
export interface Round {
    player_1: Player,
    player_2: Player,
    player_3?: Player,
    player_4?: Player,
    [propName: string]: Player
}

/** One player stats */
export interface Stat {
    winner: number,
    deuce: number,
    looser: number,
}

/** One game stats */
export interface Stats {
    player_1: Stat,
    player_2: Stat,
    player_3?: Stat,
    player_4?: Stat,
    [propName: string]: Stat
}
