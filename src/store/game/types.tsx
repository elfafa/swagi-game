export const START_GAME = 'START_GAME' // start a new game
export const RECEIVED_CARD = 'RECEIVED_CARD' // receive a player card
export const NEW_ROUND = 'NEW_ROUND' // go to next round in game
export const END_GAME = 'END_GAME' // end current game

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

/** Information of the game */
export interface GameState {
    setup: Setup,
    rounds: Round[],
    times: Times,
}

/** Start a game action interface */
export interface StartGameAction {
    type: typeof START_GAME,
    setup: Setup,
}

/** Receive card action interface */
export interface ReceiveCardAction {
    type: typeof RECEIVED_CARD,
    card: object,
    player: number,
}

/** Next round action interface */
export interface NewRoundAction {
    type: typeof NEW_ROUND,
}

/** End a game action interface */
export interface EndGameAction {
    type: typeof END_GAME,
}

export type GameActionTypes = StartGameAction | ReceiveCardAction | NewRoundAction | EndGameAction
