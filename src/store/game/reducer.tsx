import {
    GameState, GameActionTypes,
    START_GAME,
    RECEIVED_CARD,
    NEW_ROUND,
    Player,
    Round,
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
            let newRound: Round = {
                'player_1': JSON.parse(JSON.stringify(emptyPlayer)),
                'player_2': JSON.parse(JSON.stringify(emptyPlayer)),
            }
            for (let player = 1; player <= state.setup.players; player++) {
                newRound[`player_${player}`] = JSON.parse(JSON.stringify(emptyPlayer))
            }
            state.rounds.push(newRound)
            return {
                ...state,
            }
        case RECEIVED_CARD:
            const currentRound: number = state.rounds.length-1
            const currentPlayer: string = `player_${action.player}`
            state.rounds[currentRound][currentPlayer].card = action.card
            state.rounds[currentRound][currentPlayer].loading = false

            return {
                ...state,
                rounds: state.rounds,
            }
        default:
            return state
    }
}