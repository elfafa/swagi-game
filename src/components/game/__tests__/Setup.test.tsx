import * as React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'

import Setup, { Props } from '../Setup'

function renderSetup(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        onStartClick: () => {},
    }
    return render(<Setup {...defaultProps} {...props} />)
}

describe('<Setup />', () => {
    test('should display game options', () => {
        renderSetup()
        expect(screen.getByText(/your resource/i)).toBeInTheDocument()
        expect(screen.getByText(/character/i)).toBeInTheDocument()
        expect(screen.getByText(/starship/i)).toBeInTheDocument()
        expect(screen.getByText(/how many players/i)).toBeInTheDocument()
        expect(screen.getByText(/play!/i)).toBeInTheDocument()
    })
})

describe('<Setup />', () => {
    test('should start the game with the requested options', async () => {
        const onStartClick = jest.fn()
        const { findByTestId } = renderSetup({
            onStartClick,
        })
        const resourceStarship = await findByTestId('resource-starship')
        fireEvent.click(resourceStarship)
        const threePlayer = await findByTestId('players-3')
        fireEvent.click(threePlayer)
        const playButtn = await findByTestId('play-btn')
        fireEvent.click(playButtn)
        expect(onStartClick.mock.calls.length).toBe(1)
        expect(onStartClick.mock.calls[0]).toEqual(['starship', 3])
    })
})
