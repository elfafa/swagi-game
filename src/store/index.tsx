import { combineReducers, Reducer } from 'redux'

import gameReducer from './game/reducer'
import { GameState } from './game/types'

export interface RootState {
    game: GameState
}

export const reducers: Reducer<RootState> = combineReducers<RootState>({
    game: gameReducer
})