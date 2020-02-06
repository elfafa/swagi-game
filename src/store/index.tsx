import { combineReducers, Dispatch, Reducer } from 'redux'

import { GameState } from './game/types'
import gameReducer from './game/reducer'

export interface RootState {
    game: GameState
}

export const reducers: Reducer<RootState> = combineReducers<RootState>({
    game: gameReducer
})