import { GameState, GameActionTypes, START_GAME, RECEIVED_CARD, SET_WINNERS, NEW_ROUND } from './types'
import { Player, Round, Stat, Stats } from 'libraries'

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
    card: null,
    loading: true,
    winner: undefined,
}

const initialStat: Stat = {
    wins: 0,
    deuces: 0,
    looses: 0,
    leader: undefined,
}

export default function gameReducer(
    state = initialState,
    action: GameActionTypes
): GameState {
    const currentRound: number = state.rounds.length-1

    switch (action.type) {
        case START_GAME:
            let newStats: Stats = {} as Stats
            for (let player = 1; player <= action.setup.players; player++) {
                newStats[`player${player}`] = JSON.parse(JSON.stringify(initialStat))
            }
            return {
                ...state,
                setup: action.setup,
                stats: newStats,
            }
        case NEW_ROUND:
            let newRound: Round = {} as Round
            for (let player = 1; player <= state.setup.players; player++) {
                newRound[`player${player}`] = JSON.parse(JSON.stringify(emptyPlayer))
            }
            state.rounds.push(newRound)
            return {
                ...state,
            }
        case RECEIVED_CARD:
            const currentPlayer: string = `player${action.player}`
            state.rounds[currentRound][currentPlayer].card = action.card
            state.rounds[currentRound][currentPlayer].loading = false
            return {
                ...state,
                rounds: state.rounds,
            }
        case SET_WINNERS:
            let leaders: string[] = []
            let bestWins: number = 0
            for (let player = 1; player <= state.setup.players; player++) {
                if (action.winners.includes(`player${player}`)) {
                    state.rounds[currentRound][`player${player}`].winner = true
                    const key = (action.winners.length === state.setup.players) ? 'deuces' : 'wins'
                    state.stats[`player${player}`][key]++
                } else {
                    state.rounds[currentRound][`player${player}`].winner = false
                    state.stats[`player${player}`]['looses']++
                }
                if (bestWins === state.stats[`player${player}`]['wins']) {
                    leaders.push(`player${player}`)
                } else if (bestWins < state.stats[`player${player}`]['wins']) {
                    bestWins = state.stats[`player${player}`]['wins']
                    leaders = [`player${player}`]
                }
            }
            for (let player = 1; player <= state.setup.players; player++) {
                state.stats[`player${player}`].leader = (1 === leaders.length && leaders.includes(`player${player}`))
            }
            return {
                ...state,
            }
        default:
            return state
    }
}