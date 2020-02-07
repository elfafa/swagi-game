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
    loading: boolean,
}

export default (props: CardProps) => {
    const { loading, card, resource, player, winner } = props

    let content = []
    if (!loading) {
        for (let field in card) {
            content.push(
                <Typography key={field}>{card[field]}</Typography>
            )
        }
    } else {
        content.push(<CircularProgress key="loading"/>)
    }

    return (
        <Card>
            <CardContent>
                <Typography key="resource" gutterBottom>
                    {resource}
                </Typography>
                {content}
            </CardContent>
        </Card>
    )
}