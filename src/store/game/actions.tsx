import { Dispatch } from 'redux'

import { START_GAME, StartGameAction } from './types'
import { REQUEST_CARDS, RequestCardsAction } from './types'
import { RootState } from '../index'

/** Start a game action */
export function startGame(resource: string, players: number): StartGameAction {
    return {
        type: START_GAME,
        setup: {
            resource,
            players
        },
    }
}

export function requestCards(): any {
    return (dispatch: Dispatch, getState: () => RootState): RequestCardsAction => {
        return dispatch({
            type: REQUEST_CARDS,
        })
    }
}