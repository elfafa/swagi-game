import * as React from 'react'

import { render, cleanup } from '@testing-library/react'

import Round, { Props } from '../Round'

jest.mock('containers/game/Card')

function renderRound(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        players: 3,
        stats: {
            player1: null,
            player2: null,
            player3: null,
        },
        onNewRound: () => {},
        onEndGame: () => {}
    }
    return render(<Round {...defaultProps} {...props} />)
}

describe('<Round />', () => {
    test('should dispatch new round on mount', () => {
        const onNewRound = jest.fn()
        renderRound({
            onNewRound
        })
        expect(onNewRound.mock.calls.length).toBe(1)
    })
})

describe('<Round />', () => {
    test('should display the cards', async () => {
        const { findAllByTestId } = renderRound()
        const cards = await findAllByTestId('card')
        expect(cards.length).toBe(3)
    })
})

describe('<Round />', () => {
    test('should dispatch end game on unmount', () => {
        const onEndGame = jest.fn()
        renderRound({
            onEndGame
        })
        cleanup()
        expect(onEndGame.mock.calls.length).toBe(1)
    })
})