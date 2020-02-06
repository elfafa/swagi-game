import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

import { ObjectProps } from '../../../config'

interface CardProps {
    card?: ObjectProps | null,
    resource: string,
    player: number,
    winner?: boolean | null,
}

export default (props: CardProps) => {
    const { card, resource, player, winner } = props

    let content = []
    if (card) {
        for (let field in card) {
            content.push(
                <Typography>{card[field]}</Typography>
            )
        }
    } else {
        content.push(<CircularProgress />)
    }

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom>
                    {resource}
                </Typography>
                {content}
            </CardContent>
        </Card>
    )
}