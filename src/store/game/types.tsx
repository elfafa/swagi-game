export const START_GAME = 'START_GAME' // start a new game
export const GET_CARDS = 'GET_CARDS' // request for players cards
export const RECEIVE_CARD = 'RECEIVE_CARD' // receive a player card
export const NEXT_ROUND = 'NEXT_ROUND' // go to next round in game
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
    player_3: Player | null,
    player_4: Player | null,
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

/** Get cards action interface */
export interface GetCardsAction {
    type: typeof GET_CARDS,
}

/** Receive card action interface */
export interface ReceiveCardAction {
    type: typeof RECEIVE_CARD,
    player: number,
    card: object,
}

/** Next round action interface */
export interface NextRoundAction {
    type: typeof NEXT_ROUND,
}

/** End a game action interface */
export interface EndGameAction {
    type: typeof END_GAME,
}

export type GameActionTypes = StartGameAction | GetCardsAction | ReceiveCardAction | NextRoundAction | EndGameAction
