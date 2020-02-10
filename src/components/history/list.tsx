import * as React from 'react'

import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { Text } from 'components/elements'
import { loadGames, Game, formatDate } from 'libraries'

import { config } from '../../../config'

const styles = {
    toolbar: {
        backgroundColor: 'grey',
        color: 'white',
    },
    table: {
        borderRadius: '0px',
    },
    header: {
        backgroundColor: 'grey',
        color: 'white',
    },
    // highlight winning row
    winnerRow: {
        backgroundColor: 'yellow',
    },
}

export default () => {
    const games = loadGames()

    if (!games.length) {
        return <Text>No history yet</Text>
    }

    const history: any[] = []
    games.reverse().map((game: Game) => {
        const rows = []
        let stats
        for (let player = 1; player <= config.maxPlayers; player++) {
            stats = game.stats[`player${player}`]
            if (stats) {
                rows.push(
                    <TableRow
                        key={player}
                        style={stats.leader ? styles.winnerRow : null}
                    >
                        <TableCell component="th" scope="row">{`Player ${player}`}</TableCell>
                        <TableCell align="center">{stats.wins}</TableCell>
                        <TableCell align="center">{stats.deuces}</TableCell>
                        <TableCell align="center">{stats.looses}</TableCell>
                    </TableRow>,
                )
            }
        }

        history.push(
            <Box
                m={2}
                data-testid={`game${game.id}`}
                key={`game${game.id}`}
            >
                <List component="nav" aria-label="" style={styles.toolbar}>
                    <ListItem>Resource: {game.resource}</ListItem>
                    <ListItem>From: {formatDate(game.times.start)}</ListItem>
                    <ListItem>To: {game.times.end ? formatDate(game.times.end) : 'unknown'}</ListItem>
                </List>
                <TableContainer
                    data-testid={`game${game.id}-details`}
                    component={Paper}
                    style={styles.table}
                >
                    <Table size="small" aria-label="history">
                        <TableHead>
                            <TableRow>
                                <TableCell style={styles.header} />
                                <TableCell style={styles.header} align="center">Wins</TableCell>
                                <TableCell style={styles.header} align="center">Deuces</TableCell>
                                <TableCell style={styles.header} align="center">Looses</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>,
        )
    })

    return <>{history}</>
}
