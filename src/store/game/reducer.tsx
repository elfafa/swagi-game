import {
    GameState, GameActionTypes,
    START_GAME,
} from './types'

const initialState: GameState = {
    setup: {
        resource: null,
        players: null,
    },
    rounds: [],
    times: {
        start: null,
        end: null,
    },
}

export default function gameReducer(
    state = initialState,
    action: GameActionTypes
): GameState {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                setup: action.setup,
            }
        default:
            return state
    }
}