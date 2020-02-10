import {
    Setup, Round, Stats, Times,
} from 'libraries'

export const START_GAME = 'START_GAME' // start a new game
export const RECEIVED_CARD = 'RECEIVED_CARD' // receive a player card
export const SET_WINNERS = 'SET_WINNERS' // set the winners of the round
export const NEW_ROUND = 'NEW_ROUND' // go to next round in game
export const END_GAME = 'END_GAME' // end current game

/** Information of the game */
export interface GameState {
    id: number;
    setup: Setup;
    rounds: Round[];
    stats?: Stats;
    times: Times;
}

/** Start a game action interface */
export interface StartGameAction {
    type: typeof START_GAME;
    setup: Setup;
}

/** Receive card action interface */
export interface ReceiveCardAction {
    type: typeof RECEIVED_CARD;
    card: object;
    player: number;
}

/** Set winnes of current round interface */
export interface SetWinnersAction {
    type: typeof SET_WINNERS;
    winners: string[];
}

/** Next round action interface */
export interface NewRoundAction {
    type: typeof NEW_ROUND;
}

/** End a game action interface */
export interface EndGameAction {
    type: typeof END_GAME;
}

/** List of managed actions for game reducer * */
export type GameActionTypes =
    StartGameAction |
    ReceiveCardAction |
    SetWinnersAction |
    NewRoundAction |
    EndGameAction
