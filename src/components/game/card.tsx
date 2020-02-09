import * as React from 'react'

import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CircularProgress from '@material-ui/core/CircularProgress'
import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

import { Card as CardDetails, Stat, purify } from 'libraries'

export interface Props {
    card?: CardDetails | null, // card details
    icon?: string, // which icon to use
    loading: boolean, // is the card loading
    player: number, // which player card it is
    resource: string, // which resource it is
    stats?: Stat, // player statistics
    winner?: boolean | null, // is the card winning
}

const styles = {
    // highlight winning card
    winnerCard: {
        backgroundColor: 'yellow',
    },
    // highlight leader
    leaderIcon: {
        backgroundColor: 'red',
    },
}

export default (props: Props) => {
    const { loading, card, resource, player, winner, icon, stats } = props

    let content: any = <CircularProgress key="loading"/>
    if (!loading) {
        let rows: any[] = []
        for (let field in card) {
            rows.push(
                <ListItem key={field}>
                    <ListItemText key="label" primary={purify(field)} />
                    <ListItemSecondaryAction key="value">
                        <ListItemText primary={purify(card[field])} />
                    </ListItemSecondaryAction>
                </ListItem>
            )
        }
        content = <List>{rows}</List>
    }

    return (
        <Card data-testid="card" style={winner ? styles.winnerCard : null}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" style={stats.leader ? styles.leaderIcon : null}>
                        <Tooltip title={(stats.leader ? 'Leader ' : '')+resource}>
                            <Icon>{stats.leader ? 'stars' : icon}</Icon>
                        </Tooltip>
                    </Avatar>
                }
                title={`Player ${player}`}
                subheader={stats ? [
                    <label key="wins">W: {stats.wins}</label>,
                    '  ',
                    <label key="deuces">D: {stats.deuces}</label>,
                    '  ',
                    <label key="looses">L: {stats.looses}</label>
                ] : null}
            />
            <CardContent>
                {content}
            </CardContent>
        </Card>
    )
}