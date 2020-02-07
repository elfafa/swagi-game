import axios from 'axios'

import { ObjectProps, swapiBase, config } from '../../config'

const getApiUrl = (resource: string, id: number) => {
    return config.resources[resource].api.replace('{id}', id.toString())
}

/** will load a random cards for the given resource */
export const loadCard = async (resource: string, callback: (card: ObjectProps) => void) => {
    let card: ObjectProps
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
                    const data: ObjectProps = response.data
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