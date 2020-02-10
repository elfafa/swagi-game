import * as React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'

import List from '../List'
let libraries = require('libraries')

function renderList() {
    return render(<List />)
}

describe('<List />', () => {
    test('should display no history when none', async () => {
        libraries.loadGames = jest.fn(() => [])
        renderList()
        expect(screen.getByText(/no history/i)).toBeInTheDocument()
    })
})

describe('<List />', () => {
    test('should display history', async () => {
        libraries.loadGames = jest.fn(() => [
            { 
                id: 10,
                resource: 'character',
                stats: {
                    player1: {
                        wins: 1,
                        deuces: 2,
                        looses: 3,
                        leader: false,
                    },
                    player2:  {
                        wins: 3,
                        deuces: 2,
                        looses: 1,
                        leader: true,
                    },
                },
                rounds: [], // not managed in history at this time
                times: {
                    start: 1580515200000, // 01/02/2020 00:00:00
                    end: 1580533200000, // 01/02/2020 05:00:00
                }
            },
            { 
                id: 20,
                resource: 'starship',
                stats: {
                    player1: {
                        wins: 2,
                        deuces: 1,
                        looses: 1,
                        leader: true,
                    },
                    player2:  {
                        wins: 1,
                        deuces: 1,
                        looses: 2,
                        leader: false,
                    },
                },
                rounds: [], // not managed in history at this time
                times: {
                    start: 1580688000000, // 03/02/2020 00:00:00
                    end: 1580706000000, // 03/02/2020 05:00:00
                }
            }
        ])
        const { findByTestId } = renderList()
        expect(screen.queryByText(/no history/i)).toBeNull()
        // first game
        const firstGame = await findByTestId('game10')
        expect(firstGame.textContent).toMatch(/character/i)
        expect(firstGame.textContent).toMatch(/from: 01\/02\/2020 00:00:00/i)
        expect(firstGame.textContent).toMatch(/to: 01\/02\/2020 05:00:00/i)
        expect(firstGame.querySelector('tbody tr:nth-child(1) th').textContent).toMatch(/player 1/i)
        expect(firstGame.querySelectorAll('tbody tr:nth-child(1) td')[0].textContent).toMatch(/1/i)
        expect(firstGame.querySelectorAll('tbody tr:nth-child(1) td')[1].textContent).toMatch(/2/i)
        expect(firstGame.querySelectorAll('tbody tr:nth-child(1) td')[2].textContent).toMatch(/3/i)
        expect(firstGame.querySelector('tbody tr:nth-child(2) th').textContent).toMatch(/player 2/i)
        expect(firstGame.querySelectorAll('tbody tr:nth-child(2) td')[0].textContent).toMatch(/3/i)
        expect(firstGame.querySelectorAll('tbody tr:nth-child(2) td')[1].textContent).toMatch(/2/i)
        expect(firstGame.querySelectorAll('tbody tr:nth-child(2) td')[2].textContent).toMatch(/1/i)
        // second game
        const secondGame = await findByTestId('game20')
        expect(secondGame.textContent).toMatch(/starship/i)
        expect(secondGame.textContent).toMatch(/from: 03\/02\/2020 00:00:00/i)
        expect(secondGame.textContent).toMatch(/to: 03\/02\/2020 05:00:00/i)
    })
})