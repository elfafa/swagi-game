import * as React from 'react'

import { render, fireEvent, waitForElement } from '@testing-library/react'

import Card, { Props } from '../Card'

function renderCard(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        card: null, // 
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
    test('should display', async () => {
        const { findByTestId } = renderCard()
        const card = await findByTestId("card")
    })
})