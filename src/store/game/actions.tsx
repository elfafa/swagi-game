import { Dispatch } from 'redux'

import { START_GAME, StartGameAction, NEW_ROUND, RECEIVED_CARD, SET_WINNERS } from './types'
import { RootState } from 'store'
import { loadCard, getWinners, Round, Rules, Card } from 'libraries'

import { config } from '../../../config'

/** Start a game action */
export function startGame(resource: string, players: number): StartGameAction {
    return {
        type: START_GAME,
        setup: {
            resource,
            players,
        },
    }
}

/** Start a new round action */
export function newRound(): any {
    return (dispatch: Dispatch, getState: () => RootState): any => {
        dispatch({
            type: NEW_ROUND,
        })
        // load new cards
        const resource: string = getState().game.setup.resource
        const players: number = getState().game.setup.players
        let calls: Promise<void>[] = []
        for (let player = 1; player <= players; player++) {
            calls.push(loadCard(
                resource,
                (card: Card) => {
                    dispatch({
                        type: RECEIVED_CARD,
                        player: player,
                        card,
                    })
                }
            ))
        }
        // when all cards are loaded, detect the winner
        Promise.all(calls).then((responses) => {
            dispatch(whoWin())
        })
    }
}

/** Detect the winner */
export function whoWin(): any {
    return (dispatch: Dispatch, getState: () => RootState): any => {
        const rules: Rules = config.resources[getState().game.setup.resource].rules
        const round: Round = getState().game.rounds[getState().game.rounds.length-1]

        dispatch({
            type: SET_WINNERS,
            winners: getWinners(round, rules)
        })
    }
}