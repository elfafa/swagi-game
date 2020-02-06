import { START_GAME, StartGameAction } from './types'

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