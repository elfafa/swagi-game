import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'

import { Card as CardDetails, Stat, purify } from 'libraries'

interface CardProps {
    card?: CardDetails | null, // card details
    resource: string, // which resource it is
    icon?: string, // which icon to use
    player: number, // which player card it is
    winner?: boolean | null, // is the card winning
    loading: boolean, // is the card loading
    stats?: Stat, // player statistics
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

export default (props: CardProps) => {
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
        <Card style={winner ? styles.winnerCard : null}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" style={stats.leader ? styles.leaderIcon : null}>
                        <Icon>{stats.leader ? 'stars' : icon}</Icon>
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