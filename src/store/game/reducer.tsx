import { GameState, GameActionTypes, START_GAME, RECEIVED_CARD, NEW_ROUND } from './types'
import { Player, Round, Stat, Stats } from 'libraries/types'

const initialState: GameState = {
    setup: {
        resource: null,
        players: null,
    },
    rounds: [],
    stats: null,
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

const initialStat: Stat = {
    winner: 0,
    deuce: 0,
    looser: 0,
}

export default function gameReducer(
    state = initialState,
    action: GameActionTypes
): GameState {
    switch (action.type) {
        case START_GAME:
            let newStats: Stats = {
                'player_1': JSON.parse(JSON.stringify(initialStat)),
                'player_2': JSON.parse(JSON.stringify(initialStat)),
            }
            for (let player = 1; player <= action.setup.players; player++) {
                newStats[`player_${player}`] = JSON.parse(JSON.stringify(initialStat))
            }
            return {
                ...state,
                setup: action.setup,
                stats: newStats,
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