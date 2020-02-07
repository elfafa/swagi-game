import {
    GameState, GameActionTypes,
    START_GAME,
    RECEIVED_CARD,
    NEW_ROUND,
    Round,
    Player,
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

const emptyPlayer: Player = {
    card: {},
    loading: true,
    winner: undefined,
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
        case NEW_ROUND:
            state.rounds.push({
                player_1: JSON.parse(JSON.stringify(emptyPlayer)),
                player_2: JSON.parse(JSON.stringify(emptyPlayer)),
                player_3: (2 < state.setup.players ? JSON.parse(JSON.stringify(emptyPlayer)) : undefined),
                player_4: (3 < state.setup.players ? JSON.parse(JSON.stringify(emptyPlayer)) : undefined),
            })
            return {
                ...state,
            }
        case RECEIVED_CARD:
            state.rounds[state.rounds.length-1]['player_'+action.player].card = action.card
            state.rounds[state.rounds.length-1]['player_'+action.player].loading = false

            return {
                ...state,
                rounds: state.rounds,
            }
        default:
            return state
    }
}