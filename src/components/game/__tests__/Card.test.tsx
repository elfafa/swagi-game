import * as React from 'react'

import { render, screen } from '@testing-library/react'

import Card, { Props } from '../Card'

function renderCard(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        card: null,
        icon: null,
        loading: true,
        player: 1,
        resource: 'character',
        stats: {
            wins: 0,
            deuces: 0,
            looses: 0,
            leader: undefined,
        },
        winner: null,
    }
    return render(<Card {...defaultProps} {...props} />)
}

describe('<Card />', () => {
    test('should display loading', async () => {
        const { findByTestId } = renderCard()
        await findByTestId("card-loading")
    })
})

describe('<Card />', () => {
    test('should display stats', () => {
        const { findByTestId } = renderCard({
            stats: {
                wins: 1,
                deuces: 2,
                looses: 3,
            },
            loading: false
        })
        expect(screen.getByText(/W: 1/)).toBeInTheDocument()
        expect(screen.getByText(/D: 2/)).toBeInTheDocument()
        expect(screen.getByText(/L: 3/)).toBeInTheDocument()
    })
})

describe('<Card />', () => {
    test('should display given icon', async () => {
        const { findByTestId } = renderCard({
            icon: 'fake-icon',
            loading: false
        })
        await findByTestId("card")
        expect(screen.getByText(/fake-icon/)).toBeInTheDocument()
    })
})

describe('<Card />', () => {
    test('should display leader icon', async () => {
        const { findByTestId } = renderCard({
            icon: 'fake-icon',
            stats: {
                wins: 1,
                deuces: 2,
                looses: 3,
                leader: true,
            },
            loading: false
        })
        await findByTestId("card")
        expect(screen.queryByText(/fake-icon/)).toBeNull()
        expect(screen.getByText(/stars/)).toBeInTheDocument()
    })
})

describe('<Card />', () => {
    test('should highlight winner', async () => {
        const { findByTestId } = renderCard({
            winner: true,
            loading: false
        })
        const card = await findByTestId("card")
        expect(card.style.backgroundColor).toBe('yellow')
    })
})

describe('<Card />', () => {
    test('should display details', async () => {
        const { findByTestId } = renderCard({
            card: {
                name: 'character-name',
                height: 'character-height',
                mass: 'character-mass',
                birth_year: 'character-byear',
                gender: 'character-gender',
            },
            loading: false
        })
        await findByTestId("card")
        expect(screen.getByText(/character name/i)).toBeInTheDocument()
        expect(screen.getByText(/character height/i)).toBeInTheDocument()
        expect(screen.getByText(/character mass/i)).toBeInTheDocument()
        expect(screen.getByText(/character byear/i)).toBeInTheDocument()
        expect(screen.getByText(/character gender/i)).toBeInTheDocument()
    })
})

