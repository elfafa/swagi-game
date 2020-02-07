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

import { ObjectProps, Stat } from 'libraries/types'

interface CardProps {
    card?: ObjectProps | null,
    resource: string,
    icon?: string,
    player: number,
    winner?: boolean | null,
    loading: boolean,
    stats?: Stat,
}

export default (props: CardProps) => {
    const { loading, card, resource, player, winner, icon, stats } = props

    let content: any = <CircularProgress key="loading"/>
    if (!loading) {
        let rows: any[] = []
        for (let field in card) {
            rows.push(
                <ListItem key={`${field}`}>
                    <ListItemText key="label" primary={`${field}`} />
                    <ListItemSecondaryAction key="value">
                        <ListItemText primary={`${card[field]}`} />
                    </ListItemSecondaryAction>
                </ListItem>
            )
        }
        content = <List>{rows}</List>
    }

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        <Icon>{icon}</Icon>
                    </Avatar>
                }
                title={`Player ${player}`}
                subheader={stats ? [
                    <label>W: {stats.winner}</label>,
                    <label>D: {stats.deuce}</label>,
                    <label>L: {stats.looser}</label>
                ] : null}
            />
            <CardContent>
                {content}
            </CardContent>
        </Card>
    )
}