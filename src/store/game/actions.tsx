import { Dispatch } from 'redux'

import { START_GAME, StartGameAction } from './types'
import { NEW_ROUND } from './types'
import { RECEIVED_CARD } from './types'
import { RootState } from 'store'
import { loadCard } from 'libraries'

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
        for (let player = 1; player <= getState().game.setup.players; player++) {
            loadCard(
                getState().game.setup.resource,
                (card) => {
                    dispatch({
                        type: RECEIVED_CARD,
                        player: player,
                        card,
                    })
                }
            )
        }
    }
}