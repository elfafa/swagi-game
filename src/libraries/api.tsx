import axios from 'axios'

import { swapiBase, config } from '../../config'
import { Card } from 'libraries'

const getApiUrl = (resource: string, id: number) => {
    return config.resources[resource].api.replace('{id}', id.toString())
}

/** will load a random cards for the given resource */
export const loadCard = async (resource: string, callback: (card: Card) => void) => {
    let card: Card
    const apiClient = axios.create({
        baseURL: swapiBase,
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const maxId = config.resources[resource].maxId
    let alreadyTried: number[] = []
    let triedId: number
    while (!card) {
        try {
            triedId = Math.floor(Math.random() * maxId) + 1
            if (!alreadyTried.includes(triedId)) {
                alreadyTried.push(triedId)
                const response = await apiClient.get(getApiUrl(resource, triedId))
                if (200 === response.status) {
                    const data: Card = response.data
                    card = {}
                    for (let field of config.resources[resource].display) {
                        card[field] = data[field]
                    }
                }
            }
        } catch (err) {
            console.error(err)
        }
    }
    callback(card)
}